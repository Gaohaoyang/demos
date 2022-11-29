const bodyElement = document.querySelector('body')
// const scrollContainer: HTMLElement | null | undefined =
// bodyElement?.parentElement;

let scrollTop = 0

/**
 * 禁止 body 滚动
 */
const lock = () => {
  if (!bodyElement) {
    return
  }
  if (bodyElement.style.position !== 'fixed') {
    scrollTop = window.scrollY
  }
  bodyElement.style.position = 'fixed'
  bodyElement.style.top = `-${scrollTop}px`
}

/**
 * 解除禁止 body 滚动
 */
const unlock = () => {
  if (!bodyElement) {
    return
  }
  bodyElement.style.position = 'static'
  bodyElement.style.top = 'unset'
  window.scrollTo(0, scrollTop)
}

// const handleTouchmove = (e: TouchEvent) => {
//   e.preventDefault();
// };

// const lock = () => {
//   document.addEventListener('touchmove', handleTouchmove, { passive: false });
// };
// const unlock = () => {
//   document.removeEventListener('touchmove', handleTouchmove);
// };

export { lock, unlock }
