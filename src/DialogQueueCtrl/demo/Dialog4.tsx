/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
import React from 'react'
import { dialogQueueCtrl } from '../temp/index'
import { DIALOG_NAMES } from './DIALOG_NAMES'

import './Dialog4.css'

interface IProps {
  dialogName: DIALOG_NAMES
}

function Dialog4(props: IProps) {
  return (
    <div className="container">
      <div className="dialog-panel">
        <div className="title">Dialog4</div>
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

export default Dialog4
