import  {useState} from 'react'
import { Outlet } from 'react-router-dom';
import styles, {typography} from '../style';
import CsearchIcon from '../Components/search'
import CinboxIcon from '../Components/inbox.jsx';
import CnotificationIcon from '../Components/notification';
import { Link } from 'react-router-dom';
import { userset, settings_wallet, notification_seticon, privAndsec, arro, settingstHeadingMessage } from '../constants/constant';
import { useSelector } from 'react-redux';

function SettingsLayout() {

  // const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile);
  const paymentSettings = useSelector((state) => state.paymentSettings);
  const businessDetails = useSelector((state) => state.businessDetails);
  console.log(userProfile);
  console.log(paymentSettings);
  console.log(businessDetails);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  }





  return (
//     <div className='dashboard w-[100%] bg-backgroundGrey overflow-hidden'>
//     <div className='flex flex-col gap-[2px] sticky'>
//       <div className='flex  w-[100%]  pt-[20px] pb-[9px] px-[32px] bg-bg-white-0 '>
//           <div className='flex flex-row flex-1 justify-between  gap-[12px] '>
//             <div className='flex flex-col gap-[4px]'>
//               <h3 className={`${typography.labelLarge}`}> Settings</h3>
//                     <p className={`${typography.paragraphSmall}`}>Customize your account, preferences, and operational settings.</p>
//             </div>

//             <div className=' flex' >
//               <div className='flex gap-[12px]'>
//                 <CsearchIcon/>
//                 <CnotificationIcon/>
//                 <CinboxIcon/>
//               </div>
//             </div>
//           </div>
          
//         </div>
//         <div className='flex flex-row gap-[2px] sticky'>
//           <div className='w-[30%]'>
//             <Settings />
//           </div>
          
//           <>
//           <Outlet/>
//           </>
//         </div>
//     </div>

// </div>
<div className={` w-[100%] min-h-screen bg-backgroundGrey `}>
      <div className={`${styles.paddingMain} mb-[0px] flex   w-[100%]  pt-[20px] pb-[9px] bg-bg-white-0 `}>
        <div className='flex flex-row flex-1 justify-between  gap-[12px] '>
          <div className='flex flex-col gap-[4px]'>
            <h3 className={`${typography.labelLarge}`}>Settings</h3>
              <p className={`${typography.paragraphSmall}`}>{settingstHeadingMessage }</p>
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
            
      <div className='flex flex-row flex-1 w-full h-full '>
        <div className='flex flex-col  w-[35%] bg-bg-white-0 p-[20px] border-[1px] border-stroke-soft-200 '>
          <div className='max-w-[400px] flex flex-col flex-1'>
            <div className=' flex flex-col w-[100%] font-semibold text-text-soft-400'>
              <Link to ='acount-settings'>
                <div 
                  className={activeIndex === 0 ? 'active' : ''}
                  onClick={() => handleClick(0)}>
                    <div  className='p-[8px] flex justify-between'>
                      <div className=' flex  items-center w-full'>
                        <img className=' cgrey pr-2' src={userset}/>
                        <h5 className={`${typography.labelSmall}`}>Account Settings </h5>
                      </div>
                      <img className='arr' src={arro} />
                    </div>
                  </div>
                </Link>

                <Link to ='payment-settings'>  
                  <div className={activeIndex === 1 ? 'active' : ''} onClick={() => handleClick(1)}>
                      <div  className='p-[8px] flex justify-between'>
                        <div className=' flex  items-center w-full'>
                          <img className=' cgrey pr-2' src={settings_wallet}/>
                          <h5 className={`${typography.labelSmall}`}>Payment Settings </h5>
                        </div>
                        <img className='arr' src={arro} />
                      </div>
                  </div>
                </Link>
              <Link to ='notification-settings'>  
              <div 
                  className={activeIndex === 2 ? 'active' : ''}
                  onClick={() => handleClick(2)}>
                    <div  className='p-[8px] flex justify-between'>
                      <div className=' flex items-center w-full'>
                        <img className=' cgrey pr-2' src={notification_seticon}/>
                        <h5 className={`${typography.labelSmall}`}>Notification Settings </h5>
                      </div>
                      <img className='arr' src={arro} />
                    </div>
                  </div>
              </Link>
              <Link to ='privacy-settings'>  
              <div 
                  className={activeIndex === 3 ? 'active' : ''}
                  onClick={() => handleClick(3)}>
                    <div  className='p-[8px] flex justify-between'>
                      <div className=' flex  items-center w-full'>
                        <img className=' cgrey pr-2' src={privAndsec}/>
                        <h5 className={`${typography.labelSmall}`}>Privacy & Security </h5>
                      </div>
                      <img className='arr' src={arro} />
                    </div>
                  </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='w-full mb-[60px] h-full'>
        <>
          <Outlet/>
        </>
        </div>
      </div>
    </div>
  )
}

export default SettingsLayout