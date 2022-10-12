import anime from 'animejs'

const wheelAndRoomsRotate = (wheelDom: HTMLElement, RoomsDoms: NodeListOf<Element>) => {
  const timeline = anime.timeline({
    easing: 'linear',
    duration: 8000,
    loop: true,
    autoplay: true,
  })

  timeline
    .add({
      targets: wheelDom,
      rotate: 360,
    })
    .add(
      {
        targets: RoomsDoms,
        rotate: -360,
      },
      0,
    )
}

export default wheelAndRoomsRotate
