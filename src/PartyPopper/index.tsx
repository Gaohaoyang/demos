/* eslint-disable react/button-has-type */
import React, { useState } from 'react'
import PartyPopper from './Component'

function index() {
  const [start, setStart] = useState(false)

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#333',
        position: 'absolute',
        top: '0',
        left: '0',
      }}
    >
      <PartyPopper elementsNum={100} start={start} />
      <button
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
        }}
        onClick={() => {
          setStart(true)
        }}
      >
        start
      </button>

      <button
        style={{
          position: 'absolute',
          top: '72px',
          right: '24px',
        }}
        onClick={() => {
          setStart(false)
        }}
      >
        stop
      </button>
    </div>
  )
}

export default index
