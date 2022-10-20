import React from 'react'
import styles from './index.module.css'

interface IDotsAnimation {
  /**
   * number of dots
   * @default 6
   */
  dotsNum?: number
}

export default function DotsAnimation(props: IDotsAnimation) {
  const { dotsNum = 6 } = props
  const arr = []
  for (let i = 0; i < dotsNum; i += 1) {
    arr.push(i)
  }

  return (
    <>
      {arr.map((item, i) => (
        <span
          className={styles.point}
          key={item}
          style={{
            animationDelay: `${80 * i}ms`,
          }}
        >
          .
        </span>
      ))}
    </>
  )
}
