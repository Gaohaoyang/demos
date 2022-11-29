import React from 'react'
import styles from './index.module.css'

export default function LightPassText() {
  return (
    <div className={styles.container}>
      <div className={styles.lightTitle}>
        <div className={styles.mask}>
          <div className={styles.light} />
        </div>
      </div>

      <div className={styles.normalFont}>
        普通字体上有一道光划过
        <div className={styles.lightThrough}>普通字体上有一道光划过</div>
      </div>
    </div>
  )
}
