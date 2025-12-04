// 'use client'

// import type { CSSProperties } from 'react'
// import { useEffect, useRef, useState } from 'react'
// import Globe, { type GlobeMethods } from 'react-globe.gl'

// /* ---------------- Helpers ---------------- */
// const countryCodeToEmoji = (code: string) =>
//   code.toUpperCase().replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)))

// /* ---------------- Types ---------------- */
// type Location = {
//   id: string
//   name: string
//   country: string
//   lat: number
//   lng: number
//   color: string
// }

// type PointData = {
//   id: string
//   name: string
//   country: string
//   lat: number
//   lng: number
//   color: string
//   altitude: number
// }

// /** Arc type must match react-globe.gl expectations (generic object allowed) */
// type ArcData = {
//   startLat: number
//   startLng: number
//   endLat: number
//   endLng: number
//   color: string[] | string
//   stroke?: number
// }

// /* ---------------- Office Data ---------------- */
// const OFFICES: Location[] = [
//   {
//     id: 'hyderabad',
//     name: 'CJSS Hyderabad',
//     country: 'IN',
//     lat: 17.4366,
//     lng: 78.3644,
//     color: '#a855f7',
//   },
//   {
//     id: 'singapore',
//     name: 'CJSS Singapore',
//     country: 'SG',
//     lat: -2.4,
//     lng: 105.6,
//     color: '#a855f7',
//   },
// ]

// /* ---------------- Component ---------------- */
// export default function GlobalPresenceMap() {
//   const globeRef = useRef<GlobeMethods | undefined>(undefined)

//   const [points, setPoints] = useState<PointData[]>(
//     OFFICES.map((o) => ({
//       ...o,
//       altitude: 0.02,
//     })),
//   )

//   /* Bounce Animation */
//   const phaseRef = useRef(0)
//   useEffect(() => {
//     let raf = 0
//     const animate = () => {
//       phaseRef.current += 0.03

//       setPoints((prev) =>
//         prev.map((p, i) => ({
//           ...p,
//           altitude: 0.015 + 0.015 * Math.abs(Math.sin(phaseRef.current + i * 0.8)),
//         })),
//       )

//       raf = requestAnimationFrame(animate)
//     }

//     raf = requestAnimationFrame(animate)
//     return () => cancelAnimationFrame(raf)
//   }, [])

//   /* Arcs */
//   const arcs: ArcData[] = [
//     {
//       startLat: OFFICES[0].lat,
//       startLng: OFFICES[0].lng,
//       endLat: OFFICES[1].lat,
//       endLng: OFFICES[1].lng,
//       color: [OFFICES[0].color, OFFICES[1].color],
//       stroke: 0.8,
//     },
//   ]

//   /* Camera Focus */
//   const focusOn = (lat: number, lng: number, altitude = 2.4) => {
//     globeRef.current?.pointOfView({ lat, lng, altitude }, 900)
//   }

//   /* Auto Rotate */
//   useEffect(() => {
//     const g = globeRef.current
//     if (!g) return

//     setTimeout(() => {
//       const controls = g.controls()
//       controls.autoRotate = true
//       controls.autoRotateSpeed = 0.3
//       controls.enableZoom = false
//       controls.enableDamping = true
//       controls.dampingFactor = 0.08

//       const sceneObj = g.scene?.() as any
//       if (sceneObj?.fog) sceneObj.fog = null
//     }, 300)
//   }, [])

//   const rightListStyle: CSSProperties = {
//     position: 'absolute',
//     right: 28,
//     top: '38%',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: 18,
//     zIndex: 30,
//   }

//   return (
//     <div className="relative w-full h-[680px] flex items-center justify-center bg-[#010b19] bg-[radial-gradient(circle_at_center,_#043b66_0%,_#010b19_60%,_black_100%)]">
//       <Globe
//         ref={globeRef}
//         width={900}
//         height={900}
//         backgroundColor="rgba(0,0,0,0)"
//         globeImageUrl="/map3.jpg"
//         bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
//         showAtmosphere={true}
//         atmosphereColor="rgba(10,120,200,0.25)"
//         atmosphereAltitude={0.14}
//         /* POINTS */
//         pointsData={points}
//         pointLat={(obj: any) => obj.lat}
//         pointLng={(obj: any) => obj.lng}
//         pointAltitude={(obj: any) => obj.altitude}
//         pointColor={(obj: any) => obj.color}
//         pointRadius={0.7}
//         pointLabel={(obj: any) =>
//           `<div style="padding:6px 10px;color:white;font-weight:600;background:rgba(0,0,0,0.6);border-radius:6px">${obj.name}</div>`
//         }
//         onPointClick={(obj: any) => focusOn(obj.lat, obj.lng, 2.2)}
//         /* ARCS */
//         arcsData={arcs}
//         arcStartLat={(obj: any) => obj.startLat}
//         arcStartLng={(obj: any) => obj.startLng}
//         arcEndLat={(obj: any) => obj.endLat}
//         arcEndLng={(obj: any) => obj.endLng}
//         arcColor={(obj: any) => obj.color}
//         arcStroke={(obj: any) => obj.stroke ?? 1}
//         arcDashLength={0.3}
//         arcDashGap={0.6}
//         arcDashInitialGap={() => Math.random()}
//         arcDashAnimateTime={2000}
//         animateIn={true}
//       />

//       {/* Right labels */}
//       <div style={rightListStyle}>
//         {OFFICES.map((loc) => (
//           <button
//             key={loc.id}
//             onClick={() => focusOn(loc.lat, loc.lng, 2.2)}
//             onMouseEnter={() => focusOn(loc.lat, loc.lng, 2.6)}
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: 12,
//               minWidth: 210,
//               padding: '12px 16px',
//               background: 'rgba(0,0,0,0.55)',
//               color: '#fff',
//               borderRadius: 12,
//               border: '1px solid rgba(255,255,255,0.04)',
//               boxShadow: '0 6px 20px rgba(0,0,0,0.6), inset 0 -2px 8px rgba(255,255,255,0.02)',
//               cursor: 'pointer',
//             }}
//           >
//             <div
//               style={{
//                 minWidth: 36,
//                 height: 36,
//                 borderRadius: 8,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 background: 'rgba(255,255,255,0.03)',
//                 fontWeight: 700,
//               }}
//             >
//               <span style={{ fontSize: 14 }}>{countryCodeToEmoji(loc.country)}</span>
//             </div>

//             <div style={{ flex: 1, textAlign: 'left' }}>
//               <div style={{ fontSize: 13, fontWeight: 700 }}>{loc.name}</div>
//               <div style={{ fontSize: 12, opacity: 0.72 }}>{loc.country.toUpperCase()}</div>
//             </div>
//           </button>
//         ))}
//       </div>
//     </div>
//   )
// }
// GlobalPresenceMap.tsx
// 'use client'

// import type { CSSProperties } from 'react'
// import { useEffect, useRef, useState } from 'react'
// import Globe, { type GlobeMethods } from 'react-globe.gl'

// const countryCodeToEmoji = (code: string) =>
//   code.toUpperCase().replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)))

// type Location = {
//   id: string
//   name: string
//   country: string
//   lat: number
//   lng: number
//   color: string
// }

// type PointData = Location & { altitude: number }

// type ArcData = {
//   startLat: number
//   startLng: number
//   endLat: number
//   endLng: number
//   color: string[] | string
//   stroke?: number
// }

// const OFFICES: Location[] = [
//   {
//     id: 'hyderabad',
//     name: 'CJSS Hyderabad',
//     country: 'IN',
//     lat: 17.4366,
//     lng: 78.3644,
//     color: '#a855f7',
//   },
//   {
//     id: 'singapore',
//     name: 'CJSS Singapore',
//     country: 'SG',
//     lat: -2.4,
//     lng: 105.6,
//     color: '#a855f7',
//   },
// ]

// export default function GlobalPresenceMap() {
//   const globeRef = useRef<GlobeMethods | undefined>(undefined)

//   const [points, setPoints] = useState<PointData[]>(
//     OFFICES.map((o) => ({
//       ...o,
//       altitude: 0.02,
//     })),
//   )

//   // Bounce animation
//   const phaseRef = useRef(0)
//   useEffect(() => {
//     let raf = 0
//     const animate = () => {
//       phaseRef.current += 0.03
//       setPoints((prev) =>
//         prev.map((p, i) => ({
//           ...p,
//           altitude: 0.015 + 0.015 * Math.abs(Math.sin(phaseRef.current + i * 0.8)),
//         })),
//       )
//       raf = requestAnimationFrame(animate)
//     }
//     raf = requestAnimationFrame(animate)
//     return () => cancelAnimationFrame(raf)
//   }, [])

//   const arcs: ArcData[] = [
//     {
//       startLat: OFFICES[0].lat,
//       startLng: OFFICES[0].lng,
//       endLat: OFFICES[1].lat,
//       endLng: OFFICES[1].lng,
//       color: [OFFICES[0].color, OFFICES[1].color],
//       stroke: 0.8,
//     },
//   ]

//   const focusOn = (lat: number, lng: number, altitude = 2.4) => {
//     globeRef.current?.pointOfView({ lat, lng, altitude }, 900)
//   }

//   // Auto rotate
//   useEffect(() => {
//     const g = globeRef.current
//     if (!g) return

//     setTimeout(() => {
//       const controls = g.controls()
//       controls.autoRotate = true
//       controls.autoRotateSpeed = 0.3
//       controls.enableZoom = false
//       controls.enableDamping = true
//       controls.dampingFactor = 0.08
//       const sceneObj = g.scene?.() as any
//       if (sceneObj?.fog) sceneObj.fog = null
//     }, 300)
//   }, [])

//   const rightListStyle: CSSProperties = {
//     position: 'absolute',
//     right: 28,
//     top: '38%',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: 18,
//     zIndex: 30,
//   }

//   return (
//     // 🔹 No bg color here – transparent container
//     <div className="relative w-full h-[680px] flex items-center justify-center overflow-hidden">
//       <Globe
//         ref={globeRef}
//         width={900}
//         height={900}
//         backgroundColor="rgba(0,0,0,0)"
//         globeImageUrl="/map3.jpg"
//         bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
//         showAtmosphere={true}
//         atmosphereColor="rgba(10,120,200,0.25)"
//         atmosphereAltitude={0.14}
//         pointsData={_points}
//         pointLat={(obj: PointData) => obj.lat}
//         pointLng={(obj: PointData) => obj.lng}
//         pointAltitude={(obj: PointData) => obj.altitude}
//         pointColor={(obj: PointData) => obj.color}
//         pointRadius={0.7}
//         pointLabel={(obj: PointData) =>
//           `<div style="padding:6px 10px;color:white;font-weight:600;background:rgba(0,0,0,0.6);border-radius:6px">${obj.name}</div>`
//         }
//         onPointClick={(obj: PointData) => focusOn(obj.lat, obj.lng, 2.2)}
//         arcsData={_arcs}
//         arcStartLat={(obj: ArcData) => obj.startLat}
//         arcStartLng={(obj: ArcData) => obj.startLng}
//         arcEndLat={(obj: ArcData) => obj.endLat}
//         arcEndLng={(obj: ArcData) => obj.endLng}
//         arcColor={(obj: ArcData) => obj.color}
//         arcStroke={(obj: ArcData) => obj.stroke ?? 1}
//         arcDashLength={0.3}
//         arcDashGap={0.6}
//         arcDashInitialGap={() => Math.random()}
//         arcDashAnimateTime={2000}
//         animateIn={true}
//       />

//       {/* Right labels */}
//       <div style={rightListStyle}>
//         {OFFICES.map((loc) => (
//           <button
//             key={loc.id}
//             onClick={() => focusOn(loc.lat, loc.lng, 2.2)}
//             onMouseEnter={() => focusOn(loc.lat, loc.lng, 2.6)}
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: 12,
//               minWidth: 210,
//               padding: '12px 16px',
//               background: 'rgba(0,0,0,0.55)',
//               color: '#fff',
//               borderRadius: 12,
//               border: '1px solid rgba(255,255,255,0.04)',
//               boxShadow: '0 6px 20px rgba(0,0,0,0.6), inset 0 -2px 8px rgba(255,255,255,0.02)',
//               cursor: 'pointer',
//             }}
//           >
//             <div
//               style={{
//                 minWidth: 36,
//                 height: 36,
//                 borderRadius: 8,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 background: 'rgba(255,255,255,0.03)',
//                 fontWeight: 700,
//               }}
//             >
//               <span style={{ fontSize: 14 }}>{countryCodeToEmoji(loc.country)}</span>
//             </div>

//             <div style={{ flex: 1, textAlign: 'left' }}>
//               <div style={{ fontSize: 13, fontWeight: 700 }}>{loc.name}</div>
//               <div style={{ fontSize: 12, opacity: 0.72 }}>{loc.country.toUpperCase()}</div>
//             </div>
//           </button>
//         ))}
//       </div>
//     </div>
//   )
// }

'use client'

import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'
import Globe, { type GlobeMethods } from 'react-globe.gl'

const countryCodeToEmoji = (code: string) =>
  code.toUpperCase().replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)))

type Location = {
  id: string
  name: string
  country: string
  lat: number
  lng: number
  color: string
}

type PointData = Location & { altitude: number }

type ArcData = {
  startLat: number
  startLng: number
  endLat: number
  endLng: number
  color: string[] | string
  stroke?: number
}

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
    lat: -2.4,
    lng: 105.6,
    color: '#a855f7',
  },
]

export default function GlobalPresenceMap() {
  const globeRef = useRef<GlobeMethods | undefined>(undefined)

  // --- Rename for TypeScript unused variable fix ---
  const [_points, setPoints] = useState<PointData[]>(
    OFFICES.map((o) => ({
      ...o,
      altitude: 0.02,
    })),
  )

  // Bounce animation
  const phaseRef = useRef(0)

  useEffect(() => {
    let raf = 0
    const animate = () => {
      phaseRef.current += 0.03
      setPoints((prev) =>
        prev.map((p, i) => ({
          ...p,
          altitude: 0.015 + 0.015 * Math.abs(Math.sin(phaseRef.current + i * 0.8)),
        })),
      )
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  // --- Rename arcs for TS fix ---
  const _arcs: ArcData[] = [
    {
      startLat: OFFICES[0].lat,
      startLng: OFFICES[0].lng,
      endLat: OFFICES[1].lat,
      endLng: OFFICES[1].lng,
      color: [OFFICES[0].color, OFFICES[1].color],
      stroke: 0.8,
    },
  ]

  const focusOn = (lat: number, lng: number, altitude = 2.4) => {
    globeRef.current?.pointOfView({ lat, lng, altitude }, 900)
  }

  // Auto rotate
  useEffect(() => {
    const g = globeRef.current
    if (!g) return

    setTimeout(() => {
      const controls = g.controls()
      controls.autoRotate = true
      controls.autoRotateSpeed = 0.3
      controls.enableZoom = false
      controls.enableDamping = true
      controls.dampingFactor = 0.08

      const sceneObj = g.scene?.() as any
      if (sceneObj?.fog) sceneObj.fog = null
    }, 300)
  }, [])

  const rightListStyle: CSSProperties = {
    position: 'absolute',
    right: 28,
    top: '38%',
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
    zIndex: 30,
  }

  return (
    <div className="relative w-full h-[680px] flex items-center justify-center overflow-hidden">
      <Globe
        ref={globeRef}
        width={900}
        height={900}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="/map3.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        showAtmosphere={true}
        atmosphereColor="rgba(10,120,200,0.25)"
        atmosphereAltitude={0.14}
        pointsData={_points}
        pointLat={(obj) => (obj as PointData).lat}
        pointLng={(obj) => (obj as PointData).lng}
        pointAltitude={(obj) => (obj as PointData).altitude}
        pointColor={(obj) => (obj as PointData).color}
        pointRadius={0.7}
        pointLabel={(obj) =>
          `<div style="padding:6px 10px;color:white;font-weight:600;background:rgba(0,0,0,0.6);border-radius:6px">${
            (obj as PointData).name
          }</div>`
        }
        onPointClick={(obj) => {
          const p = obj as PointData
          focusOn(p.lat, p.lng, 2.2)
        }}
        arcsData={_arcs}
        arcStartLat={(obj: any) => (obj as ArcData).startLat}
        arcStartLng={(obj: any) => (obj as ArcData).startLng}
        arcEndLat={(obj: any) => (obj as ArcData).endLat}
        arcEndLng={(obj: any) => (obj as ArcData).endLng}
        arcColor={(obj: any) => (obj as ArcData).color}
        arcStroke={(obj: any) => (obj as ArcData).stroke ?? 1}
        arcDashLength={0.6}
        arcDashGap={0.3}
        arcDashInitialGap={() => Math.random() * 2}
        arcDashAnimateTime={2400}
      />

      <div style={rightListStyle}>
        {OFFICES.map((loc) => (
          <button
            key={loc.id}
            onClick={() => focusOn(loc.lat, loc.lng, 2.2)}
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
            {/* Flag */}
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

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>{loc.name}</div>
              <div style={{ fontSize: 12, opacity: 0.72 }}>{loc.country.toUpperCase()}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
