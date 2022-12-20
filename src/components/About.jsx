import React from 'react'
import zubair from '../assets/zubair.jpeg'
import { motion } from "framer-motion";


const About = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "100%",
    },
  };
  return (
    
    <>
    {/* <div className="max-w-[1000px] mx-auto"> */}

    <section className="about text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center" >
    <motion.div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10" whileInView={animations.whileInView}
          initial={animations.one}>
      <h1 className='text-white text-4xl mb-4'>About</h1>
      <img className="object-cover object-center rounded" alt="hero" style={{height:'400px', width:"500px"}} src={zubair}/>
    </motion.div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center pt-6">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Who i Am
  
      </h1>
      <p className="mb-8 leading-relaxed">I hanve send the last 1 year in the fornt end website development feild.I have always had a knack for technologies and working with computer.in 2021. I start wortking with HTML and CSS to make some minor edits on a small business website that i was operating.I started a learning Javascript and was even more enthused with making website interactive. i am now spedning my time building project with React js. and Leading new Technologies.</p>
    </div>
  </div>
</section>
    </>
  )
}

export default About