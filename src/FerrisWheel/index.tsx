/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef } from 'react'
import styles from './index.module.css'
import getPos from './utils/getPos'
import wheelAndRoomsRotate from './utils/rotateAnimation'

/**
 * 摩天轮
 */
function FerrisWheel() {
  const wheelDomRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (wheelDomRef.current) {
      wheelAndRoomsRotate(
        wheelDomRef.current,
        wheelDomRef.current?.querySelectorAll('.wheelRooms'),
      )
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.ferris}>
        <div className={styles.wheel} ref={wheelDomRef}>
          <div className={styles.roomsArea}>
            {
              getPos(202 / 2, 8).map((item, index) => (
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

export default FerrisWheel
