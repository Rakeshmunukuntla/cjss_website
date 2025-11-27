// "use client"

// import { useEffect, useRef, useState } from "react"

// export const useCursor = () => {
//   const [cursorVariant, setCursorVariant] = useState("default")
//   const cursorRef = useRef(null)
//   const cursorDotRef = useRef(null)

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (cursorRef.current && cursorDotRef.current) {
//         cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
//         cursorDotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
//       }
//     }

//     const handleMouseEnter = (e: Event) => {
//       if ((e.target as HTMLElement).closest("a, button, .cursor-hover")) {
//         setCursorVariant("hover")
//       }
//     }

//     const handleMouseLeave = (e: Event) => {
//       if ((e.target as HTMLElement).closest("a, button, .cursor-hover")) {
//         setCursorVariant("default")
//       }
//     }

//     window.addEventListener("mousemove", handleMouseMove, { passive: true })
//     document.addEventListener("mouseenter", handleMouseEnter, true)
//     document.addEventListener("mouseleave", handleMouseLeave, true)

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove)
//       document.removeEventListener("mouseenter", handleMouseEnter, true)
//       document.removeEventListener("mouseleave", handleMouseLeave, true)
//     }
//   }, [])

//   return { cursorRef, cursorDotRef, cursorVariant, setCursorVariant }
// }

'use client';

import { useEffect, useRef, useState } from 'react';

export const useCursor = () => {
  const [cursorVariant, setCursorVariant] = useState('default');
  // 👇 add the generic types here
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && cursorDotRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        cursorDotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const handleMouseEnter = (e: Event) => {
      if ((e.target as HTMLElement).closest('a, button, .cursor-hover')) {
        setCursorVariant('hover');
      }
    };

    const handleMouseLeave = (e: Event) => {
      if ((e.target as HTMLElement).closest('a, button, .cursor-hover')) {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return { cursorRef, cursorDotRef, cursorVariant, setCursorVariant };
};
