import React from 'react'
import { arrowLeft } from '../constants/constant';


function CardArrow() {
  return (
    <div>
        <div className='flex items-center '>
            <img src={arrowLeft} alt='left'/> 
        </div>
    </div>
  )
}

export default CardArrow