import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-x1">

        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum perspiciatis asperiores autem, commodi modi libero consectetur sequi ratione earum doloremque temporibus. Excepturi eaque dicta error eos corrupti facilis sunt sapiente!
          </p>
        </div>
        <div>
          <p className="text-x1 font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>About Us</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
          <p className='text-x1 font-medium mb-5'>GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+977- 98111-11111</li>
            <li>info@example.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com- All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
