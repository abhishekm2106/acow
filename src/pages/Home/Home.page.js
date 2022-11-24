import React, { useContext } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../../firebase';
import { Fade, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Home.style.scss'
import { userContext } from '../../context/userContext';

import Dashboardpage from './Dashboard/Dashboard.page';
import Activitypage from './Activity/Activity.page';
import { Route, Routes } from 'react-router-dom';


function Homepage() {

  const { user } = useContext(userContext)
  return (

    <div className=' bg-c-black text-white min-h-screen p-8 '>
      <header className='mb-4 flex justify-between items-center px-1'>
        <h1 className='text-5xl' style={{ fontFamily: 'Nabla' }}>ACOW</h1>
        <div className='flex items-center'>
          <div className='profile mr-4' style={{ backgroundImage: `url(${user.photoURL})` }}></div>
          <button className=' border-solid border-c-blue border-2' onClick={() => { signOut(auth) }}>signout</button>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Dashboardpage />} />
        <Route path="/activities/:name" element={<h1>Hellop</h1>} />
      </Routes>
    </div >
  )
}

export default Homepage