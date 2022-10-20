import React from 'react'
import DotsAnimation from './Component'
import styles from './index.module.css'

function LoadingPoints() {
  return (
    <div
      className={styles.wrap}
    >
      <div>
        loading dots animation
        <DotsAnimation />
      </div>
      <br />
      <br />
      <div style={{ fontSize: '30px' }}>
        big dots animation
        <DotsAnimation dotsNum={8} />
      </div>
      <br />
      <br />
      <div>
        long dots animation
        <DotsAnimation dotsNum={30} />
      </div>

    </div>
  )
}

export default LoadingPoints
