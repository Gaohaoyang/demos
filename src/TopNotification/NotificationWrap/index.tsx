/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  memo, useState, useEffect, useRef,
} from 'react'
import styles from './index.module.css'
// import queryString from 'query-string';
//
// const parseObj = queryString.parse(location.search);

export interface IFakeNotificationWrap {
  /** 是否展示 */
  show: boolean
  /** 关闭回调 */
  onHide: () => void
  /** 距顶部的距离 */
  offsetTop?: number
  /** 持续时长 默认 5000ms */
  duration?: number
  /** 点击事件 */
  onClick?: () => void
  children?: React.ReactNode
  style?: React.CSSProperties
}

/**
 * 顶部的消息提示窗容器
 */
function FakeNotificationWrap(props: IFakeNotificationWrap) {
  const {
    show, onHide, offsetTop, children, duration = 5000, onClick = () => {}, style,
  } = props

  const [domRender, setDomRender] = useState(false)
  const [animationShow, setAnimationShow] = useState(false)
  const timer = useRef<number>()
  const clientY = useRef<number>(0)

  useEffect(() => {
    if (show) {
      setDomRender(true)
    } else {
      setAnimationShow(false)
      clearTimeout(timer.current)
    }
  }, [show])

  useEffect(() => {
    if (domRender) {
      setTimeout(() => {
        setAnimationShow(true)
        timer.current = window.setTimeout(() => {
          onHide()
        }, duration)
      }, 33)
    }
  }, [domRender])

  if (!domRender) {
    return null
  }

  return (
    <div
      className={`${styles.container} ${animationShow ? styles.show : ''}`}
      style={{
        top: offsetTop || '20px',
        ...style,
      }}
      onTransitionEnd={() => {
        if (!animationShow) {
          setDomRender(false)
        }
      }}
      onClick={onClick}
      onTouchStart={(e: any) => {
        clientY.current = e.touches[0].clientY
      }}
      onTouchEnd={(e: any) => {
        const deltaY = e.changedTouches[0].clientY - clientY.current
        if (deltaY < -10) {
          onHide()
        }
      }}
      onTouchMove={(e: any) => {
        e.preventDefault()
        e.stopPropagation()
      }}
    >
      {children}
    </div>
  )
}

export default memo(FakeNotificationWrap)
