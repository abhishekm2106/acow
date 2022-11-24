import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../../firebase';
import { Fade, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Home.style.scss'

function Homepage() {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  return (
    <div className=' bg-c-black text-white min-h-screen p-8 '>
      <header className='mb-4 flex justify-between items-center px-1'>
        <h1 className='text-5xl' style={{ fontFamily: 'Nabla' }}>ACOW</h1>
        <div>
          <div className='profile'></div>
          <button className=' border-solid border-c-blue border-2' onClick={() => { signOut(auth) }}>signout</button>
        </div>

      </header>

      <Fade className=' border-r-2 px-2' duration={400}>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${images[0]})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${images[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${images[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Homepage