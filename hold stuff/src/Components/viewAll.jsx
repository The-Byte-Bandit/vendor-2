import React from 'react'
import {typography} from '../style';

function ViewAll() {
  return (
    <div className='p-[6px] '>
      <div className='flex bg-bg-black-0 items-center justify-center px-[4px] rounded-[8px] w-[73px] h-[32px]'>
        <h3 className={`${typography.labelSmall} text-text-white-0`}>View All</h3>
      </div>
    </div>
  )
}

export default ViewAll