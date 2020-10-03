const draw = SVG(document.body)
const Hex = Honeycomb.extendHex({
  size: 30,

	render(draw) {
    const { x, y } = this.toPoint()
    const corners = this.corners()

    this.draw = draw
    	.polygon(corners.map(({ x, y }) => `${x},${y}`))
      .fill('none')
      .stroke({ width: 1, color: '#999' })
      .translate(x, y)
  },

  highlight() {
    this.draw
    	// stop running animation
      .stop(true, true)
      .fill({ opacity: 1, color: 'aquamarine' })
      .animate(1000)
      .fill({ opacity: 0, color: 'none' })
  }
})
const Grid = Honeycomb.defineGrid(Hex)
const grid = Grid.rectangle({
  width: 10,
  height: 10,
  // render each hex, passing the draw instance
  onCreate(hex) {
    hex.render(draw)
  }
})

document.addEventListener('click', ({ offsetX, offsetY }) => {
  const hexCoordinates = Grid.pointToHex([offsetX, offsetY])
  const hex = grid.get(hexCoordinates)

  if (hex) {
    hex.highlight()
  }
})