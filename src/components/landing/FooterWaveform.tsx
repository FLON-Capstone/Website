const NUM_BARS = 80

const barHeights = Array.from({ length: NUM_BARS }, (_, i) => {
  const x = (i - (NUM_BARS - 1) / 2) / ((NUM_BARS - 1) / 2)
  return Math.max(8, Math.round(160 * Math.exp(-2.2 * x * x)))
})

export function FooterWaveform() {
  const barWidth = 3
  const gap = 4
  const svgWidth = NUM_BARS * (barWidth + gap) - gap
  const svgHeight = 200

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {barHeights.map((h, i) => (
        <rect
          key={i}
          x={i * (barWidth + gap)}
          y={(svgHeight - h) / 2}
          width={barWidth}
          height={h}
          rx={1}
          fill="white"
          style={{
            transformBox: 'fill-box',
            transformOrigin: 'center',
            animation: `waveform-pulse-subtle 2.8s ease-in-out ${(i * 0.07).toFixed(2)}s infinite`,
          }}
        />
      ))}
    </svg>
  )
}
