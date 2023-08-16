
const Header = () => {
  return (
    <header className="w-full md:flex justify-between px-4 items-center h-1/5 py-4">
        <div>
            <h1 className="font-bold text-2xl text-purple-700 cursor-pointer">^_^</h1>
        </div>

        <ul className="hidden md:flex gap-12">
            <li>
                <a href="#animation-one" className="font-semibold hover:text-purple-700 font-preahvihear">one</a>
            </li>
            <li>
                <a href="#animation-two" className="font-semibold hover:text-purple-700 font-preahvihear">two</a>
            </li>
            <li>
                <a href="#animation-three" className="font-semibold hover:text-purple-700 font-preahvihear">three</a>
            </li>
            <li>
                <a href="#animation-four" className="font-semibold hover:text-purple-700 font-preahvihear">four</a>
            </li>
        </ul>
    </header>
  )
}

export default Header