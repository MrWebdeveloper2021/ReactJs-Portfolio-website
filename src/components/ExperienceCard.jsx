import React from 'react'
import { motion } from "framer-motion";


const ExperienceCard = ({img,tittle}) => {
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
  };
  return (
    <>
    <motion.div className='flex flex-col justify-center text-cente' whileInView={animations.whileInView}
          initial={animations.one}>
        <div className='shadow-md shadow-[#040c16] bg-gray-500 hover:scale-95 duration-500'>
        <img className='w-32 mx-auto pt-4' src={img} alt="" />
        <p className='py-4'>{tittle}</p>
        </div>
    </motion.div>
  </>
  )
}

export default ExperienceCard