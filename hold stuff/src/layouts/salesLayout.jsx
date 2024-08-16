import React, {useEffect} from 'react'
import styles, {typography} from '../style';
import ExportDataBtn from '../components/exportDataBtn';
import AddOrderBtn from '../components/addOrderBtn';
import CsearchIcon from '../components/search'
import CinboxIcon from '../components/inbox.jsx';
import CnotificationIcon from '../components/notification';
import { salesHeadingMessage} from '../constants/constant';
import { Outlet } from 'react-router-dom';
import DurationBtn from '../components/durationBtn.jsx';
import { Link } from 'react-router-dom';

function SalesLayout() {


  return (
    <div className={` h-full  bg-backgroundGrey`}>
      <div className={`${styles.paddingMain} flex  w-[100%]  pt-[20px] pb-[9px] bg-bg-white-0 `}>
        <div className='flex flex-row flex-1 justify-between  gap-[12px] '>
          <div className='flex flex-col gap-[4px]'>
            <h3 className={`${typography.labelLarge}`}> Sales</h3>
                  <p className={`${typography.paragraphSmall}`}>{salesHeadingMessage }</p>
          </div>

          <div className=' flex' >
            <div className='flex gap-[12px]'>
              <CsearchIcon/>
              <CnotificationIcon/>
              <CinboxIcon/>
            </div>
          </div>
        </div>
        
      </div>

      <div className={`${styles.paddingMain}  w-[100%]  py-[12px]`}>
        <div className='flex flex-row justify-between border-b border-stroke-soft-200 pb-[10px]'>
            <div>
              <DurationBtn/>
            </div>
            
            <div className='flex flex-row  '>
              <div className=' flexitems-center'>
                <CsearchIcon/>
              </div>
              <div className='flex flex-1 flex-row gap-[12px]  items-center w-[]'>
                <ExportDataBtn/>
                <Link to ={`add-orders`}>
                  <AddOrderBtn/>
                </Link>
              </div>
            </div>
          </div>
      </div>

    
            
      <div className='flex flex-1 w-full'>
        <>
          <Outlet/>
        </>
      </div>
    </div>
  )
}

export default SalesLayout