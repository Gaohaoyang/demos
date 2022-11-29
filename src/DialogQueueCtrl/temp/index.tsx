/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, {
  CSSProperties, useEffect, useState, Children, cloneElement,
} from 'react'
import dialogQueueCtrl, { OpenInQueueType, CloseEventType } from './dialogQueueCtrl'
import Portal from './Portal'
import './index.css'
import eventName from './eventName'
import { lock, unlock } from './lockBodyScroll'

interface IDialogWrapProps {
  /** 蒙层背景色 */
  maskBgColor?: string
  /** 弹窗弹出时，页面是否禁止滚动，默认为 true */
  lockPageScroll?: boolean
  /** 遮罩层和弹窗的 `z-index` 值 */
  zIndex?: number
  children: React.ReactNode
}

let dialogData: any

function DialogsWrap(props: IDialogWrapProps) {
  const {
    children, maskBgColor = 'rgba(0,0,0,0.7)', lockPageScroll = true, zIndex = 200,
  } = props

  const [style, setStyle] = useState<CSSProperties>({
    opacity: 0,
    transform: 'scale(0.1)',
  })
  const [withoutMask, setWithoutMask] = useState(false)
  const [showDialogIndex, setShowDialogIndex] = useState(-1)

  useEffect(() => {
    /**
     * 监听打开
     */
    document.addEventListener(eventName.OPEN_DIALOG, (e: any) => {
      if (!e.detail.dialogName) {
        console.warn('you may miss the dialogName')
        return
      }
      if (e.detail.options.dialogData) {
        dialogData = e.detail.options.dialogData
      }

      Children.forEach(children, (child: any, index: number) => {
        if (e.detail.dialogName === child.props.dialogName) {
          showDialog(index)
        }
      })

      if (e.detail.options?.withoutMask) {
        setWithoutMask(true)
      } else {
        setWithoutMask(false)
      }
    })

    /**
     * 监听关闭
     */
    document.addEventListener(eventName.CLOSE_DIALOG, (e: any) => {
      hideDialog({ isLast: e.detail.isLast })
    })
  }, [])

  const showDialog = (index: number) => {
    setShowDialogIndex(index)
    setTimeout(() => {
      setStyle({
        opacity: 1,
        transform: 'scale(1)',
      })
      if (lockPageScroll) {
        lock()
      }
    }, 20)
  }

  const hideDialog = ({ isLast = true }) => {
    if (isLast) {
      if (lockPageScroll) {
        unlock()
      }
      setStyle({
        opacity: 0,
        transform: 'scale(1)',
      })
      setTimeout(() => {
        setShowDialogIndex(-1)
        dialogData = null
        setStyle({
          opacity: 0,
          transform: 'scale(0.1)',
        })
      }, 180)
    }
  }

  if (showDialogIndex === -1) return null

  const renderDialog = (index: number) => {
    let c
    if (Children.count(children) === 1) {
      c = children as React.ReactNode
    } else {
      c = (children as React.ReactNode[])[index]
    }
    if (dialogData) {
      // @ts-ignore
      c = cloneElement(c, { dialogData })
    }
    return c
  }

  return (
    <Portal>
      {withoutMask ? (
        <>{renderDialog(showDialogIndex)}</>
      ) : (
        <div
          className="dialog-queue-container"
          style={{
            backgroundColor: maskBgColor,
            opacity: style.opacity,
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            zIndex,
          }}
        >
          {renderDialog(showDialogIndex)}
        </div>
      )}
    </Portal>
  )
}

export default DialogsWrap

export { dialogQueueCtrl }
