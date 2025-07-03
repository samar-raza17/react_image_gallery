import React, { useState } from 'react'
import Openmodal from './Openmodal';

const Ownpost = ({image, alt}) => {
  const [isModal, setIsModal] = useState(false);
  const [getModalImage, setGetModalImage] = useState(null);

  const openModal = () => {
    setIsModal(!isModal)
  }
  return (
    <>
    <div style={{
      width: '230px',
      height: '230px',
      border: '1px solid #111',
      padding: '2px',
      overflow: 'hidden' ,
      cursor
      : 'pointer'
      }}
      onClick={(e) => {
        setGetModalImage(e.target.src)
        openModal()
      }}
      >
        <img src={image} alt={alt} style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
           objectPosition: 'center'
        }} />
      </div>
      {isModal&&<Openmodal image={getModalImage} toggle={openModal}/>}
    </>
  )
}

export default Ownpost