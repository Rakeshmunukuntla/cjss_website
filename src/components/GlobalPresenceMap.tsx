'use client'

import { useEffect, useRef } from 'react'
import Globe from 'react-globe.gl';

export default function GlobalPresenceMap() {
  const globeRef = useRef<any>(null)

  const locations = [
    {
      name: 'CJSS Hyderabad',
      lat: 17.4366,
      lng: 78.3644,
      color: '#a855f7',
    },
    {
      name: 'CJSS Singapore',
      lat: 1.3521,
      lng: 103.8198,
      color: '#06b6d4',
    },
  ]

  useEffect(() => {
    if (!globeRef.current) return
    const g = globeRef.current

    g.controls().autoRotate = true
    g.controls().autoRotateSpeed = 0.6
    g.controls().enableZoom = false
    g.controls().enableDamping = true
    g.controls().dampingFactor = 0.08

    g.scene().fog = null
  }, [])

  return (
    <div className="flex justify-center items-center w-full h-[600px] relative">
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        atmosphereColor="rgba(0,150,255,0.35)"
        atmosphereAltitude={0.15}
        pointAltitude={0.02}
        pointRadius={0.55}
        pointsData={locations}
        pointColor={(d: any) => d.color}
        pointLabel={(d: any) =>
          `<div style="
            padding:6px 10px;
            background:rgba(0,0,0,0.75);
            border-radius:6px;
            color:white;
            font-size:13px;
            font-weight:600;
            border:1px solid rgba(255,255,255,0.15);
            backdrop-filter:blur(4px);
          ">
            ${d.name}
          </div>`
        }
      />
    </div>
  )
}
