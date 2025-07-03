import React from 'react'
import Footer from './Footer'

const About = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" style={{display: 'flex'}}>
        Hi There 👋
        <br/>
        Welcome to "Image Gallery"
      </h1>
      <p className="mb-8 leading-relaxed">
      Welcome to Image Gallery, a streamlined app designed to showcase and manage your visual content effortlessly. With our app, you can explore a user-friendly home page where all your images and posts are beautifully displayed. The intuitive layout ensures that browsing through your media is both enjoyable and hassle-free.

In the Profile Area, users can easily log in to access personalized features. Once logged in, you can create and manage your posts with just a few taps. Whether you’re sharing your latest snapshots or curating your favorite moments, Image Gallery makes it simple to stay organized and keep your collection fresh.

Experience the perfect blend of simplicity and functionality with Image Gallery, and take control of your visual content like never before.
      </p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded w-full"
        alt="hero"
        src="https://tse3.mm.bing.net/th?id=OIP.bxDt7btKUoBa9Os9ThwOpQHaHa&pid=Api&P=0&h=220"/>
    </div>
  </div>
</section>
<Footer/>

    </>
  )
}

export default About