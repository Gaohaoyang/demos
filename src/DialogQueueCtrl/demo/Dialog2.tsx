/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { dialogQueueCtrl } from '../temp/index'
import { DIALOG_NAMES } from './DIALOG_NAMES'

import './Dialog2.css'

interface IProps {
  dialogName: DIALOG_NAMES
}

function Dialog2(props: IProps) {
  return (
    <div className="container">
      <div className="dialog-panel">
        <div className="title">Dialog 2</div>
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

export default Dialog2
