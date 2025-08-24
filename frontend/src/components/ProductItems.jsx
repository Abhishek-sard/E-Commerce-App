import React, {useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItems = ({ id, image, title, price }) => {

    const { currency } = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
        <img src={image} alt={title} className='w-full h-auto' />
        <h2 className='text-lg font-semibold'>{title}</h2>
        <p className='text-gray-600'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItems




