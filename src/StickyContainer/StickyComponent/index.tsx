/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useEffect, useRef } from 'react'
import browserSupportsPositionSticky from './detectSupportSticky' // 是否已吸顶

interface IStickyContainer {
  children: React.ReactNode
  /** 吸顶时距离顶部距离, 单位 rpx，默认为0 */
  offsetTop?: number
  /** 滚动容器，默认为 document */
  scrollContainer?: HTMLElement
  /** 层级，默认为 101 */
  zIndex?: number
  /** 吸顶时的回调 */
  onStickyTop?: (dom: React.RefObject<HTMLElement>) => void
  /** 离开吸顶时的回调 */
  onCancelStickTop?: (dom: React.RefObject<HTMLElement>) => void
  /** 吸底时距离底部距离, 单位 rpx，默认为0 */
  offsetBottom?: number
  /** 吸底时的回调 */
  onStickyBottom?: (dom: React.RefObject<HTMLElement>) => void
  /** 离开吸底时的回调 */
  onCancelStickBottom?: (dom: React.RefObject<HTMLElement>) => void
}

const supportStickyAndIntersection = browserSupportsPositionSticky()
  && 'IntersectionObserver' in window
  && 'intersectionRatio' in window.IntersectionObserverEntry.prototype

/**
 * 获取真实像素值
 * @param {Number} remNum
 */
// const getPxNumber = (remNum: any) => {
//   const screenWidth = window.screen.width // 750 比例
//   return (remNum / 750) * screenWidth
// }

/**
 * 吸顶容器组件
 */
function StickyContainer(props: IStickyContainer) {
  // const StickyContainer: React.FC<IStickyContainer> = (props) => {
  const {
    children,
    offsetTop,
    scrollContainer = document,
    zIndex = 101,
    onStickyTop,
    onCancelStickTop,
    offsetBottom,
    onStickyBottom,
    onCancelStickBottom,
  } = props

  const containerRef = useRef<HTMLDivElement>(null)
  const stickyWrapRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState<number | 'auto'>('auto')

  const fixedTopRef = useRef(false)
  const fixedBottomRef = useRef(false)

  let offsetTopPxNum: number | undefined
  if (offsetTop !== undefined) {
    // offsetTopPxNum = getPxNumber(offsetTop)
    offsetTopPxNum = offsetTop
  }

  let offsetBottomPxNum: number | undefined
  if (offsetBottom !== undefined) {
    // offsetBottomPxNum = getPxNumber(offsetBottom)
    offsetBottomPxNum = offsetBottom
  }

  /**
   * 处理 监听滚动 的吸顶成功回调
   * 不支持 IntersectionObserver 的情况
   */
  const handleStickyTop = () => {
    if (containerRef.current) {
      if (offsetTopPxNum && containerRef.current.getBoundingClientRect().top <= offsetTopPxNum) {
        if (!fixedTopRef.current) {
          if (stickyWrapRef.current) {
            stickyWrapRef.current.style.position = 'fixed'
            stickyWrapRef.current.style.top = `${offsetTopPxNum}px`
            stickyWrapRef.current.style.bottom = 'auto'
          }
          onStickyTop && onStickyTop(stickyWrapRef)
          fixedTopRef.current = !fixedTopRef.current
          if (containerRef.current) {
            containerRef.current.style.zIndex = `${zIndex + 10}`
          }
        }
      } else if (fixedTopRef.current) {
        if (stickyWrapRef.current) {
          stickyWrapRef.current.style.position = 'absolute'
          stickyWrapRef.current.style.top = '0'
        }
        onCancelStickTop && onCancelStickTop(stickyWrapRef)
        fixedTopRef.current = !fixedTopRef.current
        if (containerRef.current) {
          containerRef.current.style.zIndex = `${zIndex}`
        }
      }
    }
  }

  /**
   * 处理 监听滚动 的吸底成功回调
   * 不支持 IntersectionObserver 的情况
   */
  const handleStickyBottom = () => {
    if (containerRef.current) {
      if (
        offsetBottomPxNum
        && containerRef.current.getBoundingClientRect().bottom + offsetBottomPxNum
          >= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        if (!fixedBottomRef.current) {
          if (stickyWrapRef.current) {
            stickyWrapRef.current.style.position = 'fixed'
            stickyWrapRef.current.style.bottom = `${offsetBottomPxNum}px`
            stickyWrapRef.current.style.top = 'auto'
          }
          onStickyBottom && onStickyBottom(stickyWrapRef)
          fixedBottomRef.current = !fixedBottomRef.current
        }
      } else if (fixedBottomRef.current) {
        if (stickyWrapRef.current) {
          stickyWrapRef.current.style.position = 'absolute'
          stickyWrapRef.current.style.bottom = '0'
        }
        onCancelStickBottom && onCancelStickBottom(stickyWrapRef)
        fixedBottomRef.current = !fixedBottomRef.current
      }
    }
  }

  useEffect(() => {
    // rax 组件编译构建时很奇怪，会把 webkit 前缀干掉，所以使用如下写法动态插入
    const stickyHack = `
    <style>
      .c-sticky-hack-css {
        position: -webkit-sticky;
        position: -moz-sticky;
        position: -o-sticky;
        position: -ms-sticky;
        position: sticky;
      }
      .c-sticky-hack-css-r {
        position: relative;
      }
    </style>
    `
    document.querySelector('head')?.insertAdjacentHTML('beforeend', stickyHack)
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.getBoundingClientRect().height)
    }
    if (stickyWrapRef.current) {
      stickyWrapRef.current.style.position = 'absolute'
    }

    // 优先使用 sticky，浏览器不支持 sticky 时，使用滚动监听，fixed
    if (supportStickyAndIntersection) {
      if (containerRef.current) {
        if (offsetBottomPxNum !== undefined) {
          // 如果设置了吸底距离
          containerRef.current.style.bottom = `${offsetBottomPxNum}px`
          // containerRef.current.style.top = 'auto';
        }
        if (offsetTopPxNum !== undefined) {
          // 如果设置了吸顶距离
          containerRef.current.style.top = `${offsetTopPxNum}px`
        }
      }
    } else {
      if (offsetBottomPxNum !== undefined) {
        scrollContainer.removeEventListener('scroll', handleStickyBottom)
        handleStickyBottom()
        scrollContainer.addEventListener('scroll', handleStickyBottom)
      }
      if (offsetTopPxNum !== undefined) {
        scrollContainer.removeEventListener('scroll', handleStickyTop)
        handleStickyTop()
        scrollContainer.addEventListener('scroll', handleStickyTop)
      }
    }
    return () => {
      scrollContainer.removeEventListener('scroll', handleStickyTop)
      scrollContainer.removeEventListener('scroll', handleStickyBottom)
    }
  }, [offsetTop, offsetBottom])

  /**
   * 支持 IntersectionObserver 时的吸顶成功回调
   */
  useEffect(() => {
    if (supportStickyAndIntersection && containerRef.current) {
      if (offsetBottomPxNum !== undefined) {
        const observer = new IntersectionObserver(
          ([e]) => {
            if (e.boundingClientRect.top >= 0) {
              if (e.intersectionRatio < 1) {
                onStickyBottom && onStickyBottom(stickyWrapRef)
              } else {
                onCancelStickBottom && onCancelStickBottom(stickyWrapRef)
              }
            }
          },
          {
            threshold: [1],
            rootMargin: `0px 0px ${-(offsetBottomPxNum + 1)}px 0px`, // 设置交叉容器边距
          },
        )
        observer.observe(containerRef.current)
      }

      if (offsetTopPxNum !== undefined) {
        const observer = new IntersectionObserver(
          ([e]) => {
            if (e.rootBounds && e.boundingClientRect.top <= e.rootBounds.height) {
              if (e.intersectionRatio < 1) {
                onStickyTop && onStickyTop(stickyWrapRef)
                if (containerRef.current) {
                  containerRef.current.style.zIndex = `${zIndex + 10}`
                }
              } else {
                onCancelStickTop && onCancelStickTop(stickyWrapRef)
                if (containerRef.current) {
                  containerRef.current.style.zIndex = `${zIndex}`
                }
              }
            }
          },
          {
            threshold: [1],
            rootMargin: `${-(offsetTopPxNum + 1)}px 0px 0px 0px`, // 设置交叉容器边距
          },
        )
        observer.observe(containerRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`${supportStickyAndIntersection ? 'c-sticky-hack-css' : 'c-sticky-hack-css-r'}`}
      style={{
        width: '100vw',
        height: `${containerHeight}px`,
        zIndex,
        // top: 0,
        left: 0,
        display: 'block',
      }}
    >
      <div
        ref={stickyWrapRef}
        style={{
          top: 0,
          left: 0,
          width: '100%',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default StickyContainer
