import Parallelogram from './Parallelogram'

interface IMotionLogicOptions {
  elementsNum: number
  colors: string[]
  canvas: HTMLCanvasElement
}

const maxSpeedV0X = 80
const maxSpeedV0Y = 380
const gravity = 160 // 重力加速度， 单位 像素/s^2
let elements: Parallelogram[] = []
const initMaxAngle = 360 // 初始最大角度
const maxAngleSpeed = 580 // 最大角速度

/**
 * 动画逻辑
 */
const motionLogic = (ctx: CanvasRenderingContext2D, options: IMotionLogicOptions) => {
  const { elementsNum, colors, canvas } = options

  let then = 0
  let start = false

  const initElements = () => {
    elements = []
    for (let i = 0; i < elementsNum; i += 1) {
      const element = new Parallelogram(colors[i % colors.length])
      element.x = canvas.width / 2
      element.y = canvas.height / 2
      element.vx = (Math.random() * 2 - 1) * maxSpeedV0X
      element.vy = -Math.random() * maxSpeedV0Y
      element.rotation = ((Math.random() * 2 - 1) * initMaxAngle * Math.PI) / 180
      elements.push(element)
    }
  }

  const drawFrame = (time: number) => {
    const timeInSeconds = time / 1000 // 将毫秒转为秒单位
    const deltaTime = timeInSeconds - then
    then = timeInSeconds

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = elements.length - 1; i > -1; i -= 1) {
      elements[i].vy += gravity * deltaTime
      elements[i].x += elements[i].vx * deltaTime
      elements[i].y += elements[i].vy * deltaTime

      if (elements[i].rotation > 0) {
        elements[i].rotation += (Math.random() * maxAngleSpeed * deltaTime * Math.PI) / 180
      } else {
        elements[i].rotation += (Math.random() * -maxAngleSpeed * deltaTime * Math.PI) / 180
      }
      elements[i].draw(ctx)

      if (
        elements[i].x - elements[i].boundary > canvas.width
        || elements[i].x + elements[i].boundary < 0
        || elements[i].y - elements[i].boundary > canvas.height
      ) {
        if (start) {
          elements[i].x = canvas.width / 2
          elements[i].y = canvas.height / 2
          elements[i].vx = (Math.random() * 2 - 1) * maxSpeedV0X
          elements[i].vy = -Math.random() * maxSpeedV0Y
        } else {
          elements.splice(i, 1)
          if (elements.length === 0) {
            return
          }
        }
      }
    }
    window.requestAnimationFrame(drawFrame)
  }

  document.addEventListener('partyPopperStart', (e: any) => {
    if (e.detail) {
      start = true
      initElements()
      drawFrame(0)
    } else {
      start = false
    }
  })
}

export default motionLogic
