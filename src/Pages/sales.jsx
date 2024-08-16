
import styles from '../style';

import SmallCard from '../Components/smallCard';
import MediumCard from '../Components/mediumCard';
import VerticalCard from '../Components/verticalCard';
// import MediumCardTwo from '../components/mediumCardTwo';
// import LargeCardOne from '../components/largeCardOne';
// import CreditCardHolder from '../components/creditCardHolder';
// import AddAccountCard from '../components/addAccountCard';



// import { useSelector, useDispatch } from 'react-redux';

function Sales() {

  // const dispatch = useDispatch()
  // const cardState = useSelector((state)=> state.sales)

  return (
    // <div className={` w-[100%]`}>
    // <div className='flex flex-col flex-1 [w-100%]  gap-[16px]'>



    //   <div className={` flex flex-col  gap-[16px]`}>
    //       <div className={`${styles.paddingMain} grid grid-cols-3 gap-[16px] justify-between`}>

    // {/* <div className={`${styles.paddingMain} flex flex-row flex-1 gap-[20px]`}> */}
    //         <div className='col-span'>
    //           <SmallCard
    //               heading= "Total Revenue"
    //               amount= {cardState.totalSales}
    //               difference = {cardState.totalSalesDifference}
    //               percentage = {false}
    //             />
    //         </div>

    //         <div className='col-span'>
    //           <SmallCard
    //               heading = "Average Order Values"
    //               amount = {cardState.totalOrders}
    //               difference = {cardState.totalOrdersDifference}
    //               percentage = {false}
    //             />
    //         </div>

    //         <div className='col-span'>
    //           <SmallCard
    //               heading = "No of Total Orders"
    //               amount = {cardState.storeVisists}
    //               difference = {cardState.storeVisistsDifference}
    //               percentage = {false}
    //           />
              
    //         </div>
    //       {/* </div> */}

    //       </div>
    <div className={`${styles.paddingMain} flex  flex-1 flex-col w-[100%]`}>
      <div className='flex flex-col flex-1 [w-100%] gap-[16px] '>
        <div className='flex flex-row gap-[8px]  max-h-[300px] 2xl:flex-1'>
          <div className='flex flex-1'>
            <SmallCard
              heading = "Total Product"
              percentage = {false}
            />
          </div>
          
          <div className='flex flex-1'>
            <SmallCard
              heading = "Out of Stock"
              percentage = {false}
            />
          </div>
          
          <div className='flex flex-1'>
            <SmallCard
              heading = "Recently Added"
              percentage = {false}
            />
          </div>
          
        </div>


          <div className={` flex flex-1 flex-row  gap-[16px] justify-between`}>
            <div className='w-[70%] flex flex-1'>
              <MediumCard
              type = "lineChart"
              />
                
            </div>
            
            <div className='w-[34%]' >
              <VerticalCard
              type = "earningCategory"
              />

            </div>

          </div>

          <div className={` flex flex-row  gap-[16px] w-[100%]`}>
            <div className='w-[37%] flex flex-1' >
              <VerticalCard
              type = "topProduct"
              />

            </div>

            <div className='w-[70%] '>
              <MediumCard
              type = "transactions"
              />
                
            </div>

          </div>
      </div>
        


        
    </div>
    // </div>
  )
}

export default Sales


