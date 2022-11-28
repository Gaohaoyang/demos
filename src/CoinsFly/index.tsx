/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef } from 'react'
import anime from 'animejs'
import styles from './index.module.css'

function CoinsFly() {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    anime({
      targets: wrapRef.current?.childNodes,
      delay: anime.stagger(90),
      translateY: [
        {
          value: 0,
        },
        {
          value: -330,
          easing: 'linear',
        },
      ],
      translateX: [
        {
          value: 0,
        },
        {
          value: -100,
          easing: 'cubicBezier(.05,.9,.8,1.5)',
        },
      ],
      scale: [
        {
          value: 1,
        },
        {
          value: 0.5,
          easing: 'linear',
        },
      ],
      opacity: [
        {
          value: 1,
        },
        {
          value: 0,
          easing: 'cubicBezier(1,0,1,0)',
        },
      ],
      duration: 900,
      begin: () => {},
      complete: () => {
        console.log('complete')
      },
    })
  }, [])

  return (
    <>
      <div className={styles.origin} />
      <div className={styles.target} />
      <div className={styles.container} ref={wrapRef}>
        {new Array(30).fill(0).map((item, index) => (
          <div className={styles.coin} key={`${item}${index}`} />
        ))}
      </div>
    </>
  )
}

export default CoinsFly
