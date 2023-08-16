import { useEffect } from 'react'
import RINGS from 'vanta/src/vanta.rings';


const Four = () => {
    useEffect(() => {
        RINGS({
            el: '#animation-four',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x9ed75d
        })
    }, [])


  return (
    <>
        <div id='animation-four' className='w-full h-screen relative'>
            <div className='absolute left-4 bottom-4 w-4/5'>
                <h1 className='text-5xl md:text-7xl text-white font-semibold font-poppins'>Animation Four</h1>
                <p className='font-semibold text-xl text-white font-preahvihear'>This is the fourth animation</p>
                <p className='text-sm font-preahvihear text-white'>React, Vantajs</p>
            </div>
           
        </div>
    </>
  )
}

export default Four