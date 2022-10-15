/* eslint-disable react/no-array-index-key */
import React, {
  useEffect, useRef, useState, memo,
} from 'react'
import GUI from 'lil-gui'
import styles from './index.module.css'
import getPos from './utils/getPos'
import WheelAndRoomsRotate from './utils/WheelAndRoomsRotate'

/**
 * 摩天轮
 */
function FerrisWheel() {
  const guiObj = {
    count: 8,
    start: () => { },
    stop: () => { },
    restart: () => { },
    reverse: () => { },
  }

  const wheelDomRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<WheelAndRoomsRotate>()
  const [count, setCount] = useState(guiObj.count)

  useEffect(() => {
    const gui = new GUI()

    if (wheelDomRef.current) {
      animationRef.current = new WheelAndRoomsRotate(
        wheelDomRef.current,
        wheelDomRef.current?.querySelectorAll('.wheelRooms'),
        false,
      )

      gui.add(guiObj, 'count', 6, 16, 1).onFinishChange((e: number) => {
        setCount(e)
      })
      guiObj.start = () => {
        animationRef.current?.play()
      }
      guiObj.stop = () => {
        animationRef.current?.stop()
      }
      guiObj.reverse = () => {
        animationRef.current?.reverse()
      }
      gui.add(guiObj, 'start')
      gui.add(guiObj, 'stop')
      gui.add(guiObj, 'reverse')
    }
    return () => {
      gui.destroy()
    }
  }, [])

  useEffect(() => {
    if (wheelDomRef.current) {
      animationRef.current?.restart(wheelDomRef.current.querySelectorAll('.wheelRooms'))
    }
  }, [count])

  return (
    <div className={styles.container}>
      <div className={styles.ferris}>
        <div className={styles.wheel} ref={wheelDomRef}>
          <div className={styles.roomsArea}>
            {
              getPos(202 / 2, count).map((item, index) => (
                <div
                  key={index}
                  className={`${styles.room} wheelRooms`}
                  style={{
                    top: `${item.y}px`,
                    left: `${item.x - 20}px`,
                  }}
                />
              ))
            }
          </div>
        </div>
        <div className={styles.bottom} />
      </div>
    </div>
  )
}

export default memo(FerrisWheel)
