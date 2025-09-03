import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Header Section */}
      <div className="text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      
      {/* Main Content Section */}
      <div className="my-10 flex flex-col md:flex-row gap-10 items-center">
        <img 
          className='w-full md:max-w-[450px] rounded-lg shadow-md' 
          src={assets.about_img} 
          alt="About our company" 
        />
        
        <div className="flex flex-col gap-6">
          <p className="text-gray-700 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis veniam sit atque, 
            qui nostrum saepe, earum aspernatur voluptas, accusantium in vitae eligendi est 
            architecto amet ipsam mollitia at dolore sed.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odit laborum 
            quasi vero voluptate expedita quod alias provident nam dolore, quaerat fugit rerum 
            eligendi asperiores quam? Officia atque deserunt explicabo?
          </p>
          
          <div className="mt-4">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission at forever is to empower customer with choice, convenience, and 
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At modi incidunt aliquam! 
              Veniam quibusdam asperiores iusto unde fugit voluptatum sapiente, veritatis velit 
              dignissimos incidunt deserunt sed sit deleniti saepe? Quisquam.
            </p>
          </div>
        </div>
      </div>
      
      {/* Why Choose Us Section */}
      <div className="text-center py-8">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="border rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Quality Assurance</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error asperiores veniam 
            ipsa nobis ipsum excepturi accusantium ullam, officia rem quia totam iure suscipit 
            expedita laudantium eligendi voluptates ut earum dolor.
          </p>
        </div>
        
        <div className="border rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Convenience</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error asperiores veniam 
            ipsa nobis ipsum excepturi accusantium ullam, officia rem quia totam iure suscipit 
            expedita laudantium eligendi voluptates ut earum dolor.
          </p>
        </div>
        
        <div className="border rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Exceptional Customer Service</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error asperiores veniam 
            ipsa nobis ipsum excepturi accusantium ullam, officia rem quia totam iure suscipit 
            expedita laudantium eligendi voluptates ut earum dolor.
          </p>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <NewsLetterBox />
    </div>
  )
}

export default About