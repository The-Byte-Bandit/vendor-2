import React from 'react'
import { thumbsUpIcon, sendPlaneLine} from '../constants/constant';
import {typography} from '../style'


function TransactionSuccesfulCard() {


    



  return (
    <div className='w-[440px] max-h-[516px]'>
        <div className='w-[100%] h-[100%] flex flex-col gap-[40px] bg-bg-white-0 border-[1px] border-stroke-soft-200 p-[32px] rounded-[16px]'>
            <div className='flex flex-col items-center gap-[8px]'>
                <div>
                    <img src={thumbsUpIcon} alt='send money'/>
                </div>

                <div className='flex flex-col items-center gap-[4px]'>
                    <h5 className={`${typography.titleH5Title} text-text-main-900`}>Transaction successful</h5>
                    
                </div>
            </div>

            <div className='flex flex-col gap-[4px] items-center rounded-[20px] border-[1px] border-stroke-soft-200 p-[16px]'>
                <h5 className={`text-text-main-900 ${typography.titleH5Title}`}>₦8,400.00</h5>
                <p className={`${typography.paragraphSmall} text-text-sub-500 text-center`}>Has been successfully sent to the recipient Oluwafemi oduneye david </p>
            </div>


            <div className=" flex flex-col gap-[8px]"> 
                <button type='submit'   className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] bg-primary-purple-700 rounded-[10px] h-[100%] w-[100%] text-text-white-0 `}>
                    <span>
                        <img src={sendPlaneLine} className='w-[100%] ' alt='send'/> 
                    </span>
                    Enter transaction pin 
                </button>

                <button type='submit'   className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] border-[1px] border-stroke-soft-200 bg-bg-white-0 rounded-[10px] h-[100%] w-[100%] text-text-sub-500 `}>
                        Close
                </button>
            </div>
        </div>
    
    </div>
  )
}

export default TransactionSuccesfulCard