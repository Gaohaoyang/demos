import React, { useState, useRef, useEffect } from 'react'
import styles from './index.module.css'
import { images, tabsName } from './data'
import { imageToDataUri, getAverageColor, isDarkColor } from './utils'

const imageHeightPx = (window.innerWidth / 16) * 9
const randomImageIndex = Math.floor(Math.random() * images.length)
const navBarHeightPx = 60

function PageGradientScroll() {
  const [currentTab, setCurrentTab] = useState(0)
  const [isDarkBgColor, setIsDarkBgColor] = useState(false)
  const [averageColor, setAverageColor] = useState<[number, number, number]>([255, 255, 255])
  const tabRef = useRef<HTMLDivElement>(null)
  const bgImageMaskRef = useRef<HTMLDivElement>(null)
  const navbarRef = useRef<HTMLDivElement>(null)

  console.log(isDarkBgColor)

  const listenWindowScroll = () => {
    window.addEventListener('scroll', () => {
      if (!bgImageMaskRef.current) {
        return
      }
      if (!navbarRef.current) {
        return
      }
      const threshold = imageHeightPx - navBarHeightPx
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop >= threshold) {
        bgImageMaskRef.current.style.opacity = '1'
        bgImageMaskRef.current.style.height = `${navBarHeightPx + 20}px`
        navbarRef.current.style.opacity = '1'
      } else {
        bgImageMaskRef.current.style.opacity = `${scrollTop / threshold}`
        bgImageMaskRef.current.style.height = `${imageHeightPx - scrollTop}px`
        navbarRef.current.style.opacity = `${scrollTop / threshold}`
      }
    })
  }

  const getAverageColorAndDetectDark = () => {
    imageToDataUri(images[randomImageIndex].url).then((dataUri) => {
      const imgElement = document.createElement('img')
      imgElement.src = dataUri
      imgElement.onload = () => {
        const average = getAverageColor(imgElement)
        setAverageColor(average)
        if (isDarkColor(average)) {
          setIsDarkBgColor(true)
        }
      }
    })
  }

  /**
   * This code handles the click event for the tab buttons.
   * It also scrolls the tab buttons to the center of the screen.
   */
  const handleClickTab = (index: number) => {
    setCurrentTab(index)
    if (tabRef.current) {
      const halfScreenWidth = window.innerWidth / 2
      const currentTabHalfWidth = (tabRef.current.children[index] as HTMLElement).offsetWidth / 2

      const left = (tabRef.current.children[index] as HTMLElement).offsetLeft
        - halfScreenWidth
        + currentTabHalfWidth

      tabRef.current.scroll({
        left,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    getAverageColorAndDetectDark()
    listenWindowScroll()
  }, [])

  return (
    <div
      style={{
        backgroundColor: `rgb(${averageColor[0]}, ${averageColor[1]}, ${averageColor[2]})`,
      }}
    >
      <div
        className={styles.navbar}
        style={{
          height: navBarHeightPx,
          color: isDarkBgColor ? '#fff' : '#333',
        }}
        ref={navbarRef}
      >
        Page Gradient Scroll
      </div>
      <img
        className={styles.bgImage}
        src={images[randomImageIndex].url}
        alt={images[randomImageIndex].name}
      />
      <div
        className={styles.bgImageMask}
        ref={bgImageMaskRef}
        style={{
          height: imageHeightPx,
          backgroundColor: `rgb(${averageColor[0]}, ${averageColor[1]}, ${averageColor[2]})`,
        }}
      />
      <div className={styles.wrap}>
        <div
          className={styles.bgPadding}
          style={{
            height: imageHeightPx - 20,
          }}
        />
        <div
          className={styles.tab}
          ref={tabRef}
          style={{
            top: navBarHeightPx,
          }}
        >
          {tabsName.map((item, index) => (
            <button
              key={item}
              className={`${styles.tabItem} ${currentTab === index ? styles.tabActive : ''}`}
              onClick={() => {
                handleClickTab(index)
              }}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
        <div className={styles.content}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div className={styles.contentItem} key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PageGradientScroll
