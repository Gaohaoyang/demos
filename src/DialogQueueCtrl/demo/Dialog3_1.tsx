/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react'
import { dialogQueueCtrl } from '../temp/index'
import { DIALOG_NAMES } from './DIALOG_NAMES'

import './Dialog3_1.css'

interface DialogDataType {
  name: string
}

interface IProps {
  dialogName: DIALOG_NAMES
  dialogData?: DialogDataType
  count: number
}

function Dialog3_1(props: IProps) {
  return (
    <div className="container">
      <div className="dialog-panel">
        <div className="title">Dialog3_1</div>
        <div>测试没有 mask 的弹窗</div>
        <div className="content">
          <div>
            dialogData:
            {' '}
            {props.dialogData?.name}
          </div>
          <div>
            count:
            {' '}
            {props.count}
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum fuga repellat soluta
            consectetur. Perspiciatis eius deleniti odio, reprehenderit quod beatae repudiandae
            inventore, eaque in earum culpa blanditiis ea, dolores exercitationem!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum fuga repellat soluta
            consectetur. Perspiciatis eius deleniti odio, reprehenderit quod beatae repudiandae
            inventore, eaque in earum culpa blanditiis ea, dolores exercitationem!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum fuga repellat soluta
            consectetur. Perspiciatis eius deleniti odio, reprehenderit quod beatae repudiandae
            inventore, eaque in earum culpa blanditiis ea, dolores exercitationem!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum fuga repellat soluta
            consectetur. Perspiciatis eius deleniti odio, reprehenderit quod beatae repudiandae
            inventore, eaque in earum culpa blanditiis ea, dolores exercitationem!
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

export default Dialog3_1
