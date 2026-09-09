'use client'

import { useParallax } from '@/hooks/use-parallax'
import { useEffect, useRef } from 'react'

export function ArtDecoBackground() {
  const { ref: ref1, offset: offset1 } = useParallax(0.15)
  const { ref: ref2, offset: offset2 } = useParallax(0.25)
  const { ref: ref3, offset: offset3 } = useParallax(0.35)
  
  const canvasRef1 = useRef<HTMLCanvasElement>(null)
  const canvasRef2 = useRef<HTMLCanvasElement>(null)
  const canvasRef3 = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const generateProceduralArtDeco = (canvas: HTMLCanvasElement, seed: number) => {
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      canvas.width = window.innerWidth
      canvas.height = Math.max(window.innerHeight * 3, 3000)
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const random = (min: number, max: number) => {
        seed = (seed * 9301 + 49297) % 233280
        return min + (seed / 233280) * (max - min)
      }

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)'
      ctx.lineWidth = 1.5

      for (let i = 0; i < 80; i++) {
        const x = random(0, canvas.width)
        const y = random(0, canvas.height)
        const length = random(100, 600)
        const angle = random(0, Math.PI * 2)
        
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length)
        ctx.stroke()
      }

      for (let i = 0; i < 40; i++) {
        const x = random(0, canvas.width)
        const y = random(0, canvas.height)
        const size = random(30, 120)
        
        ctx.beginPath()
        ctx.moveTo(x, y - size)
        ctx.lineTo(x + size * 0.6, y)
        ctx.lineTo(x, y + size)
        ctx.lineTo(x - size * 0.6, y)
        ctx.closePath()
        ctx.stroke()
      }

      for (let i = 0; i < 50; i++) {
        const x = random(0, canvas.width)
        const y = random(0, canvas.height)
        const width = random(80, 300)
        const height = random(80, 300)
        
        ctx.strokeRect(x - width/2, y - height/2, width, height)
      }

      for (let i = 0; i < 60; i++) {
        const x1 = random(0, canvas.width)
        const y1 = random(0, canvas.height)
        const x2 = random(0, canvas.width)
        const y2 = random(0, canvas.height)
        const x3 = random(0, canvas.width)
        const y3 = random(0, canvas.height)
        
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.lineTo(x3, y3)
        ctx.stroke()
      }

      for (let i = 0; i < 30; i++) {
        const startX = random(0, canvas.width)
        const startY = random(0, canvas.height)
        const steps = Math.floor(random(3, 8))
        
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        
        let currentX = startX
        let currentY = startY
        
        for (let j = 0; j < steps; j++) {
          const direction = Math.floor(random(0, 4))
          const stepSize = random(20, 80)
          
          if (direction === 0) currentY -= stepSize
          else if (direction === 1) currentX += stepSize
          else if (direction === 2) currentY += stepSize
          else currentX -= stepSize
          
          ctx.lineTo(currentX, currentY)
        }
        
        ctx.stroke()
      }

      for (let i = 0; i < 35; i++) {
        const x = random(0, canvas.width)
        const y = random(0, canvas.height)
        const radius = random(40, 150)
        const points = 6
        
        ctx.beginPath()
        for (let j = 0; j <= points; j++) {
          const angle = (j / points) * Math.PI * 2 - Math.PI / 2
          const px = x + Math.cos(angle) * radius
          const py = y + Math.sin(angle) * radius
          if (j === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.stroke()
      }
    }

    if (canvasRef1.current) generateProceduralArtDeco(canvasRef1.current, 12345)
    if (canvasRef2.current) generateProceduralArtDeco(canvasRef2.current, 67890)
    if (canvasRef3.current) generateProceduralArtDeco(canvasRef3.current, 54321)

    const handleResize = () => {
      if (canvasRef1.current) generateProceduralArtDeco(canvasRef1.current, 12345)
      if (canvasRef2.current) generateProceduralArtDeco(canvasRef2.current, 67890)
      if (canvasRef3.current) generateProceduralArtDeco(canvasRef3.current, 54321)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      <div 
        ref={ref1}
        className="absolute inset-0"
        style={{ 
          transform: `translateY(${offset1 * 0.5}px)`,
          filter: 'blur(1.5px)',
          opacity: 1
        }}
      >
        <canvas ref={canvasRef1} className="w-full h-full" />
      </div>

      <div 
        ref={ref2}
        className="absolute inset-0"
        style={{ 
          transform: `translateY(${offset2 * 0.3}px)`,
          filter: 'blur(2px)',
          opacity: 1
        }}
      >
        <canvas ref={canvasRef2} className="w-full h-full" />
      </div>

      <div 
        ref={ref3}
        className="absolute inset-0"
        style={{ 
          transform: `translateY(${offset3 * 0.2}px)`,
          filter: 'blur(2.5px)',
          opacity: 1
        }}
      >
        <canvas ref={canvasRef3} className="w-full h-full" />
      </div>
    </div>
  )
}
