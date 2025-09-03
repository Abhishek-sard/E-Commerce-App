import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="d-flex">

        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis veniam sit atque, qui nostrum saepe, earum aspernatur voluptas, accusantium in vitae eligendi est architecto amet ipsam mollitia at dolore sed.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odit laborum quasi vero voluptate expedita quod alias provident nam dolore, quaerat fugit rerum eligendi asperiores quam? Officia atque deserunt explicabo?</p>
        <b className="text-gray-800">Our Mission</b>
        <p>Our mission at forever is to empower customer with choice, convenience, and Lorem ipsum dolor sit, amet consectetur adipisicing elit. At modi incidunt aliquam! Veniam quibusdam asperiores iusto unde fugit voluptatum sapiente, veritatis velit dignissimos incidunt deserunt sed sit deleniti saepe? Quisquam.</p>

      </div>
      <div className="text-4xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className="text-gray-600 flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>:Quality Assurance:</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error asperiores veniam ipsa nobis ipsum excepturi accusantium ullam, officia rem quia totam iure suscipit expedita laudantium eligendi voluptates ut earum dolor.</p>
        </div>
        <div className=" text-gray-600 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error asperiores veniam ipsa nobis ipsum excepturi accusantium ullam, officia rem quia totam iure suscipit expedita laudantium eligendi voluptates ut earum dolor.</p>
        </div>
        <div className="text-gray-600 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error asperiores veniam ipsa nobis ipsum excepturi accusantium ullam, officia rem quia totam iure suscipit expedita laudantium eligendi voluptates ut earum dolor.</p>
        </div>
      </div>
      <NewsLetterBox />

    </div>
  )
}

export default About
