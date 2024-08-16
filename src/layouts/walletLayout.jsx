
import styles, {typography} from '../style';
import ExportDataBtn from '../Components/exportDataBtn';
import CsearchIcon from '../Components/search'
import CinboxIcon from '../Components/inbox.jsx';
import CnotificationIcon from '../Components/notification';
import { walletHeadingMessage} from '../constants/constant';
import { Outlet } from 'react-router-dom';
import DurationBtn from '../Components/durationBtn.jsx';


function WalletLayout() {


  return (
    <div className={`h-full w-[100%]  bg-backgroundGrey `}>
      <div className={`${styles.paddingMain} flex  w-[100%]  pt-[20px] pb-[9px] bg-bg-white-0 `}>
        <div className='flex flex-row flex-1 justify-between  gap-[12px] '>
          <div className='flex flex-col gap-[4px]'>
            <h3 className={`${typography.labelLarge}`}>Wallet</h3>
                  <p className={`${typography.paragraphSmall}`}>{walletHeadingMessage }</p>
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

      <div className={`${styles.paddingMain}  w-[100%]  `}>
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
              </div>
            </div>
          </div>
      </div>

    
            
      <div className='flex flex-1 w-full h-full'>
        <>
          <Outlet/>
        </>
      </div>
    </div>
  )
}

export default WalletLayout