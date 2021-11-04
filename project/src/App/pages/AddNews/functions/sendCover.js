import Resizer from 'react-image-file-resizer'
import { addCover } from '../../../services/news/add'

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

function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], filename, { type: mime })
}

const sendCover = async (file, nameFile) => {
  try {
    const newFile = await resizeFile(file)
    const image = dataURLtoFile(newFile, `${nameFile}.JPG`)

    addCover(image)
  } catch (error) {
    console.log(error)
  }
}

export default sendCover
