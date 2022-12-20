import React from 'react'
import zubair from '../assets/zubi.png'
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import zcv from '../assets/Zubair_Akram.pdf'


const Home = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    two: {
      opacity: 0,
      x: "100%",
    },
  };
  return (
    <>
    <section className="home text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
    <motion.div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col
     md:items-start md:text-left mb-16 md:mb-0 items-center text-center" whileInView={animations.whileInView}
     initial={animations.one}>
      <p className='mt-8 text-green-500'>My Name is</p>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Zubair Akrma</h1>
      <h3 className="mb-8 leading-relaxed text-4xl text-yellow-600">
      <Typewriter
            options={{
              strings: ["A Front-end JS Developer", "A website Designer"],
          
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
      </h3>
      <div className="flex justify-center">
        <a href={zcv}  download="Zubair_Akram.pdf">
        <button className="inline-flex text-black mt-6 bg-yellow-500 border-0 py-2 px-6 lg:mt-2 focus:outline-none hover:bg-green-500 hover:text-white rounded text-lg">CV Download</button>
        </a>
        
      
      </div>
    </motion.div>
    <motion.div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  mt-10" whileInView={animations.whileInView}
        initial={animations.one}>
      <img className="object-cover object-center rounded" alt="hero" src={zubair} />
    </motion.div>
    
  </div>
</section>
    
    </>
  )
}

export default Home