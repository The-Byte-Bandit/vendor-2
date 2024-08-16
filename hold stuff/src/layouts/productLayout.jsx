import React, {useEffect} from 'react'
import styles, {typography} from '../style';
import ExportBtn from '../components/exportBtn';
import AddProductBtn from '../components/addProductBtn';
import CsearchIcon from '../components/search'
import CinboxIcon from '../components/inbox.jsx';
import CnotificationIcon from '../components/notification';
import { productHeadingMessage, AddProductHeadingMessage } from '../constants/constant';
import { Outlet } from 'react-router-dom';
import DurationBtn from '../components/durationBtn.jsx';
import { Link, useLocation } from 'react-router-dom';

function ProductsLayout() {

  const location = useLocation()

  useEffect(()=>{
    console.log("location",location.pathname);
    if(location.pathname.includes("products")){
      console.log("yap");
    }
    // if (location.pathname !=  currentactiveIcon|| ) {
    //     currentactiveIcon == location.pathname
        
    // } else {
    //     setShowLayout(true)
    // }

},[location])

  return (
    <div className={` w-[100%] h-full bg-backgroundGrey`}>
      <div className={`${styles.paddingMain} flex w-[100%]  pt-[20px] pb-[9px] bg-bg-white-0 `}>
        <div className='flex flex-row flex-1 justify-between  gap-[12px] '>
          <div className='flex flex-col gap-[4px]'>
            <h3 className={`${typography.labelLarge}`}> {location.pathname.includes("add-product") ? 'Add Product': 'Products'}</h3>
                  <p className={`${typography.paragraphSmall}`}>{location.pathname.includes("add-product") ? productHeadingMessage: AddProductHeadingMessage }</p>
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

      <div className={`${styles.paddingMain}  w-[100%]`}>
        <div className='flex flex-row justify-between border-b border-stroke-soft-200 pb-[10px]'>
            <div>
              <DurationBtn/>
            </div>
            
            <div className='flex flex-row  '>
              <div className=' flexitems-center'>
                <CsearchIcon/>
              </div>
              <div className='flex flex-1 flex-row gap-[12px]  items-center w-[]'>
                <ExportBtn/>
                <Link to ={`add-product`}>
                  <AddProductBtn/>
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

export default ProductsLayout