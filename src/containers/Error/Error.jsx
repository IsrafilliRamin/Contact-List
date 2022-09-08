import React from 'react'
import './fayl.scss'
import imageError from '../../assets/images/pngtree-system-error-red-with-sad-face-picture-image_1594582.jpg'
const Error = () => {
  return (
    <div >
      <img className='error' src={imageError} alt="error" />
    </div>
  )
}

export default Error