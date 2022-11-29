import Queue from './Queue'
import eventName from './eventName'

interface OptionsType {
  withoutMask?: boolean
  animation?: 'zoomIn'
  dialogData?: any
}
export interface OpenInQueueType {
  /** 弹窗名称 */
  dialogName: string
  /** 其他配置项 */
  options: OptionsType | Record<string, never>
}
export interface CloseEventType extends OpenInQueueType {
  isLast?: boolean
}

// ----------------------------------------

const queue = new Queue()

/**
 * 启动出队过程
 */
const runDequeue = () => {
  document.dispatchEvent(
    new CustomEvent<OpenInQueueType>(eventName.OPEN_DIALOG, {
      detail: queue.front(),
    }),
  )
}

/**
 * 队列中打开
 */
const openInQueue = (dialogName: string, options: OptionsType = {}) => {
  if (queue.isEmpty()) {
    queue.enqueue({ dialogName, options })
    runDequeue()
  } else {
    queue.enqueue({ dialogName, options })
  }
}

/**
 * 插入到队首后面
 */
const cutToFrontNextInQueue = (dialogName: string, options: OptionsType = {}) => {
  if (queue.isEmpty()) {
    queue.enqueue({ dialogName, options })
    runDequeue()
  } else {
    queue.cutToSecond({ dialogName, options })
  }
}

const close = () => {
  let isLast = true // 是否为最后一个弹窗，关闭时动画会不同
  if (queue.dataStore.length > 1) {
    isLast = false
  }
  document.dispatchEvent(
    new CustomEvent<CloseEventType>(eventName.CLOSE_DIALOG, {
      detail: {
        ...queue.front(),
        isLast,
      },
    }),
  )
  queue.dequeue()

  return new Promise((resolve) => {
    if (queue.isEmpty()) {
      setTimeout(() => {
        resolve('') // todo
      }, 200)
    } else {
      resolve('') // todo
      runDequeue()
    }
  })
}

export default {
  openInQueue,
  cutToFrontNextInQueue,
  close,
  queue,
}
