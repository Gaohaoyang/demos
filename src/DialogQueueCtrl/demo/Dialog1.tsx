/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { dialogQueueCtrl } from '../temp/index'
import { DIALOG_NAMES } from './DIALOG_NAMES'

import './Dialog1.css'

interface IProps {
  money: number
  dialogName: DIALOG_NAMES
  dialogData?: {
    name: string
    a: number
    b: {
      ba: string
    }
  }
}

function Dialog1(props: IProps) {
  const { money } = props
  return (
    <div className="container">
      <div className="dialog-panel">
        <div className="title">
          Dialog1 ￥
          {money}
        </div>
        <div className="content">
          name:
          {' '}
          {props.dialogData?.name}
          {' '}
          <br />
          a:
          {' '}
          {props.dialogData?.a}
          {' '}
          <br />
          ba:
          {' '}
          {props.dialogData?.b.ba}
          {' '}
          <br />
          <br />
          hello world!
          <p>
            1Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quae eveniet laudantium!
            Architecto aperiam dolore iste odit distinctio expedita, illum officiis dolores natus
            sunt unde maxime aliquid nostrum necessitatibus exercitationem.
          </p>
          <p>
            2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quae eveniet laudantium!
            Architecto aperiam dolore iste odit distinctio expedita, illum officiis dolores natus
            sunt unde maxime aliquid nostrum necessitatibus exercitationem.
          </p>
          <p>
            3Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quae eveniet laudantium!
            Architecto aperiam dolore iste odit distinctio expedita, illum officiis dolores natus
            sunt unde maxime aliquid nostrum necessitatibus exercitationem.
          </p>
          <p>
            4Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quae eveniet laudantium!
            Architecto aperiam dolore iste odit distinctio expedita, illum officiis dolores natus
            sunt unde maxime aliquid nostrum necessitatibus exercitationem.
          </p>
        </div>
      </div>
      <div
        className="close"
        onClick={() => {
          dialogQueueCtrl.close()
        }}
      />
    </div>
  )
}

export default Dialog1
