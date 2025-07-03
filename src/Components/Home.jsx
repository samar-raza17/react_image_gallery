import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Homepost from './Homepost'
import '../App.css'
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
  getDocs
} from '../FireBase/firebase'
import { NavLink } from 'react-router-dom'

const Home = () => {

  const [getHomePosts, setGetHomePosts] = useState([])

  const getHomePostsFunc = async() => {
    const querySnapshot = await getDocs(collection(db, "all_posts"));
    const postArr = []
    querySnapshot.forEach((doc) => {
      postArr.push(doc.data())
    setGetHomePosts([...postArr])

});
  }
    useEffect(() => {
      getHomePostsFunc()
    }, [])

  return (
    <>
    <Navbar/>

    <section className='postArea'>
      { getHomePosts.length ?
        getHomePosts.map((data, index) => {
          return(
            <Homepost image={data.url} userName={data.userName} userImage={data.user_image} date={data.date} key={index} />
          )

        }) : <section className='w-full h-[70vh] flex justify-center items-center text-center'><h3 style={{lineHeight: '50px'}} className="font-medium text-3xl">No Posts Yet Go to <NavLink to='/profile' className='bg-black text-blue-500 py-1 px-2 rounded-md'>Profile</NavLink> & Upload your Fav Post.</h3></section>
      }
    </section>
    <Footer/>
    </>
  )
}

export default Home