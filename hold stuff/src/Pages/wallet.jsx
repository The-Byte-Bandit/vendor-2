import React from 'react'
import styles, {typography} from '../style';

import SmallCard from '../components/smallCard';
import MediumCard from '../components/mediumCard';
import CreditCardHolder from '../components/creditCardHolder';
import BankCard from '../components/bankCard';
import ExpenseCard from '../components/expenseCard';
// import MediumCardTwo from '../components/mediumCardTwo';
// import LargeCardOne from '../components/largeCardOne';
// import CreditCardHolder from '../components/creditCardHolder';
// import AddAccountCard from '../components/addAccountCard';

import { useSelector, useDispatch } from 'react-redux';

function Wallet() {

  const dispatch = useDispatch()
  const cardState = useSelector((state)=> state.sales)

  return (
    <div className={`${styles.paddingMain} flex  flex-1 flex-col w-[100%] `}>
      <div className='flex flex-col flex-1 [w-100%] gap-[16px] '>
          {/* <TopNav /> */}
          {/* <div className='items-center justify-between py-[6px] px-[16px] '>

          </div> */}
          

          
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




        <div className={`   flex flex-row gap-[16px] justify-between `}>
            <div className={`flex flex-col gap-[16px] w-[100%]`}>
              <div className={`flex flex-row flex-1 h-full justify-between gap-[24px]`}>
                <div className='w-[100%] h-full flex-1'>
                  <SmallCard
                      heading= "Total Revenue"
                      amount= {cardState.totalSales}
                      difference = {cardState.totalSalesDifference}
                      percentage = {false}
                    />
                </div>

                <div className='w-[100%] h-full flex-1'>
                  <SmallCard
                      heading = "Average Order Values"
                      amount = {cardState.totalOrders}
                      difference = {cardState.totalOrdersDifference}
                      percentage = {false}
                    />
                </div>

              </div>

              <div className='h-full flex w-full'>
                <MediumCard
                  type = "orders"
                />

              </div>
            </div>

          <div className=' flex flex-col gap-[25px] h-full justify-between'>
            <div className='w-[100%] flex flex-1'>
              <CreditCardHolder/>
            </div>

            <div className='w-[100%] flex flex-1'>
              <BankCard/>
            </div>

            <div className='w-[100%] flex flex-1'>
              <ExpenseCard/>
            </div>
          </div>

          

          



            {/* <div className={`${styles.paddingMain} flex flex-row  gap-[16px]`}>
              <div className='w-[100%]'>
                <MediumCard
                type = "lineChart"
                />
                  
              </div>
              <div className='col-span' >
                <VerticalCard
                type = "earningCategory"
                />

              </div>

            </div>

            <div className={`${styles.paddingMain} flex flex-row  gap-[16px] w-[100%]`}>
              <div className='' >
                <VerticalCard
                type = "topProduct"
                />

              </div>

              <div className='w-[100%]'>
                <MediumCard
                type = "transactions"
                />
                  
              </div>

            </div> */}
        </div>         
      </div>
    </div>
  )
}

export default Wallet


