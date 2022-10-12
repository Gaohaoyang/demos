/**
 * 角度转为弧度
 * @param radius 角度
 * @returns 弧度
 */
const getRadian = (radius: number) => (radius * Math.PI) / 180

/**
 * 获取6个福袋的坐标
 * 六边形分布
 * @param r 半径
 */
const hexPos = (r: number) => {
  const radian30 = getRadian(30)
  const sin30 = Math.sin(radian30)
  const cos30 = Math.cos(radian30)
  return [
    {
      left: r,
      top: 0,
    },
    {
      left: r * (1 + cos30),
      top: r * sin30,
    },
    {
      left: r * (1 + cos30),
      top: r * (1 + sin30),
    },
    {
      left: r,
      top: 2 * r,
    },
    {
      left: r * (1 - cos30),
      top: r * (1 + sin30),
    },
    {
      left: r * (1 - cos30),
      top: r * sin30,
    },
  ]
}

export default hexPos
