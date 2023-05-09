/* eslint-disable max-len */
/**
 * convert the image to a data URI
 */
export const imageToDataUri: (url: string) => Promise<string> = (url) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest()
  xhr.onload = () => {
    const reader = new FileReader()
    reader.onloadend = () => {
      resolve(reader.result as string)
    }
    reader.readAsDataURL(xhr.response)
  }
  xhr.onerror = (e) => {
    console.error('An error occurred while transferring the image.', e)
    reject(e)
  }
  xhr.open('GET', url)
  xhr.responseType = 'blob'
  xhr.send()
})
