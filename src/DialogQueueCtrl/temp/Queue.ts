/**
 * 队列
 * 包含以下个主要 api
 * - enqueue
 * - dequeue
 * - cutToFront
 * - front
 * - back
 * - isEmpty
 */
class Queue {
  constructor() {
    this.dataStore = []
  }

  dataStore: any[]

  /**
   * enqueue
   */
  public enqueue(e: any): void {
    this.dataStore.push(e)
  }

  /**
   * dequeue
   */
  public dequeue() {
    this.dataStore.shift()
  }

  /**
   * 插队到队首
   */
  public cutToFront(e: any): void {
    this.dataStore.unshift(e)
  }

  /**
   * 插队到队首后面
   */
  public cutToSecond(e: any): void {
    this.dataStore.splice(1, 0, e)
  }

  /**
   * front
   */
  public front() {
    return this.dataStore[0]
  }

  /**
   * back
   */
  public back() {
    return this.dataStore[this.dataStore.length - 1]
  }

  /**
   * empty
   */
  public isEmpty(): boolean {
    if (this.dataStore.length === 0) {
      return true
    }
    return false
  }

  /**
   * toString
   */
  public toString() {
    return this.dataStore.join(',')
  }
}

export default Queue
