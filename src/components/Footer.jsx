import React from 'react'
import logo from '../assets/pf.png'
import { AiFillGithub,AiFillLinkedin,AiOutlineMail
} from 'react-icons/all';

const Footer = () => {
  return (
    <>
    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <img src={logo} style={{ width: "150px" }} alt="" />
    </a>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 develop by Zubair Akram
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href="https://github.com/MrWebdeveloper2021" rel="noopener noreferrer" target="_blank" className='text-white text-2xl'>
      <AiFillGithub/>
      </a >
      <a href="https://www.linkedin.com/in/zubair-akram-71674a160/" rel="noopener noreferrer" target="_blank" className='text-white text-2xl'>
      <AiFillLinkedin/>
      </a>
      <a href="https://mail.google.com/mail" rel="noopener noreferrer" target="_blank" className='text-white text-2xl'>
      <AiOutlineMail/>
      </a>

    </span>
  </div>
</footer>

    </>
  )
}

export default Footer