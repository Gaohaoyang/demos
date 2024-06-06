import styles from './index.module.css'

const InfiniteCarouselScroll = () => {
  console.log('InfiniteCarouselScroll')
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.loop}>
            <img src="https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/demos/forest.png" />
            <img src="https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/demos/phone.png" />
            <img src="https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/demos/squirrel.png" />
            <img src="https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/demos/stars.png" />
            <img src="https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/demos/sunset.png" />
          </div>
          <div className={styles.loop}>
            <img src="https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/demos/forest.png" />
            <img src="https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/demos/phone.png" />
            <img src="https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/demos/squirrel.png" />
            <img src="https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/demos/stars.png" />
            <img src="https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/demos/sunset.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfiniteCarouselScroll
