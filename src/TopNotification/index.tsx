/* eslint-disable react/button-has-type */
import React, { useState } from 'react'
import FakeNotificationWrap from './NotificationWrap'

function TopNotification() {
  // const [showFakeNotification, setShowFakeNotification] = useState(true)
  const [showFakeNotificationWrap, setShowFakeNotificationWrap] = useState(false)
  return (
    <div>
      <h1>fake notification</h1>
      {/* <h2>FakeNotificationTaote</h2> */}
      {/* <button
        onClick={() => {
          setShowFakeNotification(true)
        }}
      >
        open
      </button>
      <button
        onClick={() => {
          setShowFakeNotification(false)
        }}
      >
        hide
      </button> */}

      <br />
      <hr />
      <br />

      <h2>FakeNotificationWrap</h2>

      <button
        onClick={() => {
          setShowFakeNotificationWrap(true)
        }}
      >
        open
      </button>
      <button
        onClick={() => {
          setShowFakeNotificationWrap(false)
        }}
      >
        hide
      </button>

      {/* <FakeNotificationTaote
        show={showFakeNotification}
        onHide={() => {
          setShowFakeNotification(false)
        }}
        text="hello"
      /> */}
      <FakeNotificationWrap
        show={showFakeNotificationWrap}
        onHide={() => {
          setShowFakeNotificationWrap(false)
        }}
        style={{
          height: '120px',
        }}
      >
        hi fake notification
      </FakeNotificationWrap>
    </div>
  )
}

export default TopNotification
