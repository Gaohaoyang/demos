import React from 'react'
import DotsAnimation from '../LoadingDots/Component'
import styles from './index.module.css'

const index = () => (
  <div
    className={styles.wrap}
  >
    <div style={{ fontSize: '26px' }}>
      loading
      <DotsAnimation />
    </div>
  </div>
)

export default index
