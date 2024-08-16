import React, { Component } from 'react'
import { typography } from '../style'

function SeeAll(){
    return (
      <div className=' flex p-[6px] items-center justify-center'>
        <div className=' flex border-[1px] rounded-[8px] hadow-custom-200 border-stroke-soft-200 bg-bg-white-0 h-[26px] w-[56px] px-[4px] items-center justify-center'>
            <h3 className={`${typography.labelSmall} text-text-sub-500 `}>See All</h3>
        </div>
      </div>
    )
}

export default SeeAll