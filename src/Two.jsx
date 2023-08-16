import { useEffect } from 'react'
import HALO from 'vanta/src/vanta.halo';


const Two = () => {
    useEffect(() => {
        HALO({
            el: '#animation-two',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            amplitudeFactor: 1.20,
            xOffset: 0.04,
            yOffset: 0.05,
            size: 1.10
        })
    }, [])


  return (
    <>
        <div id='animation-two' className='w-full h-screen relative mb-6'>
            <div className='absolute left-4 bottom-4 w-4/5'>
                <h1 className='text-5xl md:text-7xl text-white font-semibold font-poppins'>Animation Two</h1>
                <p className='font-semibold text-xl text-white font-preahvihear'>This is the second animation</p>
                <p className='text-sm font-preahvihear text-white'>React, Vantajs</p>
            </div>
           
        </div>
    </>
  )
}

export default Two