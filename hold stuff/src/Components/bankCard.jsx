import React from 'react'
import {typography} from '../style';
import {speedUpLine} from '../constants/constant'
import AddAccoountBtn from './addAccoountBtn'; 


function BankCard() {


  return (
    <div className='w-[352px] max-h-[278px]'>
        <div className=' p-[16px]  bg-bg-white-0  flex flex-col border-[1px] rounded-[12px] border-stroke-soft-200 gap-[13px] h-[100%] w-[100%]'>
            <div className='flex flex-row gap-[8px] items-center justify-between'>
                <div className='flex flex-row gap-[8px] items-center'>
                    <img src={speedUpLine} alt=''/>
                    <h5 className={`${typography.labelMedium} text-text-main-900`}>Bank</h5>
                </div>
                <div><AddAccoountBtn/></div>
            </div>

            <div className='bg-stroke-soft-200 h-[1px] rounded-none w-[100%] mt-[5px]'> </div>

            <div className='flex flex-col'>
                <h5 className={`${typography.labelMedium} text-text-soft-400`}>You dont have an account </h5>
                <p className={`${typography.paragraphSmall} text-text-soft-400`}>Apply for an account to get your funds withdrawn easily and swiftly.</p>
            </div>
        </div>

        
    </div>
  )
}

export default BankCard