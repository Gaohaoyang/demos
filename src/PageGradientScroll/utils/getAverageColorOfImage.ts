/* eslint-disable max-len */
/**
 * get average color of an image
 */
export const getAverageColor: (img: HTMLImageElement) => [number, number, number] = (img) => {
  const canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height
  const context = canvas.getContext('2d')

  if (!context) return [255, 255, 255]

  context.drawImage(img, 0, 0)
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
  const { data } = imageData
  let r = 0
  let g = 0
  let b = 0
  let count = 0
  // 每隔多个像素取一个点，减少计算量，提升性能
  for (let y = 0; y < canvas.height; y += 50) {
    for (let x = 0; x < canvas.width; x += 50) {
      const index = (y * canvas.width + x) * 4
      r += data[index]
      g += data[index + 1]
      b += data[index + 2]
      count += 1
    }
  }
  return [Math.floor(r / count), Math.floor(g / count), Math.floor(b / count)]
}
