import React from 'react'
import {notificationIcon } from '../constants/constant';

function CnotificationIcon() {
  return (
    <div>
        <div className='py-[10px] px-[10px]'>
        <img src={notificationIcon} alt='inbox'/>
        </div>
    </div>
  )
}

export default CnotificationIcon