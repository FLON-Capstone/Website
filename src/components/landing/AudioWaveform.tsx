import { useState, useCallback } from 'react'

const BAR_HEIGHTS = [28, 44, 58, 72, 88, 100, 84, 64, 78, 96, 80, 60, 72, 90, 76, 56, 68, 84, 94, 70, 52, 38]
const BAR_WIDTH = 3
const BAR_GAP = 6
const SVG_HEIGHT = 120

interface AudioWaveformProps {
  color?: string
}

export function AudioWaveform({ color = 'var(--accent-blue)' }: AudioWaveformProps) {
  const [hovered, setHovered] = useState(false)
  const [mouseX, setMouseX] = useState(0.5) // 0–1 normalized
  const [mouseY, setMouseY] = useState(0.3) // 0–1 normalized (0 = top)

  const totalWidth = BAR_HEIGHTS.length * (BAR_WIDTH + BAR_GAP) - BAR_GAP

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMouseX((e.clientX - rect.left) / rect.width)
    setMouseY((e.clientY - rect.top) / rect.height)
  }, [])

  const getHoverScale = (i: number) => {
    const numBars = BAR_HEIGHTS.length
    const peakBar = mouseX * numBars
    const sigma = numBars * 0.22
    const peakScale = 1 - mouseY * 0.65 // top of SVG = full height, bottom = short
    const gaussian = Math.exp(-0.5 * ((i - peakBar) / sigma) ** 2)
    return Math.max(0.12, 0.12 + gaussian * peakScale * 0.88)
  }

  return (
    <svg
      ref={undefined}
      width={totalWidth}
      height={SVG_HEIGHT}
      viewBox={`0 0 ${totalWidth} ${SVG_HEIGHT}`}
      aria-hidden="true"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      style={{ cursor: hovered ? 'crosshair' : 'default' }}
    >
      {BAR_HEIGHTS.map((h, i) => (
        <rect
          key={i}
          x={i * (BAR_WIDTH + BAR_GAP)}
          y={SVG_HEIGHT - h}
          width={BAR_WIDTH}
          height={h}
          rx={2}
          fill={color}
          style={{
            transformBox: 'fill-box',
            transformOrigin: 'center bottom',
            animation: hovered
              ? 'none'
              : `waveform-pulse 2.4s cubic-bezier(0.45, 0.05, 0.55, 0.95) ${(i * 0.09).toFixed(2)}s infinite`,
            transform: hovered ? `scaleY(${getHoverScale(i).toFixed(3)})` : undefined,
            transition: hovered ? 'transform 0.08s ease-out' : undefined,
          }}
        />
      ))}
    </svg>
  )
}
