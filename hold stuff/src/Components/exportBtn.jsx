import React from 'react'
import { forwardIcon} from '../constants/constant'
import {typography} from '../style';


function ExportBtn() {
  return (
    <div className='flex'>
        <div className='flex flex-row gap-[8px] justify-center items-center max-w-[135px] max-h-[40px] bg-bg-white-0 shadow-custom-50 rounded-[10px] border-stroke-soft-200 py-[10px] px-[10px]'>
            <img src={forwardIcon} alt="export" />
            <h3 className={`${typography.labelSmall}`}>Export</h3>
        </div>
    </div>
  )
}

export default ExportBtn