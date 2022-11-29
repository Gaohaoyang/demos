/* eslint-disable no-param-reassign */
import React, { CSSProperties, useEffect, useRef } from 'react'
import motionLogic from './motionLogic'

interface IPartyPopper {
  /**
   * 元素数量
   * 默认为 80，建议低端手机设置为 30
   * */
  elementsNum?: number

  /**
   * 元素颜色，默认为 ['#709EFF', '#FFFF4E', '#FFA74C', '#FF5485']
   */
  colors?: string[]

  /** 样式（容器样式） */
  // style?: CSSProperties

  /** 是否开始动画 */
  start?: boolean
}

const defaultStyle: CSSProperties = {
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  top: '0',
  left: '0',
  pointerEvents: 'none',
}

/**
 * 设置 Canvas 尺寸
 */
const setCanvasSize = (canvas: HTMLCanvasElement, wrap: HTMLDivElement) => {
  const wrapRect = wrap.getBoundingClientRect()
  canvas.width = wrapRect.width
  canvas.height = wrapRect.height
}

/**
 * 撒花
 */
function PartyPopper(props: IPartyPopper) {
  const {
    elementsNum = 80,
    colors = ['#709EFF', '#FFFF4E', '#FFA74C', '#FF5485'],
    start = false,
  } = props
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (canvasRef.current && wrapRef.current) {
      setCanvasSize(canvasRef.current, wrapRef.current)

      const ctx = canvasRef.current.getContext('2d')
      if (ctx) {
        motionLogic(ctx, {
          elementsNum,
          colors,
          canvas: canvasRef.current,
        })
      }
    }
  }, [])

  useEffect(() => {
    const e = new CustomEvent('partyPopperStart', {
      detail: start,
    })
    document.dispatchEvent(e)
  }, [start])

  return (
    <div style={defaultStyle} ref={wrapRef}>
      <canvas ref={canvasRef} />
    </div>
  )
}

export default PartyPopper
