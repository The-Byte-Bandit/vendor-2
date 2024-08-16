import React from 'react'
import { Outlet } from 'react-router-dom';
import TopNav from '../components/topNav'
import CsearchIcon from '../components/search'
import { dashboardHeadingMessage, bannerMessage,tube, arrowRight, smallCardData } from '../constants/constant';
import styles, {typography} from '../style';
import ExportBtn from '../components/exportBtn';
import AddProductBtn from '../components/addProductBtn';

import SmallCard from '../components/smallCard';
import MediumCard from '../components/mediumCard';
import VerticalCard from '../components/verticalCard';
import MediumCardTwo from '../components/mediumCardTwo';
import LargeCardOne from '../components/largeCardOne';
import CreditCardHolder from '../components/creditCardHolder';
import AddAccountCard from '../components/addAccountCard';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

function Dashboard() {

  const dispatch = useDispatch()
  const cardState = useSelector((state)=> state.dashboard)

  return (
    <div className={`${styles.paddingMain} w-[100%] max-w-screen bg-backgroundGrey`}>
      <div className='flex flex-col  flex-1 sticky w-[100%]'>
        <div className='items-center justify-between  '>
          <div className='flex flex-1 justify-between border-b  gap-[12px] pb-[16px] border-stroke-soft-200 '>
            <div className='flex flex-col gap-[4px]'>
                <h3 className={`${typography.labelLarge}`}>Dashboard</h3>
                <p className={`${typography.paragraphSmall}`}>{dashboardHeadingMessage}</p>
            </div>
            <div className='ml-auto flex items-center'>
                <CsearchIcon/>
            </div>
            <div className='flex flex-row gap-[12px] items-center justify-end'>
              <ExportBtn/>
              <Link to ={`add-product`}>
                <AddProductBtn/>
              </Link>
            </div>
          </div>
        </div>
        
        <div className={` mb-[16px]`}>
          <div>
            <div className='flex flex-1 flex-row justify-between items-center h-[62px] rounded-[10px] py-[20px] px-[20px] bg-Primary-purple-100'>
              <h3 className={`${typography.labelSmall}`}>{bannerMessage}</h3>

              <div className='flex flex-1 flex-row gap-[14px]'>
                <img src={tube} alt="Tube" className='ml-auto opacity-20 '/>
                <img src={arrowRight} alt='arrow'/>
                {/* <div className='w-[100%] h-[100%] bg-primary-purple-700 -top-[8px] absolute z-10 bg-opacity-[0.5]'></div> */}
              </div>
              

            </div>
          </div>
        </div>

        
        {/* <div className={`${styles.paddingMain} flex flex-row flex-1 gap-[20px]`}>
          <SmallCard
            heading= "Total Sales"
            amount= {cardState.totalSales}
            difference = {cardState.totalSalesDifference}
          />
            
          <SmallCard
            heading = "Total Order"
            amount = {cardState.totalOrders}
            difference = {cardState.totalOrdersDifference}
          />

          <SmallCard
            heading = "Store Visit"
            amount = {cardState.storeVisists}
            difference = {cardState.storeVisistsDifference}
          />
        </div>




        <div className={`${styles.paddingMain} flex flex-1 flex-row gap-[20px]`}>
          <div className=''><MediumCard
            type = "orders"
          /></div>
          <div className='' ><VerticalCard
            type = "topProduct"
          /></div>
        </div> */}
        {/* <div className={`${styles.paddingMain} flex flex-col gap-[30px]`}>
        
        <MediumCardTwo/>
        <LargeCardOne/> 
        <CreditCardHolder/>
        <AddAccountCard/>
        
        </div> */}




      <div className={` flex flex-col  gap-[16px] w-full`}>
          <div className={`grid grid-cols-3 gap-[16px] justify-between w-full`}>

    {/* <div className={`${styles.paddingMain} flex flex-row flex-1 gap-[20px]`}> */}
            <div className='col-span'>
              <SmallCard
                  heading= "Total Sales"
                  amount= {cardState.totalSales}
                  difference = {cardState.totalSalesDifference}
                  percentage = {true}
                />
            </div>

            <div className='col-span'>
              <SmallCard
                  heading = "Total Order"
                  amount = {cardState.totalOrders}
                  difference = {cardState.totalOrdersDifference}
                  percentage = {true}
                />
            </div>

            <div className='col-span'>
              <SmallCard
                  heading = "Store Visit"
                  amount = {cardState.storeVisists}
                  difference = {cardState.storeVisistsDifference}
                  percentage = {true}
              />
              
            </div>
          {/* </div> */}

          </div>

          <div className={` flex flex-row  gap-[16px] justify-between w-full` }>
            <div className='w-[70%] flex flex-1'>
              <MediumCard
              type = "orders"
              />
                
            </div>
            <div className='w-[34%]' >
              <VerticalCard
              type = "topProduct"
              />

            </div>

          </div>

          <div className={` flex flex-row  gap-[16px] w-[100%]`}>
            <div className='w-[34%] flex flex-1' >
              <VerticalCard
              type = "topProduct"
              />

            </div>

            <div className='w-[70%]'>
              <MediumCard
              type = "transactions"
              />
                
            </div>

          </div>
      </div>
        


        
    </div>
    </div>
  )
}

export default Dashboard