import React, {useState} from 'react'
import { arrowDown} from '../constants/constant';
import {typography} from '../style';
import { responsiveFontSizes } from '@mui/material';

function DurationBtn() {

  const [duration, setDuration] = useState("Last Week");
  const [isOpen, setIsOpen] = useState(false); // Use a descriptive state name

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle state based on current isOpen value
  };

  const handleDurationChange = (newDuration) => {
    setDuration(newDuration);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className='relative flex flex-1 items-center'>
        <button onClick={toggleDropdown} className='flex flex-row gap-[1px] py-[6px] px-[3px] border-[1px] items-center justify-center rounded-[8px] max-w-[130px] h-[32px] border-stroke-soft-200 shadow-custom-150 bg-bg-white-0 p-[8px]'>
            <h5 className={`${typography.paragraphSmall} text-nowrap`} style={{fontSize: '11px'}}>{duration}</h5>
            <div><img src={arrowDown} alt='Down arrow'/></div>
        </button>


        {isOpen &&(
          <div className='absolute z-50 flex flex-col flex-1 top-[10px] right-[10px] w-[199px] h-[292px] py-[20px] px-[16px] rounded-[8px] border-[1px]  border-stroke-soft-200 shadow-custom-150 bg-bg-white-0 justify-between '>
            <button className='hover:bg-bg-weak-100 w-full p-[8px] rounded-[8px] h-[30px]' onClick={() => handleDurationChange('Today')}>
              <h5 className={`${typography.labelSmall} text-text-main-900 text-left`}>Today</h5>
            </button>

            <button className='hover:bg-bg-weak-100 w-full p-[8px] rounded-[8px] h-[30px] ' onClick={() => handleDurationChange('Last 7 days')}>
              <h5 className={`${typography.labelSmall} text-text-main-900 text-left`}>Last 7 days</h5>
            </button>

            <button className='hover:bg-bg-weak-100 w-full p-[8px] rounded-[8px] h-[30px]' onClick={() => handleDurationChange('Last 30 days')}>
              <h5 className={`${typography.labelSmall} text-text-main-900 text-left`}>Last 30 days</h5>
            </button>

            <button className='hover:bg-bg-weak-100 w-full p-[8px] rounded-[8px] h-[30px]' onClick={() => handleDurationChange('Last 3 months')}>
              <h5 className={`${typography.labelSmall} text-text-main-900 text-left`}>Last 3 months</h5>
            </button>

            <button className='hover:bg-bg-weak-100 w-full p-[8px] rounded-[8px] h-[30px]' onClick={() => handleDurationChange('Last 12 months')}>
              <h5 className={`${typography.labelSmall} text-text-main-900 text-left`}>Last 12 months</h5>
            </button>

            <button className='hover:bg-bg-weak-100 w-full p-[8px] rounded-[8px] h-[30px]' onClick={() => handleDurationChange('All time')}>
              <h5 className={`${typography.labelSmall} text-text-main-900 text-left`}>All time</h5>
            </button>

          </div>
        )}
        
    </div>
  )
}

export default DurationBtn