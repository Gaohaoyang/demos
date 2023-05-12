/**
 * check if a color is dark
 */
export const isDarkColor = (rgb: [number, number, number]) => {
  if (!rgb) {
    throw new Error('rgb is required')
  }
  const [red, green, blue] = rgb
  if (red < 0 || green < 0 || blue < 0) {
    throw new Error('rgb values must be greater than or equal to zero')
  }
  if (red > 255 || green > 255 || blue > 255) {
    throw new Error('rgb values must be less than or equal to 255')
  }
  return red * 0.299 + green * 0.587 + blue * 0.114 < 160
}
