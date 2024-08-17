
import styles, {typography} from '../style.js';
import ExportDataBtn from '../Components/exportDataBtn.jsx';
import AddOrderBtn from '../Components/addOrderBtn.jsx';
import CsearchIcon from '../Components/search.jsx'
import CinboxIcon from '../Components/inbox.jsx';
import CnotificationIcon from '../Components/notification.jsx';
import { ordersHeadingMessage} from '../constants/constant.jsx';
import { Outlet } from 'react-router-dom';
import DurationBtn from '../Components/durationBtn.jsx';
import { Link } from 'react-router-dom';

function OrdersLayout() {


  return (
    <div className={`  w-[100%] h-full  bg-backgroundGrey`}>
      <div className={`${styles.paddingMain} flex  w-[100%]  pt-[20px] pb-[9px] bg-bg-white-0 `}>
        <div className='flex flex-row flex-1 justify-between  gap-[12px] '>
          <div className='flex flex-col gap-[4px]'>
            <h3 className={`${typography.labelLarge}`}> Orders</h3>
                  <p className={`${typography.paragraphSmall}`}>{ordersHeadingMessage }</p>
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

      <div className={`${styles.paddingMain} w-[100%]  py-[12px]`}>
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

export default OrdersLayout
