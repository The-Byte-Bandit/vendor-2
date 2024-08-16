
import styles from '../style';
import LargeCardOne from '../Components/largeCardOne.jsx';
import SmallCard from '../Components/smallCard.jsx';
// import ExportAsBtn from '../Components/exportAsBtn';

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