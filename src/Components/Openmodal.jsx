import React from 'react'
import '../App.css'

const Openmodal = ({toggle, image}) => {
  return (
    <>
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center modal">
  <div className="relative bg-gray-900 p-4 rounded-lg w-full max-w-screen-lg h-auto">
    <img
      src={image}
      alt="Sample Image"
      className="w-1/2 mx-auto block min-h-[100px]"
    />
    <i className="fa-solid fa-xmark text-white w-7 h-7 bg-red-600 flex justify-center items-center rounded-full absolute top-3 right-3 cursor-pointer" onClick={toggle}></i>
  </div>
</div>
    </>
  )
}

export default Openmodal