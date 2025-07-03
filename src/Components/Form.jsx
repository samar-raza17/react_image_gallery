import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import Footer from './Footer'
import{
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  auth,
  getStorage,
  ref,
  uploadBytes ,
  getDownloadURL,
  storage,
  getFirestore,
  collection,
  addDoc,
  db,
  getDocs,
  signOut
} from '../FireBase/firebase'

const Form = () => {
    const [islogged, setIsLogged] = useState(true)
    const handleLogged = () => {
      setIsLogged(!islogged)
    }
  return (
    <>
    {!sessionStorage.getItem('logged') ? islogged ? <Login toggle={handleLogged}/> : <Signup toggle={handleLogged}/> : <section className='w-full h-[85vh] flex flex-col justify-center items-center text-center'><h3 className='font-medium text-2xl'>Your're Already Logged In</h3>
    <h3 style={{lineHeight: '50px'}}  className='font-medium text-2xl mt-3'>"{sessionStorage.getItem('user_name')}" Want to be <button className='border py-2 px-5 bg-gray-900 text-white rounded-md active:scale-[0.9]' onClick={() => {
      sessionStorage.removeItem('logged')
      sessionStorage.removeItem('user_name')
      sessionStorage.removeItem('user_email')
      sessionStorage.removeItem('image-url')
      location.reload()
    }}>logout?</button></h3>
    </section>}
    <Footer/>
    </>
  )
}

export default Form