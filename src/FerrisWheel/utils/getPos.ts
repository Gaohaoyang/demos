import degree2Radian from './degree2Radian'

/**
 * 获取位置
 * @param r 半径
 * @param count 个数
 */
const getPos = (r: number, count: number) => {
  const angleRadian = degree2Radian(360 / count)
  const res: Array<{
    x: number
    y: number
  }> = []
  for (let i = 0; i < count; i += 1) {
    res.push({
      x: r * Math.cos(angleRadian * i),
      y: r * Math.sin(angleRadian * i),
    })
  }
  return res
}

export default getPos
