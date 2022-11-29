// 平行四边形
/* eslint-disable no-param-reassign */
class Parallelogram {
  x: number

  y: number

  radius: number | undefined

  vx: number

  vy: number

  color: string

  rotation: number

  scaleX: number

  scaleY: number

  boundary: number

  constructor(color: string) {
    this.x = 0
    this.y = 0
    this.boundary = 12
    this.vx = 0
    this.vy = 0
    this.color = color
    this.rotation = 0
    this.scaleX = 1
    this.scaleY = 1
  }

  /**
   * draw
   */
  public draw(context: CanvasRenderingContext2D) {
    context.save()
    context.translate(this.x, this.y)
    context.rotate(this.rotation)
    context.scale(this.scaleX, this.scaleY)

    context.fillStyle = this.color
    context.beginPath()

    context.moveTo(-6, -2.5)
    context.lineTo(6, -2.5)
    context.lineTo(10, 2.5)
    context.lineTo(-2, 2.5)
    context.lineTo(-6, -2.5)

    context.closePath()
    context.fill()
    context.restore()
  }
}

export default Parallelogram
