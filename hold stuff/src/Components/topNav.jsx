import React from 'react'
import {userProfile, vendorWelcomeMessage } from '../constants/constant';
import {typography} from '../style';
import CinboxIcon from './inbox.jsx';
import CsearchIcon from './search.jsx';
import CnotificationIcon from './notification.jsx';

function TopNav() {
  return (
    <div className='font-inter flex flex-row flex-1 w-[100%] '>
      <div className='bg-neutrals-white-50 flex flex-1 flex-row justify-between items-center px-[16px] py-[12px]'>
        <div className='flex gap-[14px] items-center flex-1'>
          <div className='flex'>
            <img src={userProfile[0].profilePricture} alt={userProfile[0].userName} />
          </div>
          <div className='flex flex-col flex-1'>
            <h3 className={`${typography.labelLarge}`}>Hi {userProfile[0].userName}</h3>
            <h3 className={`${typography.paragraphSmall}`}>{vendorWelcomeMessage}</h3>
          </div>
        </div>
        <div className=' flex' >
        <div className='flex gap-[12px]'>
          <CsearchIcon/>
          <CnotificationIcon/>
          <CinboxIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav