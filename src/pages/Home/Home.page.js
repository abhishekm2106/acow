import React, { useContext } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../../firebase';
import { Fade, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Home.style.scss'
import { userContext } from '../../context/userContext';
import { BsPlusLg } from 'react-icons/bs';
import { RiUser3Fill } from 'react-icons/ri';


function Homepage() {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  const activities = [
    {
      title: "Bike Riding",
      description: "Lorem ipsum dolcoctetur sicing elit Cres.",
      image: "https://cdn.dribbble.com/users/39609/screenshots/6441636/dan-lehman_valiant-moto-illustration_v2_4x.jpg?compress=1&resize=1600x1200&vertical=top",
      count: "5"
    },
    {
      title: "Cricket Club",
      description: "Lorem ipsum dolcoctetur sicing elit Cres.",
      image: "https://cdn.dribbble.com/users/583305/screenshots/4593282/media/4fde0b91f703699cd4f3921d673c67eb.jpg?compress=1&resize=800x600&vertical=top",
      count: "4"
    },
    {
      title: "Clubbing",
      description: "Lorem ipsum dolcoctetur sicing elit Cres.",
      image: "https://cdn.dribbble.com/users/902546/screenshots/11519788/media/1a482f6e3a615276f2d1a6e8f98559ed.png?compress=1&resize=1600x1200&vertical=top",
      count: "2"
    },
    {
      title: "Trecking",
      description: "Lorem ipsum dolcoctetur sicing elit Cres.",
      image: "https://media.istockphoto.com/id/1248476626/vector/travelers-man-and-woman-with-backpack-standing-of-mountain-and-looking-sunrise-over-the-sea.jpg?s=612x612&w=0&k=20&c=OvgwI774Kh5mUjds0faJEFsm35NEr_b9DzCGWUC-8Ow=",
      count: "8"
    },
    {
      title: "Camping",
      description: "Lorem ipsum dolcoctetur sicing elit Cres.",
      image: "https://cdn.dribbble.com/users/992274/screenshots/15736555/media/27e42133793e21bac56c73ce156df4c9.jpg",
      count: "3"
    },
    {
      title: "Outstation Trip",
      description: "Lorem ipsum dolcoctetur sicing elit Cres.",
      image: "https://cdn.dribbble.com/users/3320958/screenshots/17947328/media/74161022f945c7cf79b5b27e2138d6b9.jpg?compress=1&resize=1600x1200&vertical=top",
      count: "8"
    },
    {
      title: "Music & Live Events",
      description: "Lorem ipsum dolcoctetur sicing elit Cres.",
      image: "https://cdn.dribbble.com/users/1623414/screenshots/15719962/media/ec19dc284d6cb7052321ac0b9814cf72.png?compress=1&resize=1600x1200&vertical=top",
      count: "14"
    },
    {
      title: "Others",
      description: "Lorem ipsum dolcoctetur sicing elit Cres.",
      image: "https://cdn.dribbble.com/users/63407/screenshots/14775503/media/6e4983d3fdbf4b410257be14d00d00e9.png?compress=1&resize=800x600&vertical=top",
      count: "1"
    },


  ]

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

      <div>
        <button className="flex items-center bg-c-blue border-solid border-white border-2 my-8  ml-auto"><BsPlusLg /><span className='ml-1 text-2xl'>add my chill plan</span></button>
        <div className="flex justify-between items-center flex-wrap">
          {
            activities.map(item => (
              <div className='card flex flex-col justify-end' style={{ background: `linear-gradient(to top, #3f0082, #ffffff00), url(${item.image}) no-repeat top center`, backgroundSize: 'cover' }}>
                <div className='flex justify-between items-end' >
                  <div>
                    <h3 className="text-3xl">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className='flex items-center text-2xl'>
                    <RiUser3Fill /><span className='text-3xl'>{item.count}</span>
                  </div>
                </div>
              </div>
            ))
          }




        </div>
      </div>
    </div >
  )
}

export default Homepage