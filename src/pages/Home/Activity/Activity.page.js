import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Activity.style.scss'

function Activitypage() {
    const params = useParams()
    useEffect(() => {
        console.log(params)
    }, [])
    return (
        <div className='flex justify-between'>
            <section class="table-section">
                <h1 className=' text-3xl my-7'>People planning for {params.name}</h1>
                <table>
                    <tr>
                        <th class="crop-id-h">Person</th>
                        <th>Team</th>
                        <th>location</th>
                        <th>Date</th>
                        <th>Est. Exp.</th>
                    </tr>
                    <tr class="table-row">
                        <td class="crop-id">
                            <span className='pic' />
                            <span class="crop-name">Abhishek Mohanty</span>
                        </td>
                        <td>Health</td>
                        <td>GOA</td>
                        <td>13-12-2022</td>
                        <td>Rs. 10000</td>
                    </tr>



                </table>
            </section>
            <section className='chat py-9 px-5 bg-c-blue rounded-md'>
                <div className=' flex items-center'>

                    <div className=' text-2xl'> Live Chat</div>
                    <div className='live-dot ml-1'></div>
                </div>
                <div className=' bg-white rounded-md h-full px-3 flex flex-col justify-between py-2'>
                    <div className='messages h-5/6'>
                        <img src="../../../assets/chat.png" alt="" />
                    </div>
                    <input placeholder='type your message here' className=' bg-c-blue rounded-full px-4 w-full' type="text" />
                </div>
            </section>
        </div>
    )
}

export default Activitypage