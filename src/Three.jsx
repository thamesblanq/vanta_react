import { useEffect } from 'react'
import NET from 'vanta/src/vanta.net';


const Three = () => {
    useEffect(() => {
        NET({
            el: '#animation-three',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xc5a7b1,
            backgroundColor: 0x15353c,
            maxDistance: 22.00,
            spacing: 17.00
        })
    }, [])


  return (
    <>
        <div id='animation-three' className='w-full h-screen relative mb-6'>
            <div className='absolute left-4 bottom-4 w-4/5'>
                <h1 className='text-5xl md:text-7xl text-white font-semibold font-poppins'>Animation Three</h1>
                <p className='font-semibold text-xl text-white font-preahvihear'>This is the third animation</p>
                <p className='text-sm font-preahvihear text-white'>React, Vantajs</p>
            </div>
           
        </div>
    </>
  )
}

export default Three