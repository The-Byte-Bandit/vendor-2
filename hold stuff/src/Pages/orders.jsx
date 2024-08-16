import React from 'react'
import { Link } from 'react-router-dom';
import styles, {typography} from '../style';
import { productHeadingMessage,arrowDown} from '../constants/constant';

import LargeCardOne from '../components/largeCardOne';
import SmallCard from '../components/smallCard';
import ExportAsBtn from '../components/exportAsBtn';

function Orders() {
  return (
    <div className={`${styles.paddingMain} w-[100%] h-full flex flex-col `}>
      <div className='flex flex-col flex-1 w-[100%] h-[100%] gap-[16px] justify-between '>
        <div className='flex flex-row gap-[8px]   max-h-[300px] 2xl:flex-1'>
          <div className='flex flex-1'>
            <SmallCard
              heading = "Total Orders"
              percentage = {false}
            />
          </div>
          
          <div className='flex flex-1'>
            <SmallCard
              heading = "Completed Orders"
              percentage = {false}
            />
          </div>
          
          <div className='flex flex-1'>
            <SmallCard
              heading = "Ongoing Orders"
              percentage = {false}
            />
          </div>
          
          <div className='flex flex-1'>
            <SmallCard
              heading = "Returned Orders"
              percentage = {false}
            />
          </div>
          
        </div>

        <div className='h-full w-full flex-1'>
          {/* <LargeCardOne/> */}
          <LargeCardOne/>
        </div>
      </div>

    </div>
  )
}

export default Orders