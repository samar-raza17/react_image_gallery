import React, { useState } from 'react'
import '../App.css'
import Openmodal from './Openmodal'

const Homepost = ({image, userName, userImage, date}) => {

  const [isModal, setIsModal] = useState(false);
  const [getModalImage, setGetModalImage] = useState(null);

  const openModal = () => {
    setIsModal(!isModal)
  }

  return (
    <>
    <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden homePost"  data-aos="fade-righgit ">
  {/* Header */}
  <div className="flex items-center p-4 border-b border-gray-300">
    <img
      src={userImage}
      alt="User Image"
      className="w-12 h-12 rounded-full object-cover mr-3"
    />
    <div>
      <p className="font-semibold text-white">{userName}</p>
      <p className="text-gray-50 text-sm">{date}</p>
    </div>
  </div>
  {/* Body */}
  <img
    src={image}
    alt={`${userName}/Post`}
    className="w-full h-[500px] object-cover cursor-pointer"
    onClick={(e) => {
      setGetModalImage(e.target.src)
      openModal()
    }}
    />
</div>
{isModal &&<Openmodal toggle={openModal} image={getModalImage}/>}
    </>
  )
}

export default Homepost