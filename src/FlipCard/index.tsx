/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react'
import styles from './index.module.css'

function FlipCard() {
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    console.log('flipped', flipped)
  }, [flipped])
  return (
    <div
      className={styles.wrap}
      onClick={() => {
        setFlipped((pre) => !pre)
      }}
    >
      <div
        className={`${styles.card} ${styles.front}`}
        style={{
          opacity: flipped ? 0 : 1,
          transform: `rotateY(${flipped ? '-180deg' : 0})`,
        }}
      />
      <div
        className={`${styles.card} ${styles.back}`}
        style={{
          opacity: flipped ? 1 : 0,
          transform: `rotateY(${flipped ? 0 : '180deg'})`,
        }}
      />
    </div>
  )
}

export default FlipCard
