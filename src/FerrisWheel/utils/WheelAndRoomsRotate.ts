import anime from 'animejs'

export default class WheelAndRoomsRotate {
  wheelDom: HTMLElement

  roomsDoms: NodeListOf<Element>

  timeline: anime.AnimeTimelineInstance | undefined

  constructor(wheelDom: HTMLElement, roomsDoms: NodeListOf<Element>, autoPlay = false) {
    this.wheelDom = wheelDom
    this.roomsDoms = roomsDoms
    this.initTimeLine(autoPlay)
  }

  private initTimeLine(autoPlay: boolean) {
    this.timeline = anime.timeline({
      easing: 'linear',
      duration: 8000,
      loop: true,
      autoplay: autoPlay,
    })
    this.timeline
      .add({
        targets: this.wheelDom,
        rotate: 360,
      })
      .add(
        {
          targets: this.roomsDoms,
          rotate: -360,
        },
        0,
      )
  }

  play() {
    this.timeline?.play()
  }

  stop() {
    this.timeline?.pause()
  }

  reset() {
    anime.remove(this.wheelDom)
    anime.remove(this.roomsDoms)
    anime.set(this.roomsDoms, {
      rotate: 0,
    })
    anime.set(this.wheelDom, {
      rotate: 0,
    })
  }

  restart(roomsDoms: NodeListOf<Element>) {
    this.roomsDoms = roomsDoms
    this.reset()
    this.initTimeLine(true)
  }

  reverse() {
    this.timeline?.reverse()
  }
}
