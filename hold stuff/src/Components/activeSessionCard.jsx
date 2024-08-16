import React from 'react'
import styles, {typography} from '../style';
import { useSelector, useDispatch } from 'react-redux';
import {toggle, firefoxLine} from '../constants/constant';

function ActiveSessionCard() {
    const sessionState = useSelector((state) => state.sessions);

  return (
    <div>
        {sessionState.sessions.length > 0  && (
            <div className="grid grid-cols-6 h-full rounded-[8px] border border-stroke-soft-200">
                <div className="col-span-2 h-full">
                    <div className='flex flex-col h-full'>
                        <div className='bg-bg-weak-100  w-[100%] h-[24px] flex items-center mb-[10px] py-[8px] px-[12px]'>
                            <div className={`flex flex-row max-w-[186px] items-center gap-[10px]`}>
                                <h3 className={`${typography.paragraphSmall}`}>Browser</h3>
                                <div>
                                    <img src={toggle} alt='toggle' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between h-full'>
                            {sessionState.sessions.slice(0,5).map((item, index) => (
                                <div key = {index} className='flex flex-col justify-between h-full rounded-tl-[12px] rounded-bl-[12px]'>
                                    <div className='flex flex-1 items-center flex-row gap-[10px] bg-bg-white-0 border-stroke-soft-200 w-[100%] max-h-[75px]  mt-[0px]'>
                                        <div className='flex justify-center items-center ml-[6px] gap-[8px] max-w[100px] '>
                                            <div>
                                                <img src={item.browserIcon} alt='avatar'/>
                                            </div>
                                            <div className='flex flex-col justify-center items-center'>
                                                <p className={`${typography.paragraphSmall} truncate`}>
                                                {item.browser}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>

                        <div className='bg-stroke-soft-200 h-[1px] rounded-none w-[100%] mt-[5px]'> </div>
                    </div>
                </div>

                <div className="col-span-1 flex flex-col h-full">
                    <div className='bg-bg-weak-100  w-[100%] h-[24px] flex items-center mb-[10px] py-[8px] px-[12px]'>
                        <div className={`flex flex-row flex-nowrap max-w-[160px] gap-[10px]`}>
                            <h3 className={`${typography.paragraphSmall}`}>Location</h3>
                            <div>
                                <img src={toggle} alt='toggle' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col h-full justify-between'>
                        {sessionState.sessions.slice(0,5).map((item, index) => (
                            <div key={index} className='flex flex-col h-full '>
                                <div className='flex flex-1 items-center gap-[10px] bg-bg-white-0 max-h-[75px]  mt-[0px] px-[9px]  border-stroke-soft-200'>
                                    <div className='flex flex-col gap-[6px] '>
                                        <p className={`${typography.paragraphSmall} truncate`}>
                                        {item.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='bg-stroke-soft-200 h-[1px] rounded-none w-[100%] mt-[5px]'> </div>
                </div>

                <div className="flex flex-col col-span-2 h-full">
                    <div className='bg-bg-weak-100 w-[100%] h-[24px] flex items-center mb-[10px] py-[8px] px-[12px]'>
                        <div className={`flex flex-row  items-center gap-[10px]`}>
                            <h3 className={`${typography.paragraphSmall}`}>Most recent activity</h3>
                            <div>
                                <img src={toggle} alt='toggle' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col h-full justify-between'>
                    {sessionState.sessions.slice(0,5).map((item, index) => (
                        <div key = {index} className='flex flex-col h-full justify-between'>
                            <div className='flex flex-1 items-center gap-[10px] bg-bg-white-0 max-h-[75px]  mt-[0px] px-[12px]  border-stroke-soft-200'>
                                <div className='flex flex-col gap-[6px] '>
                                    <p className={`${typography.paragraphSmall} truncate`}>
                                        {item.mostRecentActivity}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>

                    <div className='bg-stroke-soft-200 h-[1px] rounded-none w-[100%] mt-[5px]'> </div>
                </div>

                <div className="flex flex-col h-full">
                    <div className='bg-bg-weak-100 w-[100%] h-[24px] flex items-center py-[8px] px-[12px] mb-[10px]'>
                        <div className={`flex flex-row  items-center gap-[10px]`}>
                            <h3 className={`${typography.paragraphSmall}`}>IP Address</h3>
                            <div>
                                <img src={toggle} alt='toggle' />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col h-full justify-between'>
                    {sessionState.sessions.slice(0,5).map((item, index) => (
                        <div key = {index} className='flex flex-col justify-between h-full rounded-br-[12px] rounded-tr-[12px]'>
                            <div className='flex items-center flex-1  max-h-[75px] mt-[0px] bg-bg-white-0  border-stroke-soft-200  py-[4px]'>
                                <div className='flex flex-row py-[4px] px-[3px] gap-[4px] items-center rounded-[6px] border-[1px] border-stroke-soft-200  ml-[8px]'>
                                    <h3 className={`${typography.paragraphSmall}`}>224.0.1.1</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                    
                    <div className='bg-stroke-soft-200 h-[1px] rounded-none w-[100%] mt-[5px]'> </div>
                </div>
        </div>

        )}
          
      </div>
  )
}

export default ActiveSessionCard