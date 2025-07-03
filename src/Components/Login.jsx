import React, {useState} from 'react'
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
  getDocs
} from '../FireBase/firebase'

const Login = ({toggle}) => {

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [isLoad, setIsLoad] = useState(false)

  const loginSubmitted = async(e) => {
    e.target.disabled = true
    sessionStorage.setItem('user_email', userEmail)
    const querySnapshot = await getDocs(collection(db, "user_profiles"));
    querySnapshot.forEach((doc) => {
      if(doc.data().userEmail === sessionStorage.getItem('user_email')){
        sessionStorage.setItem('user_name', doc.data().userName)
        sessionStorage.setItem('image_url', doc.data().url)
      }
    });
    setIsLoad(true)
    signInWithEmailAndPassword(auth, userEmail, userPassword)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    e.target.disabled = false
    sessionStorage.setItem('logged', true)
    location.reload()
    setIsLoad(false)
    e.target.disabled = false
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setIsLoad(false)
    Swal.fire(errorMessage)
    e.target.disabled = false
  });
  }

    return (
        <>
        <section className='border border-red-600 w-full h-[100vh] flex justify-center items-center'>
          {isLoad && <div className='loader'></div>}
        <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className='mb-3 pb-1 text-center text-2xl font-medium' style={{borderBottom: '2px solid #111'}}>LogIn your Account</h1>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-1 focus:outline-black focus:shadow-outline"
            id="email"
            type="email"
            placeholder="example@gmail.com"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-1 focus:outline-black focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className=" w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={loginSubmitted}
          >
            Log In
          </button>
        </div>
        <p className='text-center mt-2'>Don't have an <strong className='cursor-pointer' onClick={toggle}>Account?</strong></p>
      </form>
      <p className="text-center text-gray-500 text-xs">
        ©2024 Image Gallery. All rights reserved.
      </p>
    </div>
    
        </section>
        </>
      )
}

export default Login