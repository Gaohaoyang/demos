/* eslint-disable no-param-reassign */
import React, { RefObject, useRef } from 'react'
import StickyContainer from './StickyComponent'

const navbarHeight = 88

function StickyContainerDemo() {
  const navbarRef = useRef<HTMLDivElement>(null)
  return (
    <div
      style={{
        width: '100vw',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <div
        ref={navbarRef}
        style={{
          width: '100vw',
          height: `${navbarHeight}px`,
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 200,
          backgroundColor: '#fff',
          boxShadow: '0 2px 4px 0px rgba(0, 0, 0, 0.22)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        navbar
      </div>
      <div
        style={{
          width: '100vw',
          height: '100vw',
          backgroundColor: '#DCEDC8',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        content
      </div>

      <StickyContainer
        offsetTop={navbarHeight - 1} // 为了避免 Android 小数像素可能露出一个缝，这里减一像素
        onStickyTop={(stickyWrapRef: RefObject<HTMLElement>) => {
          console.log('onStickyTop')
          if (stickyWrapRef.current) {
            stickyWrapRef.current.style.boxShadow = '0 2px 4px 0px rgba(0, 0, 0, 0.22)'
          }
          if (navbarRef.current) {
            navbarRef.current.style.boxShadow = 'none'
          }
        }}
        onCancelStickTop={(stickyWrapRef: RefObject<HTMLElement>) => {
          console.log('onCancelStickTop')
          if (stickyWrapRef.current) {
            stickyWrapRef.current.style.boxShadow = 'none'
          }
          if (navbarRef.current) {
            navbarRef.current.style.boxShadow = '0 2px 4px 0px rgba(0, 0, 0, 0.22)'
          }
        }}
      >
        <div
          style={{
            width: '100vw',
            height: '80px',
            backgroundColor: '#eee',
          }}
        >
          tab 组件之类的，吸顶容器的内容
        </div>
      </StickyContainer>

      <div
        style={{
          width: '100vw',
          height: '200vw',
          backgroundColor: '#E0F7FA',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        content
      </div>

      <StickyContainer
        zIndex={200}
        offsetTop={navbarHeight - 1 + 80} // 为了避免 Android 小数像素可能露出一个缝，这里减一像素
        onStickyTop={(stickyWrapRef: RefObject<HTMLElement>) => {
          console.log('onStickyTop')
          if (stickyWrapRef.current) {
            stickyWrapRef.current.style.boxShadow = '0 2px 4px 0px rgba(0, 0, 0, 0.22)'
          }
        }}
        onCancelStickTop={(stickyWrapRef: RefObject<HTMLElement>) => {
          console.log('onCancelStickTop')
          if (stickyWrapRef.current) {
            stickyWrapRef.current.style.boxShadow = 'none'
          }
        }}
        offsetBottom={44 - 1} // 为了避免 Android 小数像素可能露出一个缝，这里减一像素
        onStickyBottom={(stickyWrapRef: RefObject<HTMLElement>) => {
          console.log('onStickyBottom44')
          if (stickyWrapRef.current) {
            stickyWrapRef.current.style.boxShadow = '0 -2px 4px 0px rgba(0, 0, 0, 0.22)'
          }
        }}
        onCancelStickBottom={(stickyWrapRef: RefObject<HTMLElement>) => {
          console.log('onCancelStickBottom44')
          if (stickyWrapRef.current) {
            stickyWrapRef.current.style.boxShadow = 'none'
          }
        }}
      >
        <div
          style={{
            width: '100vw',
            height: '180px',
            backgroundColor: '#eee',
          }}
        >
          既吸顶又吸底
        </div>
      </StickyContainer>

      <div
        style={{
          width: '100vw',
          height: '200vw',
          backgroundColor: '#B3E5FC',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        content
      </div>

      <StickyContainer
        offsetBottom={8}
        onStickyBottom={(stickyWrapRef: RefObject<HTMLElement>) => {
          console.log('onStickyBottom')
          if (stickyWrapRef.current) {
            stickyWrapRef.current.style.boxShadow = '0 -2px 4px 0px rgba(0, 0, 0, 0.22)'
          }
        }}
        onCancelStickBottom={(stickyWrapRef: RefObject<HTMLElement>) => {
          console.log('onCancelStickBottom')
          if (stickyWrapRef.current) {
            stickyWrapRef.current.style.boxShadow = 'none'
          }
        }}
      >
        <div
          style={{
            width: '100vw',
            height: '30px',
            backgroundColor: '#ddd',
          }}
        >
          吸底容器
        </div>
      </StickyContainer>

      {[
        '#E0F7FA',
        '#B3E5FC',
        '#81D4FA',
        '#4FC3F7',
        '#29B6F6',
        '#03A9F4',
        '#039BE5',
        '#0288D1',
        '#0277BD',
        '#01579B',
      ].map((item) => (
        <div
          style={{
            width: '100vw',
            height: '100vw',
            backgroundColor: item,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          key={item}
        >
          content
        </div>
      ))}
    </div>
  )
}

export default StickyContainerDemo
