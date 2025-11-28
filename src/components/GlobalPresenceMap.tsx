// src/components/GlobalPresenceMerged.tsx
'use client'

import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'
import Globe, { type GlobeMethods } from 'react-globe.gl'

/**
 * Helpers
 */
const countryCodeToEmoji = (code: string) =>
  code.toUpperCase().replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)))

type Location = {
  id: string
  name: string
  country: string // ISO2 (e.g. "IN", "SG")
  lat: number
  lng: number
  color: string
}

/**
 * Data: update/add offices here
 */
const OFFICES: Location[] = [
  {
    id: 'hyderabad',
    name: 'CJSS Hyderabad',
    country: 'IN',
    lat: 17.4366,
    lng: 78.3644,
    color: '#a855f7',
  },
  {
    id: 'singapore',
    name: 'CJSS Singapore',
    country: 'SG',
    lat: 1.3521,
    lng: 103.8198,
    color: '#06b6d4',
  },
]

export default function GlobalPresenceMerged() {
  const globeRef = useRef<GlobeMethods | undefined>(undefined)

  // Points state (we'll mutate altitude for bounce)
  const [points, setPoints] = useState(OFFICES.map((o) => ({ ...o, altitude: 0.02 })))

  // For animation phase
  const phaseRef = useRef(0)
  useEffect(() => {
    let raf = 0
    const animate = () => {
      phaseRef.current += 0.03
      // produce smooth bounce for each point
      setPoints((prev) =>
        prev.map((p, idx) => {
          const bounce = 0.015 * Math.abs(Math.sin(phaseRef.current + idx * 0.8))
          return {
            ...p,
            altitude: 0.015 + bounce, // base altitude + bounce
          }
        }),
      )
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  // Arc (connection) data - from Hyderabad -> Singapore
  const arcs = [
    {
      startLat: OFFICES[0].lat,
      startLng: OFFICES[0].lng,
      endLat: OFFICES[1].lat,
      endLng: OFFICES[1].lng,
      color: [OFFICES[0].color, OFFICES[1].color],
      stroke: 0.8,
      dashLength: 0.5,
    },
  ]

  // camera focus helper
  const focusOn = (lat: number, lng: number, altitude = 2.5) => {
    try {
      globeRef.current?.pointOfView({ lat, lng, altitude }, 1000)
    } catch (e) {
      // ignore if not ready yet
      console.warn('focusOn error', e)
    }
  }

  // auto-rotate + camera options
  useEffect(() => {
    const g = globeRef.current
    if (!g) return
    // Wait a tick
    setTimeout(() => {
      try {
        g.controls().autoRotate = true
        g.controls().autoRotateSpeed = 0.3 // slow, elegant rotate
        g.controls().enableZoom = false // avoid scroll hijack
        g.controls().enableDamping = true
        g.controls().dampingFactor = 0.08
        // remove fog if any
        const scene = typeof g.scene === 'function' ? g.scene() : null
        if (scene && (scene as { fog?: unknown }).fog !== undefined) {
          // some versions: g.scene().fog = null
          try {
            // assign via a typed cast to avoid `any` (three.js typings may differ)
            // @ts-ignore
            ;(scene as { fog: unknown }).fog = null
          } catch {
            // ignore
          }
        }
      } catch (e) {
        console.warn('globe controls not ready', e)
      }
    }, 200)
  }, [])

  // when clicking a point: focus on it
  const onPointClick = (
    point: object,
    event: MouseEvent,
    coords: { lat: number; lng: number; altitude: number },
  ) => {
    if (!coords) return
    focusOn(coords.lat, coords.lng, 2.2)
  }

  // when clicking a right-hand label
  const onLabelClick = (loc: Location) => {
    focusOn(loc.lat, loc.lng, 2.2)
  }

  // styling for the right-side label container
  const rightListStyle: CSSProperties = {
    position: 'absolute',
    right: 28,
    top: '38%',
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
    zIndex: 40,
    pointerEvents: 'auto',
  }

  return (
    <div className="relative w-full h-[680px] flex items-center justify-center">
      {/* Globe */}
      <Globe
        ref={globeRef}
        width={900}
        height={900}
        backgroundColor="rgba(0,0,0,0)"
        // IMPORTANT: put your COBE-like texture at public/globe-dark-texture.jpg
        globeImageUrl="/mapq.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        // subtle atmosphere ring (feel free to tweak)
        showAtmosphere={true}
        atmosphereColor="rgba(10,120,200,0.25)"
        atmosphereAltitude={0.14}
        // Points
        pointsData={points}
        pointLat={(d: any) => d.lat}
        pointLng={(d: any) => d.lng}
        pointAltitude={(d: any) => d.altitude}
        pointColor={(d: any) => d.color}
        pointRadius={0.7}
        // Native hover tooltip (simple)
        pointLabel={(d: any) =>
          `<div style="padding:6px 10px; color:white; font-weight:600; background:rgba(0,0,0,0.6); border-radius:6px">${d.name}</div>`
        }
        onPointClick={onPointClick}
        onPointHover={() => {
          /* default tooltip handled by prop above */
        }}
        // Arcs (animated connection)
        arcsData={arcs}
        arcStartLat={(d: any) => d.startLat}
        arcStartLng={(d: any) => d.startLng}
        arcEndLat={(d: any) => d.endLat}
        arcEndLng={(d: any) => d.endLng}
        arcAltitude={0.2}
        arcStroke={(d: any) => d.stroke ?? 1}
        arcColor={(d: any) => d.color ?? '#fff'}
        arcDashLength={0.3}
        arcDashGap={0.6}
        arcDashInitialGap={() => Math.random()}
        arcDashAnimateTime={2000}
        // visual niceties:
        // keep globe centered & scaled nicely
        // optimize
        animateIn={true}
      />

      {/* RIGHT: Always-visible labels with flags and click-to-focus */}
      <div style={rightListStyle}>
        {OFFICES.map((loc) => (
          <button
            key={loc.id}
            onClick={() => onLabelClick(loc)}
            onMouseEnter={() => focusOn(loc.lat, loc.lng, 2.6)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              minWidth: 210,
              padding: '12px 16px',
              background: 'rgba(0,0,0,0.55)',
              color: '#fff',
              borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.04)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.6), inset 0 -2px 8px rgba(255,255,255,0.02)',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                minWidth: 36,
                height: 36,
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.03)',
                fontWeight: 700,
              }}
            >
              <span style={{ fontSize: 14 }}>{countryCodeToEmoji(loc.country)}</span>
            </div>

            <div style={{ flex: 1, textAlign: 'left' }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>{loc.name}</div>
              <div style={{ fontSize: 12, opacity: 0.72 }}>{loc.country.toUpperCase()}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
