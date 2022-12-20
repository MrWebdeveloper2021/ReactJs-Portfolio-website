import React from 'react'
import { motion } from "framer-motion";


const Workcard = ({img,applink,glink}) => {
    const animations = {
        whileInView: {
          x: 0,
          y: 0,
          opacity: 1,
        },
        one: {
          opacity: 0,
          y: "100%",
        },
      };
  return (
    <>
     <motion.div style={{backgroundImage:`url(${img})`}}
        className='shadow-lg shadow-[#040c16]  group container rounded-md flex justify-center items-center mx-auto
        content-div sm: w-full'whileInView={animations.whileInView}
        initial={animations.one}>
            <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">

                </span>
                <div className="pt-8 text-center ">
                    <a href={glink} target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                    </button>
                    </a>
                    <a href={applink} target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                            Live
                    </button>
                    </a>
                </div>
            </div>
        </motion.div>
        
    </>
  )
}

export default Workcard