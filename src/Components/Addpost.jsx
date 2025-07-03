import React, { useState } from 'react'
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

const Addpost = ({toggle}) => {

  const [getPost, setGetPost] = useState(null)
  const [isLoad, setIsLoad] = useState(false)

  const postCollection = collection(db, 'all_posts')

  const newPost = async(e) => {
    setIsLoad(true)
   if(getPost && getPost.type.startsWith('image/')){
    e.target.disable = true
    const storageRef = ref(storage, `${sessionStorage.getItem('user_email')}/${getPost.name}`);
    uploadBytes(storageRef, getPost).then((snapshot) => {
      getDownloadURL(storageRef)
  .then(async(url) => {
    try {
      const docRef = await addDoc(postCollection, {
        userName: sessionStorage.getItem('user_name'),
        userEmail: sessionStorage.getItem('user_email'),
        url,
        user_image: sessionStorage.getItem('image_url'),
        date: new Date().toLocaleDateString()
      });
    setIsLoad(false)
    e.target.disable = false
      toggle(false)
      location.reload()
    } catch (e) {
    e.target.disable = false
    setIsLoad(false)
    }
  }).catch(err => {
    Swal.fire(err)
    e.target.disable = false
    setIsLoad(false)
  })
    });
   }else{
    Swal.fire('Invalid Image')
    setIsLoad(false)
    e.target.disable = false
   }

  }

  return (
    <>
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md border border-2" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
        }}>
          {isLoad&&<div className='loader'></div>}
  <h1 className="text-2xl font-bold mb-6 text-center">Upload Your New Post</h1>
  <div className="space-y-4">
    <div>
      <label
        htmlFor="file-upload"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Choose an image
      </label>
      <input
        type="file"
        id="file-upload"
        name="file-upload"
        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        onChange={(e) => {
          const file = e.target.files[0];
          setGetPost(file)
        }}
      />
    </div>
    <div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:dark:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={newPost}
      >
        Submit
      </button>
      <i className="fa-solid fa-xmark bg-red-600 text-white w-7 h-7 flex justify-center items-center rounded-full cursor-pointer" style={{
        position: 'absolute',
        top: '5px',
        right: '5px'
      }}
      onClick={toggle}
      ></i>
    </div>
  </div>
</div>

    </>
  )
}

export default Addpost