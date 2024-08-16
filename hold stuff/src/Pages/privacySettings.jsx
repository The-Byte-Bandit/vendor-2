import React from 'react'
import styles, {typography} from '../style';
import {toggle, firefoxLine} from '../constants/constant';
import ActiveSessionCard from '../components/activeSessionCard';


function PrivacySettings() {
  return (
    <div className={`${styles.paddingMain} w-full h-full bg-backgroundGrey flex flex-col`}>
      <div className='w-full  flex flex-col flex-1 gap-[32px] mb-[16px]'>
        <div className='flex flex-row flex-1 items-center'>
          <h5 className={`${typography.labelLarge} text-text-main-900`}>Privacy & Security</h5>
        </div>

        <div className='flex flex-col flex-1 gap-[32px]'>
          <div className='flex flex-row flex-1'>
            <div className='flex flex-col flex-1 gap-[4px]'>
              <h5 className={`${typography.labelSmall} text-text-main-900`}>Change Password</h5>
              <p className={`${typography.paragraphXSmall}`}>Update password for enhanced account security.</p>
            </div>

            <div className='ml-auto'>
              <button type='button' className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] ml-auto bg-bg-white-0 border-stroke-soft-200 border-[1px]  rounded-[10px] h-[38px] max-w-[160px] text-text-sub-500 `}>
                Change Password
              </button> 
            </div>
          </div>

          <div className='bg-stroke-soft-200 h-[1px] rounded-none w-[100%] mt-[5px]'> </div>

          <div className='flex flex-row flex-1'>
            <div className='flex flex-col flex-1 gap-[4px]'>
              <h5 className={`${typography.labelSmall} text-text-main-900`}>Two-factor Authentication</h5>
              <p className={`${typography.paragraphXSmall}`}>Add an extra layer of protection to your account.</p>
            </div>
            
            <div className='ml-auto'>
              <button type='button' className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] ml-auto bg-bg-white-0 border-stroke-soft-200 border-[1px]  rounded-[10px] h-[38px] max-w-[195px] text-text-sub-500 `}>
                Manage Authentication
              </button> 
            </div>
          </div>

          <div className='bg-stroke-soft-200 h-[1px] rounded-none w-[100%] mt-[5px]'> </div>

          <div className='flex flex-row flex-1'>
            <div className='flex flex-col flex-1 gap-[4px]'>
              <h5 className={`${typography.labelSmall} text-text-main-900`}>Active Sessions</h5>
              <p className={`${typography.paragraphXSmall}`}>Monitor and manage all your active sessions.</p>
            </div>
            
            <div className='ml-auto'>
              <button type='button' className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] ml-auto bg-bg-white-0 border-redBase border-[1px]  rounded-[10px] h-[38px] max-w-[195px] text-redBase `}>
                Log Out All Sessions
              </button> 
            </div>
          </div>
        </div>
      </div>
      <ActiveSessionCard/>

    </div>
  )
}

export default PrivacySettings