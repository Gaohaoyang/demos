/* eslint-disable max-len */
import React, { useEffect, useState, useRef } from 'react'
import QRCode from 'qrcode'
import imageToBase64 from 'image-to-base64/browser'
import html2canvas from 'html2canvas'
import styles from './index.module.css'

/**
 * 合图
 * @returns
 */
function CompositeImage() {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>()
  const [img, setImg] = useState<string>()
  const compositeWrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    imageToBase64(
      'https://gw.alicdn.com/imgextra/i2/O1CN01G118Au1RxZQ9WFyAA_!!6000000002178-2-tps-427-640.png',
    ).then((res: string) => {
      setImg(res)
    })
    QRCode.toDataURL(
      '测试二维码生成。吾生也有涯，而知也无涯，以有涯随无涯，殆也 --庄子',
      (err, url) => {
        setQrCodeUrl(url)
      },
    )
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.compositeWrap} ref={compositeWrapRef}>
        {img && <img src={`data:image/png;base64,${img}`} alt="bgImage" className={styles.bgImg} />}

        <div className={styles.title}>Lorem ipsum dolor sit</div>
        <img className={styles.qrCode} src={qrCodeUrl} alt="qrCode" />
      </div>
      <div className={styles.cover}>cover</div>
      <button
        className={styles.btn}
        type="button"
        onClick={() => {
          if (compositeWrapRef.current) {
            html2canvas(compositeWrapRef.current, {
              allowTaint: true,
            }).then((canvas: any) => {
              document.body.appendChild(canvas)
            })
          }
          // console.log('Composite')
        }}
      >
        Composite
      </button>
      <button
        className={styles.btn2}
        type="button"
        onClick={() => {
          const capture = () => {
            // const captureElement = document.querySelector('#capture')
            if (compositeWrapRef.current) {
              html2canvas(compositeWrapRef.current, {
                // allowTaint: true,
              })
                .then((canvas) => {
                  // eslint-disable-next-line no-param-reassign
                  canvas.style.display = 'none'
                  document.body.appendChild(canvas)
                  return canvas
                })
                .then((canvas) => {
                  const image = canvas
                    .toDataURL('image/png')
                    .replace('image/png', 'image/octet-stream')
                  console.log(image)

                  const a = document.createElement('a')
                  a.setAttribute('download', 'my-image.png')
                  a.setAttribute('href', image)
                  a.click()
                  canvas.remove()
                })
            }
          }
          capture()

          // console.log('Download')
        }}
      >
        Download
      </button>
    </div>
  )
}

export default CompositeImage
