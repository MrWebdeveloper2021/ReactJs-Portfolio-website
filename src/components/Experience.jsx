import React from 'react'
import ExperienceCard from './ExperienceCard'
import html from '../assets/html.png'
import css from '../assets/css.png'
import Javascript from '../assets/Javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import github from '../assets/github.png'


const Experience = () => {
  
  return (
    <>
    <div className='experience py-12 lg:p-16'>

        <h1 className='text-4xl  inline text-white ml-8 mt-24' style={{marginBottom:"550px"}}>Experience</h1>
        <div className="card w-full grid md:pt-4  p-8 grid-cols-2 sm:grid-cols-3 text-center gap-4 py-8">
          <ExperienceCard tittle='HTML' img={html} />
          <ExperienceCard tittle='CSS' img={css} />
          <ExperienceCard tittle='Javascript' img={Javascript} />
          <ExperienceCard tittle='Tailwind css' img={tailwind} />
          <ExperienceCard tittle='React' img={react} />
          <ExperienceCard tittle='GitHub' img={github} />
        </div>
    </div>
    </>
  )
}

export default Experience