import { FaGithub, FaTwitter } from 'react-icons/fa'
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';

const Content = () => {
  return (
    <main className="w-full">
        <div className="h-[80%] p-2 w-full pt-48 py-4 px-4">
            <h1 className="text-7xl font-bold font-poppins w-1/2 md:w-4/5">Animation Examples</h1>
            <p className="md:w-4/5 font-semibold text-xl pt-4 font-preahvihear">This site was made by <code>Eric</code>, that is also me. All examples were created to test my knowledge on animations.... I really hope I can complete this site.</p>
            <p className="md:w-4/5 font-semibold text-xl pt-4 pb-4 font-preahvihear">Thanks for visiting <span className='text-3xl font-bold text-purple-700'>^_^</span></p>
            <p className='md:w-4/5 font-semibold text-xl pt-4 pb-4 font-preahvihear'><em className='text-red-600'>Caution:</em> This site is going to be slow if your device computational abilities are low... I mean if you do not have a very fast chipset, RAM, memory or your GPU is low.. It made my device hang so bad...I will probably get a new one when I am rich... Well VantaJS site said not to use more than one for a site and I went ahead and used four(4)!!! Oh my 4!!</p>

            <div id="icons" className="flex justify-center items-center gap-8 pt-6 pb-6">
                <a href='https://github.com/thamesblanq' target='_blank' rel="noreferrer"><FaGithub className='text-4xl text-purple-700 font-bold hover:text-black'/></a>
                <a href='https://twitter.com/lyfof_thames' target='_blank' rel='noreferrer'><FaTwitter className='text-4xl font-bold hover:text-blue-400 text-purple-700'/></a>
            </div>
        </div>

        <div className='w-full flex items-center justify-center'>
            <h1 className='font-bold text-2xl font-poppins p-4'>Projects</h1>
        </div>

        <div className='wrapper bg-black'>
            <One />
            <Two />
            <Three />
            <Four />
        </div>

       

        <div className='w-full flex items-center justify-center pt-4 pb-4'>
            <h1 className='text-2xl text-purple-700 font-preahvihear '>More Effects are coming......</h1>
        </div>
       
    </main>
  )
}

export default Content