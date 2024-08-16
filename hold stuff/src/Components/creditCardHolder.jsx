import React from 'react'
import CreditCard from './creditCard'
import { whiteAddIcon, stroke } from '../constants/constant'
import {typography} from '../style'

function CreditCardHolder() {
  return (
    <div className='w-[352px] max-h-[384px]'>
        <div className=' flex flex-col rounded-[16px] p-[16px] gap-[4px] bg-white-0 items-center border-[1px] shadow-custom-150 bg-bg-white-0 border-stroke-soft-200 w-[100%] h-[100%]'>
          <CreditCard/>
          <div className='bg-stroke-soft-200 h-[1px] rounded-none w-[100%] mt-[5px]'> </div>
          <div className='flex flex-row gap-[12px]'>
            <div className='flex flex-row items-center justify-center gap-[8px] px-[4px] w-[154px] h-[40px] rounded-[10px] bg-primary-purple-700'>
              <img src={whiteAddIcon} alt='add'/>
              <h5 className={`${typography.labelSmall} text-[#CDD0D5]`}> Send Funds</h5>
            </div>

            <div className='flex flex-row items-center justify-center gap-[8px] px-[4px] w-[154px] h-[40px] rounded-[10px] border-[1px] border-stroke-soft-200 shadow-custom-150 bg-bg-weak-100 '>
              <img src={stroke} alt='add'/>
              <h5 className={`${typography.labelSmall} text-[#CDD0D5]`}> Send Funds</h5>
            </div>

            <div></div>
          </div>
        </div>
    </div>
  )
}

export default CreditCardHolder