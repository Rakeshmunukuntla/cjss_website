'use client';

import createGlobe from 'cobe';
import React, { useEffect, useRef } from 'react';

// Utility function to convert a hex color string to a normalized RGB array
// Handles #RGB and #RRGGBB formats.
const hexToRgbNormalized = (hex: string): [number, number, number] => {
  let r = 0,
    g = 0,
    b = 0;

  // Remove the # if present
  const cleanHex = hex.startsWith('#') ? hex.slice(1) : hex;

  if (cleanHex.length === 3) {
    // Handle shorthand hex codes (e.g., #00F -> #0000FF)
    r = parseInt(cleanHex[0] + cleanHex[0], 16);
    g = parseInt(cleanHex[1] + cleanHex[1], 16);
    b = parseInt(cleanHex[2] + cleanHex[2], 16);
  } else if (cleanHex.length === 6) {
    // Handle full hex codes (e.g., #RRGGBB)
    r = parseInt(cleanHex.substring(0, 2), 16);
    g = parseInt(cleanHex.substring(2, 4), 16);
    b = parseInt(cleanHex.substring(4, 6), 16);
  } else {
    // Fallback for invalid hex (or if you want to throw an error)
    console.warn(`Invalid hex color: ${hex}. Falling back to black.`);
    return [0, 0, 0];
  }

  // Normalize to 0-1 range
  return [r / 255, g / 255, b / 255];
};

interface GlobeProps {
  className?: string;
  theta?: number;
  dark?: number;
  scale?: number;
  diffuse?: number;
  mapSamples?: number;
  mapBrightness?: number;
  baseColor?: [number, number, number] | string;
  markerColor?: [number, number, number] | string;
  glowColor?: [number, number, number] | string;
}

const Globe: React.FC<GlobeProps> = ({
  className,
  theta = 0.25,
  dark = 1,
  scale = 1.1,
  diffuse = 1.2,
  mapSamples = 60000,
  mapBrightness = 1.5,
  baseColor = '#3b82f6',
  markerColor = '#60a5fa',
  glowColor = '#0ea5e9',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<any>(null);

  // Refs for interactive rotation and dragging state
  const phiRef = useRef(0);
  const thetaRef = useRef(theta);
  const isDragging = useRef(false);
  const lastMouseX = useRef(0);
  const lastMouseY = useRef(0);
  const autoRotateSpeed = 0.003;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Resolve color props to the [R, G, B] format required by cobe
    const resolvedBaseColor: [number, number, number] =
      typeof baseColor === 'string'
        ? hexToRgbNormalized(baseColor)
        : baseColor || [0.235, 0.51, 0.96];

    const resolvedMarkerColor: [number, number, number] =
      typeof markerColor === 'string'
        ? hexToRgbNormalized(markerColor)
        : markerColor || [0.376, 0.647, 0.98];

    const resolvedGlowColor: [number, number, number] =
      typeof glowColor === 'string'
        ? hexToRgbNormalized(glowColor)
        : glowColor || [0.058, 0.647, 0.91];

    const initGlobe = () => {
      if (globeRef.current) {
        globeRef.current.destroy();
        globeRef.current = null;
      }

      const rect = canvas.getBoundingClientRect();
      const size = Math.min(rect.width, rect.height);
      const devicePixelRatio = window.devicePixelRatio || 1;
      const internalWidth = size * devicePixelRatio;
      const internalHeight = size * devicePixelRatio;

      canvas.width = internalWidth;
      canvas.height = internalHeight;

      try {
        globeRef.current = createGlobe(canvas, {
          devicePixelRatio: devicePixelRatio,
          width: internalWidth,
          height: internalHeight,
          phi: phiRef.current,
          theta: thetaRef.current,
          dark: dark,
          scale: scale,
          diffuse: diffuse,
          mapSamples: mapSamples,
          mapBrightness: mapBrightness,
          baseColor: resolvedBaseColor,
          markerColor: resolvedMarkerColor,
          glowColor: resolvedGlowColor,
          opacity: 1,
          offset: [0, 0],
          markers: [],
          onRender: (state: Record<string, any>) => {
            if (!isDragging.current) {
              phiRef.current += autoRotateSpeed;
            }
            state.phi = phiRef.current;
            state.theta = thetaRef.current;
          },
        });

        // Verify globe was created successfully
        if (!globeRef.current) {
          console.error('Globe initialization failed: createGlobe returned null');
          return;
        }
      } catch (error) {
        console.error('Error creating globe:', error);
        return;
      }
    };

    // --- Mouse Interaction Handlers ---
    const onMouseDown = (e: MouseEvent) => {
      if (!globeRef.current) return;
      isDragging.current = true;
      lastMouseX.current = e.clientX;
      lastMouseY.current = e.clientY;
      canvas.style.cursor = 'grabbing';
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!globeRef.current) return;
      if (isDragging.current) {
        const deltaX = e.clientX - lastMouseX.current;
        const deltaY = e.clientY - lastMouseY.current;

        const rotationSpeed = 0.005;

        phiRef.current += deltaX * rotationSpeed;
        thetaRef.current = Math.max(
          -Math.PI / 2,
          Math.min(Math.PI / 2, thetaRef.current - deltaY * rotationSpeed)
        );

        lastMouseX.current = e.clientX;
        lastMouseY.current = e.clientY;
      }
    };

    const onMouseUp = () => {
      if (!globeRef.current) return;
      isDragging.current = false;
      canvas.style.cursor = 'grab';
    };

    const onMouseLeave = () => {
      if (!globeRef.current) return;
      if (isDragging.current) {
        isDragging.current = false;
        canvas.style.cursor = 'grab';
      }
    };
    // --- End Mouse Interaction Handlers ---

    initGlobe();

    // Attach event listeners for mouse interaction
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mouseleave', onMouseLeave);

    const handleResize = () => {
      initGlobe();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousedown', onMouseDown);
        canvas.removeEventListener('mousemove', onMouseMove);
        canvas.removeEventListener('mouseup', onMouseUp);
        canvas.removeEventListener('mouseleave', onMouseLeave);
      }
      if (globeRef.current) {
        globeRef.current.destroy();
        globeRef.current = null;
      }
    };
  }, [theta, dark, scale, diffuse, mapSamples, mapBrightness, baseColor, markerColor, glowColor]);

  return (
    <div
      className={className || 'flex items-center justify-center z-10 mx-auto'}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '400px',
        minWidth: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          maxHeight: '100%',
          aspectRatio: '1',
          display: 'block',
          cursor: 'grab',
        }}
      />
    </div>
  );
};

export default Globe;
