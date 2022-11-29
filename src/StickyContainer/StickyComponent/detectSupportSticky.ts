const browserSupportsPositionSticky = () => {
  const prop = 'position:'
  const value = 'sticky'
  const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ')

  const el = document.createElement('a')
  const mStyle = el.style
  mStyle.cssText = prop + prefixes.join(`${value};${prop}`).slice(0, -prop.length)

  return mStyle?.position?.indexOf(value) !== -1
}

export default browserSupportsPositionSticky
