import React, { useEffect, useRef } from 'react'
import styles from './index.module.css'
import hexPos from './utils/hexPos'
import wheelAndRoomsRotate from './utils/rotateAnimation'

/**
 * 摩天轮
 */
function FerrisWheel() {
  const wheelDomRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (wheelDomRef.current) {
      wheelAndRoomsRotate(wheelDomRef.current, wheelDomRef.current?.querySelectorAll('.wheelRooms'))
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.ferris}>
        <div className={styles.wheel} ref={wheelDomRef}>
          {
            hexPos(202 / 2).map((item, index) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={`${styles.room} wheelRooms`}
                style={{
                  top: `${item.top + 4}px`,
                  left: `${item.left - 20 + 4}px`,
                }}
              />
            ))
          }
        </div>
        <div className={styles.bottom} />
      </div>
    </div>
  )
}

export default FerrisWheel
