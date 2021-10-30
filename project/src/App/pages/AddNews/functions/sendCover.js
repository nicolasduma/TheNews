import { useState } from 'react'

import Resizer from 'react-image-file-resizer'

const resizeFile = file =>
  new Promise(resolve => {
    Resizer.imageFileResizer(file, 850, 566 + 2 / 3, 'JPEG', 100, 0, uri => resolve(uri), 'base64')
  })

const sendCover = async file => {
  try {
    console.log(file)
    console.log(await resizeFile(file))
  } catch (error) {
    console.log(error)
  }
}

export const Image = () => {
  const [srcImage, setSrcImage] = useState('')

  return <img src={srcImage}></img>
}

export default sendCover
