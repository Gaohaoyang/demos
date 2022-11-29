import { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

/**
 * Portal 提供了一种将子元素渲染到存在于 DOM 组件层次结构之外的 DOM 节点
 * @param param
 * @returns
 */
// @ts-ignore
const Portal = ({ children }) => {
  const el = useRef(document.createElement('div'))

  useEffect(() => {
    document.body.appendChild(el.current)
    const { parentElement } = el.current
    return () => {
      if (parentElement) {
        parentElement.removeChild(el.current)
      }
    }
  }, [])

  return createPortal(children, el.current)
}

export default Portal
