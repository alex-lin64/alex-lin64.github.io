import React from 'react'
import SectionTitle from './SectionTitle'
import { AiFillThunderbolt } from 'react-icons/ai'


const About = () => {
  return (
    <section
      id="about"
      className='max-w-containerSmall mx-auto py-10 lgl:py32 flex flex-col gap-8'
    >
      <SectionTitle title="About Me" titleNo="01"/>
      <div className='flex flex-col lgl:flex-row gap-16'>
        <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex 
          flex-col gap-4'
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia architecto pariatur, perferendis a ducimus fuga error impedit suscipit ea adipisci saepe modi cupiditate sed? Officiis nostrum reiciendis placeat quas atque?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum soluta voluptatum quos pariatur dolorem obcaecati vel id. Tenetur alias excepturi ad doloribus cupiditate perferendis repellendus cum laboriosam eaque iste!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis distinctio provident ad adipisci architecto magnam corporis neque, eos optio nemo sapiente officiis modi, sit assumenda a, eligendi perferendis est facere.
          </p>
          <p>Here are the technologies I have been working with: </p>
          <ul className='make-w-[450px] text-med font-titleFont grid grid-cols-2 grap-2 mt-6'>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'><AiFillThunderbolt /></span>
              MongoDB
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'><AiFillThunderbolt /></span>
              Express.js
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'><AiFillThunderbolt /></span>
              React
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'><AiFillThunderbolt /></span>
              Next.js
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'><AiFillThunderbolt /></span>
              Tailwindcss
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'><AiFillThunderbolt /></span>
              Typescript
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'><AiFillThunderbolt /></span>
              Pytorch
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'><AiFillThunderbolt /></span>
              Tensorflow Keras
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'><AiFillThunderbolt /></span>
              Go
            </li>
            <li className='flex items-center gap-2'>
              <span className='text-textGreen'><AiFillThunderbolt /></span>
              Wireshark
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default About