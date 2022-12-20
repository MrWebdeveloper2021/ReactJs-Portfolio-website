import React from 'react'
import crypto from '../assets/zubair-crypto.jpg'
import RDG from '../assets/RDG.jpg'
import PLS from '../assets/PLS.jpg'
import TCL from '../assets/TCL.jpg'
import Workcard from './Workcard'

const Work = () => {
  return (
    <>
    <div className='container px-5 py-24 mx-auto'>
    <h1 className='text-white text-4xl ml-4'>Work</h1>
    
      <div className="work container gap-4 p-6 grid md:grid-cols-2 mx-auto lg:p-4">
        <Workcard img={crypto} applink='https://livecryptoupdate.netlify.app/' glink='https://github.com/MrWebdeveloper2021'/>
        <Workcard img={PLS} applink='https://playstaion.netlify.app/' glink='https://github.com/MrWebdeveloper2021' />
        <Workcard img={TCL} applink='https://tipcalculater.netlify.app/' glink='https://github.com/MrWebdeveloper2021' />
        <Workcard img={RDG} applink='https://rendomdog.netlify.app/' glink='https://github.com/MrWebdeveloper2021' />
      </div>
      </div>
    </>
  )
}

export default Work