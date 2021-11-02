import Resizer from 'react-image-file-resizer'

const resizeFile = file =>
  new Promise(resolve => {
    Resizer.imageFileResizer(
      file,
      850,
      566 + 2 / 3,
      'JPG',
      100,
      0,
      uri => resolve(uri),
      'base64',
      850,
      566 + 2 / 3
    )
  })

const sendCover = async file => {
  try {
    const newFile = await resizeFile(file)
    console.log(newFile)
  } catch (error) {
    console.log(error)
  }
}

export default sendCover
