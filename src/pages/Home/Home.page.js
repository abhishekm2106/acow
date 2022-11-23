import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../../firebase';

function Homepage() {
  return (
    <div>Home.page
      <button onClick={() => { signOut(auth) }}>signout--</button>
    </div>
  )
}

export default Homepage