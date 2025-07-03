import React, { useState } from 'react'
import '../App.css'
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
  db
} from '../FireBase/firebase'

const Signup = ({toggle}) => {

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userProfile, setUserProfile] = useState(null)
  const [isLoad, setIsLoad] = useState(false)


  const usersProfilesCollection = collection(db, 'user_profiles')

  const signUpSubmitted = (e) => {
    e.target.disabled = true
    setIsLoad(true)
    setTimeout(() => {
      if(userName.trim().length > 3){
        if(userProfile && userProfile.type.startsWith('image/')){
          e.target.disabled = true
          createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        const storageRef = ref(storage, `${userEmail}/${userProfile.name}`);
        uploadBytes(storageRef, userProfile).then((snapshot) => {
          getDownloadURL(storageRef)
        .then(async(url) => {
          try {
            const docRef = await addDoc(usersProfilesCollection, {
              userName,
              userEmail,
              url
            });
            sessionStorage.setItem('user_email', userEmail)
          e.target.disabled = false
          } catch (e) {
          e.target.disabled = false 
          }
        }).catch(err => {
          e.target.disabled = false
          Swal.fire(err)
          })
        });

        toggle(true)
      setIsLoad(false)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire(errorMessage)
        e.target.disabled = false
      setIsLoad(false)
        // ..
      });
      setIsLoad(false)
      
        }else{
          Swal.fire('Invalid Profile Pic')
          setIsLoad(false)
        }
      }else{
        Swal.fire('User Name length (Minimum 3 Characters)')
      setIsLoad(false)
    e.target.disabled = false
      }
    }, 1200)
  }

  return (
    <>
    <section className='border border-red-600 w-full h-[100vh] flex justify-center items-center'>
    <div className="w-full max-w-xs" style={{position: 'relative'}}>
      {isLoad && <div className="loader"></div>}
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h1 className='mb-3 pb-1 text-center text-2xl font-medium' style={{borderBottom: '2px solid #111'}}>Create New Account</h1>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="username"
      >
        Username
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-black focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
    </div>
    <div className="mb-2">
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
    <div className="mb-2">
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
    <div className='mb-2'>
      <label
        htmlFor="file-upload"
        className="block text-sm font-medium text-gray-700 mb-2"
        >
        Choose an image (Profile Pic)
      </label>
      <input
        type="file"
        id="user-profile"
        name="file-upload"
        onChange={(e) => {
          const file = e.target.files[0];
          setUserProfile(file)
        }}
        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
    <div className="flex items-center justify-center">
      <button
        className=" w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={signUpSubmitted}
      >
        Sign Up
      </button>
    </div>
    <p className='text-center mt-2'>Have an already <strong className='cursor-pointer' onClick={toggle}>Account?</strong></p>
  </form>
  <p className="text-center text-gray-500 text-xs">
    ©2024 Image Gallery. All rights reserved.
  </p>
</div>

    </section>
    </>
  )
}

export default Signup