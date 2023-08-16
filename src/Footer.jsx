

const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <footer className="w-full h-1/4 bg-purple-700 flex items-center justify-center p-4">
        <p className="font-preahvihear text-xl text-white">Copyright&copy; 2022-{year}</p>
    </footer>
  )
}

export default Footer