import React, { useEffect, useState } from 'react'
import '../User.css'
import Addpost from './Addpost'
import Ownpost from './Ownpost'
import Footer from './Footer'
import {NavLink} from 'react-router-dom'
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

const Profile = () => {
  const [newPostArea, setNewPostArea] = useState(false)
  const [getOwnPosts, setGetOwnPosts] = useState([])



  const getOwnPostsFunc = async() => {
    const querySnapshot = await getDocs(collection(db, "all_posts"));
    let ownPostsArr = []
    querySnapshot.forEach((doc) => {
      if(doc.data().userEmail == sessionStorage.getItem('user_email')){
    ownPostsArr.push(doc.data())
    console.log(ownPostsArr);

  }
  setGetOwnPosts([...ownPostsArr])
});
  }
  useEffect(() => {
    getOwnPostsFunc()
  }, [])

  const handleNewPostArea = () => {
    setNewPostArea(!newPostArea)
  }


  return (
    <>
    {
    sessionStorage.getItem('logged') ? <div className="usrePost-Area">
    <div className="profile-area">
      <header>
        <img src={sessionStorage.getItem('image_url')} className="w[22px] h-24 rounded-full border border-1 border-black p-1" />
        <h2 className='text-[26px]  dark:text-black-900'>{sessionStorage.getItem('user_name')}</h2>
        <button className='bg-gray-900 py-2 px-5 text-white add-post font-medium' onClick={handleNewPostArea}>+ Add new post</button>
      </header>
    <div className="profile-body w-full">
      {
        getOwnPosts.map((data, index) => {
          return(
            <Ownpost image={data.url} alt={`${data.email}/Post`} key={index}/>
          )
        })
      }
    </div>
    </div>
  {newPostArea && <Addpost toggle={handleNewPostArea} />}
  </div> : <section className='w-full h-[85vh] flex justify-center items-center text-center'><h3 style={{lineHeight: '50px'}}  className="font-medium text-3xl">Please goto <NavLink className='text-blue-500 bg-black py-1 px-2 rounded-md' to='/login'>LOGIN</NavLink> and LogIn your Account</h3></section>
  }
    <Footer/>
    </>
  )
}

export default Profile