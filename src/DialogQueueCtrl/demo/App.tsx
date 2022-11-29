/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import DialogsWrap, { dialogQueueCtrl } from '../temp/index'
import Dialog1 from './Dialog1'
import Dialog2 from './Dialog2'
import Dialog3 from './Dialog3'
import Dialog3d1 from './Dialog3_1'
import Dialog4 from './Dialog4'
import { DIALOG_NAMES } from './DIALOG_NAMES'
import './App.css'

function App() {
  const [money, setMoney] = useState(0)
  const [count, setCount] = useState(0)
  useEffect(() => {}, [])

  useEffect(() => {
    console.log(dialogQueueCtrl.queue.dataStore)
  }, [])

  return (
    <>
      hello
      <h1>测试弹窗队列</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi dolor pariatur praesentium
        voluptas eveniet quam quas commodi recusandae natus consequatur cum, exercitationem esse
        laboriosam tenetur obcaecati accusamus aliquam nam error.
      </p>
      <button
        onClick={() => {
          setCount((pre) => pre + 1)
          console.log('clicked')
        }}
      >
        click me!
      </button>
      <h2>test</h2>
      <button
        onClick={() => {
          dialogQueueCtrl.openInQueue(DIALOG_NAMES.D1, {
            dialogData: {
              name: 'dialog',
              a: 2,
              b: {
                ba: 'blue',
              },
            },
          })
          setTimeout(() => {
            setMoney(999)
          }, 1000)
          setTimeout(() => {
            dialogQueueCtrl.openInQueue(DIALOG_NAMES.D2)
          }, 20)
          dialogQueueCtrl.openInQueue(DIALOG_NAMES.D3)
          dialogQueueCtrl.openInQueue(DIALOG_NAMES.D3_1, {
            withoutMask: true,
            dialogData: {
              name: 'chuanshi',
            },
          })
        }}
      >
        open dialogs
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, non. Quod laborum distinctio
        fuga nisi saepe qui ullam error iure eum excepturi quos, officia delectus, doloribus rerum
        amet assumenda voluptatum.
      </p>
      <h2>test</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa neque, atque dolore tempora
        laborum sint facilis possimus quia aliquid, praesentium consequuntur. Sapiente voluptatem
        deserunt eius natus, corporis ipsam perspiciatis ullam!
      </p>
      <h2>test</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores a dicta mollitia
        nobis placeat corrupti tempora odit magni accusantium maxime natus fuga facere tempore, quis
        ratione! Ullam, exercitationem quasi.
      </p>
      <h2>test</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magnam maxime quibusdam,
        inventore culpa unde velit, quae, ipsam rerum totam aspernatur reprehenderit sequi mollitia
        vitae veniam cumque numquam deserunt iure!
      </p>
      <h2>test</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore sit ut, fugit eligendi
        voluptas molestiae iusto, repellat sapiente voluptate necessitatibus cumque vitae suscipit
        exercitationem. Dolorem aliquid laboriosam est repudiandae.
      </p>
      <DialogsWrap lockPageScroll>
        <Dialog1 dialogName={DIALOG_NAMES.D1} money={money} />
        <Dialog2 dialogName={DIALOG_NAMES.D2} />
        <Dialog3 dialogName={DIALOG_NAMES.D3} />
        <Dialog3d1 dialogName={DIALOG_NAMES.D3_1} count={count} />
        <Dialog4 dialogName={DIALOG_NAMES.D4} />
      </DialogsWrap>
    </>
  )
}

export default App
