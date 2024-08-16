import { useState } from 'react';
import React from 'react'
import { Link } from 'react-router-dom';
import { userset, settings_wallet, notification_seticon, privAndsec, arro } from '../constants/constant';
import { useSelector, useDispatch } from 'react-redux';

function Settings() {


  const dispatch = useDispatch();
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
    // <div className=' bg-white justify-center'>
    //   <div className=' p-6'>
    //     <div className=' flex flex-col w-[300px] font-semibold text-text-soft-400'>
    //       <Link to ='acount-settings'>
    //         <div 
    //           className={activeIndex === 0 ? 'active' : ''}
    //           onClick={() => handleClick(0)}>
    //             <div  className=' flex justify-between'>
    //               <div className=' flex p-3 items-center w-full'>
    //                 <img className=' cgrey pr-2' src={userset}/>
    //                 <h5>Account Settings </h5>
    //               </div>
    //               <img className='arr p-3' src={arro} />
    //             </div>
    //           </div>
    //       </Link>
    //       <Link to ='payment-settings'>  
    //       <div 
    //           className={activeIndex === 1 ? 'active' : ''}
    //           onClick={() => handleClick(1)}>
    //             <div  className=' flex justify-between'>
    //               <div className=' flex p-3 items-center w-full'>
    //                 <img className=' cgrey pr-2' src={settings_wallet}/>
    //                 <h5>Payment Settings </h5>
    //               </div>
    //               <img className='arr p-3' src={arro} />
    //             </div>
    //           </div>
    //       </Link>
    //       <Link to ='notification-settings'>  
    //       <div 
    //           className={activeIndex === 2 ? 'active' : ''}
    //           onClick={() => handleClick(2)}>
    //             <div  className=' flex justify-between'>
    //               <div className=' flex p-3 items-center w-full'>
    //                 <img className=' cgrey pr-2' src={notification_seticon}/>
    //                 <h5>Notification Settings </h5>
    //               </div>
    //               <img className='arr p-3' src={arro} />
    //             </div>
    //           </div>
    //       </Link>
    //       <Link to ='privacy-settings'>  
    //       <div 
    //           className={activeIndex === 3 ? 'active' : ''}
    //           onClick={() => handleClick(3)}>
    //             <div  className=' flex justify-between'>
    //               <div className=' flex p-3 items-center w-full'>
    //                 <img className=' cgrey pr-2' src={privAndsec}/>
    //                 <h5>Privacy & Security </h5>
    //               </div>
    //               <img className='arr p-3' src={arro} />
    //             </div>
    //           </div>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    // <div className='flex flex-col  h-full w-[30%] bg-bg-white-0 p-[20px]'>
    //   <div className='max-w-[400px] flex flex-col flex-1'>
    //     <div className=' flex flex-col w-[300px] font-semibold text-text-soft-400'>
    //        <Link to ='acount-settings'>
    //          <div 
    //           className={activeIndex === 0 ? 'active' : ''}
    //           onClick={() => handleClick(0)}>
    //             <div  className=' flex justify-between'>
    //               <div className=' flex p-3 items-center w-full'>
    //                 <img className=' cgrey pr-2' src={userset}/>
    //                 <h5>Account Settings </h5>
    //               </div>
    //               <img className='arr p-3' src={arro} />
    //             </div>
    //           </div>
    //         </Link>

    //         <Link to ='payment-settings'>  
    //           <div className={activeIndex === 1 ? 'active' : ''} onClick={() => handleClick(1)}>
    //               <div  className=' flex justify-between'>
    //                 <div className=' flex p-3 items-center w-full'>
    //                   <img className=' cgrey pr-2' src={settings_wallet}/>
    //                   <h5>Payment Settings </h5>
    //                 </div>
    //                 <img className='arr p-3' src={arro} />
    //               </div>
    //           </div>
    //         </Link>
    //       <Link to ='notification-settings'>  
    //       <div 
    //           className={activeIndex === 2 ? 'active' : ''}
    //           onClick={() => handleClick(2)}>
    //             <div  className=' flex justify-between'>
    //               <div className=' flex p-3 items-center w-full'>
    //                 <img className=' cgrey pr-2' src={notification_seticon}/>
    //                 <h5>Notification Settings </h5>
    //               </div>
    //               <img className='arr p-3' src={arro} />
    //             </div>
    //           </div>
    //       </Link>
    //       <Link to ='privacy-settings'>  
    //       <div 
    //           className={activeIndex === 3 ? 'active' : ''}
    //           onClick={() => handleClick(3)}>
    //             <div  className=' flex justify-between'>
    //               <div className=' flex p-3 items-center w-full'>
    //                 <img className=' cgrey pr-2' src={privAndsec}/>
    //                 <h5>Privacy & Security </h5>
    //               </div>
    //               <img className='arr p-3' src={arro} />
    //             </div>
    //           </div>
    //       </Link>
    //     </div>

    //   </div>
    // </div>
    <div>
      hkjdj
    </div>
    
  )
}

export default Settings