import React, { useState } from 'react'
import { Fade, Slide } from 'react-slideshow-image';
import { BsPlusLg } from 'react-icons/bs';
import { RiUser3Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './Dashboard.style.scss'

function Dashboardpage() {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

    const activities = [
        {
            id: "1",
            route: "bikeriding",
            title: "Bike Riding",
            description: "Lorem ipsum dolcoctetur sicing elit Cres.",
            image: "https://cdn.dribbble.com/users/39609/screenshots/6441636/dan-lehman_valiant-moto-illustration_v2_4x.jpg?compress=1&resize=1600x1200&vertical=top",
            count: "5"
        },
        {
            id: "2",
            route: "cricket",
            title: "Cricket Club",
            description: "Lorem ipsum dolcoctetur sicing elit Cres.",
            image: "https://cdn.dribbble.com/users/583305/screenshots/4593282/media/4fde0b91f703699cd4f3921d673c67eb.jpg?compress=1&resize=800x600&vertical=top",
            count: "4"
        },
        {
            id: "3",
            route: "clubbing",
            title: "Clubbing",
            description: "Lorem ipsum dolcoctetur sicing elit Cres.",
            image: "https://cdn.dribbble.com/users/902546/screenshots/11519788/media/1a482f6e3a615276f2d1a6e8f98559ed.png?compress=1&resize=1600x1200&vertical=top",
            count: "2"
        },
        {
            id: "4",
            route: "trecking",
            title: "Trecking",
            description: "Lorem ipsum dolcoctetur sicing elit Cres.",
            image: "https://media.istockphoto.com/id/1248476626/vector/travelers-man-and-woman-with-backpack-standing-of-mountain-and-looking-sunrise-over-the-sea.jpg?s=612x612&w=0&k=20&c=OvgwI774Kh5mUjds0faJEFsm35NEr_b9DzCGWUC-8Ow=",
            count: "8"
        },
        {
            id: "5",
            route: "camping",
            title: "Camping",
            description: "Lorem ipsum dolcoctetur sicing elit Cres.",
            image: "https://cdn.dribbble.com/users/992274/screenshots/15736555/media/27e42133793e21bac56c73ce156df4c9.jpg",
            count: "3"
        },
        {
            id: "6",
            route: "outstationtrip",
            title: "Outstation Trip",
            description: "Lorem ipsum dolcoctetur sicing elit Cres.",
            image: "https://cdn.dribbble.com/users/3320958/screenshots/17947328/media/74161022f945c7cf79b5b27e2138d6b9.jpg?compress=1&resize=1600x1200&vertical=top",
            count: "8"
        },
        {
            id: "7",
            route: "liveevent",
            title: "Music & Live Events",
            description: "Lorem ipsum dolcoctetur sicing elit Cres.",
            image: "https://cdn.dribbble.com/users/1623414/screenshots/15719962/media/ec19dc284d6cb7052321ac0b9814cf72.png?compress=1&resize=1600x1200&vertical=top",
            count: "14"
        },
        {
            id: "8",
            route: "others",
            title: "Others",
            description: "Lorem ipsum dolcoctetur sicing elit Cres.",
            image: "https://cdn.dribbble.com/users/63407/screenshots/14775503/media/6e4983d3fdbf4b410257be14d00d00e9.png?compress=1&resize=800x600&vertical=top",
            count: "1"
        },


    ]

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#4628D7',
            width: '30rem',
            color: 'white',
            zIndex: '100'
        },
    };

    const onSubmit = () => {
        console.log("done")
    }
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [formTitle, setFormTitle] = useState("")
    return (
        <>
            {/* <Fade className=' border-r-2 px-2 slider' duration={2000}>
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
            </Fade> */}

            <div>
                <div className='flex justify-end w-full'>
                    <button className="flex items-center bg-c-black border-solid border-white border-2 my-8  ml-3" onClick={openModal}><BsPlusLg /><span className='ml-1 text-2xl'>add team activities</span></button>
                    <button className="flex items-center bg-white text-c-blue border-solid border-white border-2 my-8  ml-3" onClick={openModal}><BsPlusLg /><span className='ml-1 text-2xl'>add HR activities</span></button>
                    <button className="flex items-center bg-c-blue border-solid border-white border-2 my-8  ml-3" onClick={openModal}><BsPlusLg /><span className='ml-1 text-2xl'>add my chill plan</span></button>
                </div>

                <Modal
                    isOpen={modalIsOpen}

                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className=' bg-c-blue w-full h-full flex flex-col'>
                        <div className='flex justify-between font-semibold text-xl'>
                            <h2 >Add Chill plan</h2>
                            <button className='p-0' onClick={closeModal}>X</button>
                        </div>


                        <form>

                            <div className='mt-2'>

                                <select className='text-black' id='lll'>
                                    <option value="actual value 1">Select Category</option>
                                    {
                                        activities.map(item => (
                                            <option value="actual value 2">{item.title}</option>
                                        ))
                                    }


                                </select>
                            </div>
                            <div>Where do u plan to Go.</div>
                            <input className='  w-full' type="text" />

                            <div className=' my-2'>
                                <label className=' mr-2' for="birthday">when do u plan to go : </label>
                                <input type="date" />
                            </div>
                            <button onClick={(e) => { e.preventDefault(); closeModal() }} className=' mx-auto border-white border-solid border-2'>Submit</button>
                        </form>

                    </div>


                </Modal>
                <div className="flex justify-between items-center flex-wrap">
                    {
                        activities.map(item => (
                            <Link to={`activities/${item.route}`} key={item.id} className='card flex flex-col justify-end' style={{ background: `linear-gradient(to top, #3f0082, #ffffff00), url(${item.image}) no-repeat top center`, backgroundSize: 'cover' }}>
                                <div className='flex justify-between items-end' >
                                    <div>
                                        <h3 className="text-3xl">{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className='flex items-center text-2xl'>
                                        <RiUser3Fill /><span className='text-3xl'>{item.count}</span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }

                </div>
            </div >

        </>
    )
}

export default Dashboardpage