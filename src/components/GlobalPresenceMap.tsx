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
  country: string // ISO2
  lat: number
  lng: number
  color: string
}

/**
 * Office Data
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

export default function GlobalPresenceMap() {
  /** FIX #1 — Correct ref typing */
  const globeRef = useRef<GlobeMethods | null>(null)

  /** Points state */
  const [points, setPoints] = useState(OFFICES.map((o) => ({ ...o, altitude: 0.02 })))

  /** Animation */
  const phaseRef = useRef(0)
  useEffect(() => {
    let raf = 0

    /** FIX #2 — removed unused parameter (t) */
    const animate = () => {
      phaseRef.current += 0.03

      setPoints((prev) =>
        prev.map((p, idx) => {
          const bounce = 0.015 * Math.abs(Math.sin(phaseRef.current + idx * 0.8))
          return { ...p, altitude: 0.015 + bounce }
        }),
      )

      raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  /** Arc data */
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

  /** Camera focus */
  const focusOn = (lat: number, lng: number, altitude = 2.5) => {
    try {
      globeRef.current?.pointOfView({ lat, lng, altitude }, 1000)
    } catch {
      // ignore
    }
  }

  /** Auto rotate + globe options */
  useEffect(() => {
    const g = globeRef.current
    if (!g) return

    setTimeout(() => {
      try {
        g.controls().autoRotate = true
        g.controls().autoRotateSpeed = 0.3
        g.controls().enableZoom = false
        g.controls().enableDamping = true
        g.controls().dampingFactor = 0.08

        // remove fog
        if (g.scene && (g.scene() as any)?.fog !== undefined) {
          try {
            // @ts-ignore
            g.scene().fog = null
          } catch {
            // ignore
          }
        }
      } catch {
        // ignore
      }
    }, 200)
  }, [])

  const onPointClick = (pt: any) => pt && focusOn(pt.lat, pt.lng, 2.2)
  const onLabelClick = (loc: Location) => focusOn(loc.lat, loc.lng, 2.2)

  const rightListStyle: CSSProperties = {
    position: 'absolute',
    right: 28,
    top: '38%',
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
    zIndex: 40,
  }

  return (
    <div className="relative w-full h-[680px] flex items-center justify-center">
      {/* Globe */}
      <Globe
        ref={globeRef}
        width={900}
        height={900}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="/mapq.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        showAtmosphere={true}
        atmosphereColor="rgba(10,120,200,0.25)"
        atmosphereAltitude={0.14}
        pointsData={points}
        pointLat={(d) => d.lat}
        pointLng={(d) => d.lng}
        pointAltitude={(d) => d.altitude}
        pointColor={(d) => d.color}
        pointRadius={0.7}
        pointLabel={(d) =>
          `<div style="padding:6px 10px; color:white; font-weight:600; background:rgba(0,0,0,0.6); border-radius:6px">${d.name}</div>`
        }
        onPointClick={onPointClick}
        arcsData={arcs}
        arcStartLat={(d) => d.startLat}
        arcStartLng={(d) => d.startLng}
        arcEndLat={(d) => d.endLat}
        arcEndLng={(d) => d.endLng}
        arcAltitude={0.2}
        arcStroke={(d) => d.stroke ?? 1}
        arcColor={(d) => d.color ?? '#fff'}
        arcDashLength={0.3}
        arcDashGap={0.6}
        arcDashInitialGap={() => Math.random()}
        arcDashAnimateTime={2000}
        globeMaterialOptions={{ metalness: 0.1, roughness: 0.8 }}
        animateIn={true}
      />

      {/* Right side labels */}
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
