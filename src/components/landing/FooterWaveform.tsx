const NUM_BARS = 40

const barHeights = Array.from({ length: NUM_BARS }, (_, i) => {
  const x = (i - (NUM_BARS - 1) / 2) / ((NUM_BARS - 1) / 2)
  return Math.max(8, Math.round(72 * Math.exp(-2.5 * x * x)))
})

export function FooterWaveform() {
  const barWidth = 2
  const gap = 4
  const svgWidth = NUM_BARS * (barWidth + gap) - gap
  const svgHeight = 80

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
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
