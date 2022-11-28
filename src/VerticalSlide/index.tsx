import React, { useEffect, useRef } from 'react'
import anime from 'animejs'
import styles from './index.module.css'

function VerticalSlide() {
  const verticalSlideRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    anime({
      targets: verticalSlideRef.current?.childNodes,
      translateY: [
        { value: '-100%', duration: 300 },
        { value: '-200%', duration: 300, delay: 1500 },
      ],
      delay: anime.stagger(1900),
      easing: 'easeInQuad',
      loop: true,
    })
  }, [])

  return (
    <>
      <h1>VerticalSlide with animejs</h1>
      <div className={styles.wrap} ref={verticalSlideRef}>
        <div className={styles.row}>R1 Lorem ipsum dolor</div>
        <div className={styles.row}>R2 Lorem ipsum dolor</div>
        <div className={styles.row}>R3 Lorem ipsum dolor</div>
        <div className={styles.row}>R4 Lorem ipsum dolor</div>
        <div className={styles.row}>R5 Lorem ipsum dolor</div>
      </div>
    </>
  )
}

export default VerticalSlide
