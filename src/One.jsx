import { useEffect } from 'react'
import CLOUDS from 'vanta/src/vanta.clouds'


const One = () => {
    useEffect(() => {
        CLOUDS({
            el: '#animation-one',
            speed: 0.1,
            mouseControls: true,
            touchControls: true,
            gyroControls: false
        })
    }, [])


  return (
    <>
        <div id='animation-one' className='w-full h-screen relative mb-6'>
            <div className='absolute left-4 bottom-4 w-4/5'>
                <h1 className='text-5xl md:text-7xl text-white font-semibold font-poppins'>Animation One</h1>
                <p className='font-semibold text-xl text-white font-preahvihear'>This is the first animation</p>
                <p className='text-sm font-preahvihear text-white'>React, Vantajs</p>
            </div>
           
        </div>
    </>
  )
}

export default One