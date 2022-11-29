/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react'
import { dialogQueueCtrl } from '../temp/index'
import { DIALOG_NAMES } from './DIALOG_NAMES'

import './Dialog3.css'

interface IProps {
  dialogName: DIALOG_NAMES
}

function Dialog3(props: IProps) {
  return (
    <div className="container">
      <div className="dialog-panel">
        <div className="title">Dialog3</div>
        <button
          onClick={() => {
            dialogQueueCtrl.cutToFrontNextInQueue(DIALOG_NAMES.D4)
            dialogQueueCtrl.close()
          }}
        >
          将弹窗4插队
        </button>
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

export default Dialog3
