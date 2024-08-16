import React from 'react'
import styles, {typography} from '../style';
import { secondWhiteAddIcon, dot } from '../constants/constant';

function PaymentSettings() {
  return (
    <div className={`${styles.paddingMain} w-full h-full bg-backgroundGrey flex flex-col`}>
      <div className='w-full  flex flex-col flex-1 gap-[32px]'>
        <div className='flex flex-row flex-1 items-center'>
          <h5 className={`${typography.labelLarge} text-text-main-900`}>Payment Settings</h5>
        </div>

        <div className='flex flex-col w-full gap-[20px]'>
          <div className='w-full flex flex-row flex-1'>
            <div className='flex flex-col gap-[12px] max-w-[416px] w-[50%]'>
              <h5 className={`${typography.labelSmall} text-text-main-900`}>Payment method</h5>
              <p className={`${typography.paragraphXSmall}`}>Add or remove payment method for ease of transaction.</p>
            </div>

            <div className=' flex flex-col flex-1 gap-[10px]'>
              <button type='button' className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] bg-primary-purple-700 rounded-[10px] h-[38px] max-w-[190px] text-text-white-0 `}>
                <span><img src={secondWhiteAddIcon} className='w-[100%] ' alt='add'/> </span>
                Add payment method
              </button>

              <div className='w-full max-h-[140px] py-[16px] flex-col flex px-[24px] border-[1px] border-stroke-soft-200 rounded-[16px] gap-[8px] '>
                <div className='flex-col flex gap-[4px]'>
                  <div className='flex flex-row flex-1 items-center justify-between'>
                    <p className={`${typography.paragraphXSmall}`}>Access Bank </p>
                    <div className='w-[126px] h-[24px] py-[4px] px-[8px] bg-bg-white-0 flex flex-row items-center'>
                      <img src={dot} alt='dot'/>
                      <h5 className={`${typography.labelXSmall}`}>Primary account</h5>
                    </div>
                  </div>
                  <h5 className={`${typography.labelMedium}`}>1234567890</h5>
                  <p className={`${typography.paragraphXSmall}`}>Oduneye Oluwafemi David</p>
                </div>

                <div className='flex flex-row flex-1'>
                  <p className={`${typography.labelSmall} text-primary-purple-700`}>Edit</p>
                </div>
              </div>
            </div>

          </div>

          <div className='bg-stroke-soft-200 h-[1px] rounded-none w-[100%] mt-[5px]'> </div>


          <div className='w-full flex flex-row flex-1'>
            <div className='flex flex-col gap-[12px] max-w-[416px] w-[50%]'>
              <h5 className={`${typography.labelSmall} text-text-main-900`}>Billing information</h5>
              <p className={`${typography.paragraphXSmall}`}>This is the account that payment will be deducted from.</p>
            </div>

            <div className=' flex flex-col flex-1 gap-[10px]'>
              <div className='w-full max-h-[140px] py-[16px] flex-col flex px-[24px] border-[1px] border-stroke-soft-200 rounded-[16px] gap-[8px] '>
                <div className='flex-col flex gap-[4px]'>
                  <div className='flex flex-row flex-1 items-center justify-between'>
                    <p className={`${typography.paragraphXSmall}`}>Access Bank </p>
                    <div className='w-[126px] h-[24px] py-[4px] px-[8px] bg-bg-white-0 flex flex-row items-center'>
                      <img src={dot} alt='dot'/>
                      <h5 className={`${typography.labelXSmall}`}>Primary account</h5>
                    </div>
                  </div>
                  <h5 className={`${typography.labelMedium}`}>1234567890</h5>
                  <p className={`${typography.paragraphXSmall}`}>Oduneye Oluwafemi David</p>
                </div>

                <div className='flex flex-row flex-1'>
                  <p className={`${typography.labelSmall} text-primary-purple-700`}>Edit</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default PaymentSettings