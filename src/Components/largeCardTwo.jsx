import  {useState} from 'react'
// import ViewAll from './viewAll'
// import DurationBtn from './durationBtn'
import {sortDesc, search2Line, arrowRightDoubleLine, arrowLeftDoubleLine, arrowLeftSLine, arrowRightSLine, toggle, empty, errorIcon, orangeSatusIcon, greenSatusIcon, pencilIcon, deleteIcon, arrowDown} from '../constants/constant';

import {typography} from '../style';
import { useSelector } from 'react-redux';


function LargeCardTwo() {

    // const dispatch = useDispatch();
    const cardState = useSelector((state) => state.products);
    const products = cardState.productList

    // const [toggleTransaction, setToggleTransaction] = useState("All")

    const [page, setPage] = useState(1);
    let lastPage = Math.ceil(products.length / 7);

    const [searchQuery, setSearchQuery] = useState('');

    const selectPageHandler = (selectedPage) => {
        console.log("selected page", selectedPage);
        
        if (selectedPage >= 1 && selectedPage <= Math.ceil(products.length / 7) && selectedPage !== page) {
            setPage(selectedPage);
        }else{
            console.log("error here");
        }
    };

    const [toggleTransaction, setToggleTransaction] = useState("All");

    const totalPages = Math.ceil(products.length / 7);

    //Function to generate pagination numbers

    const renderPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5; // Number of visible pages around the current page
        // const startPage = Math.max(1, Math.floor(page - maxVisiblePages / 2));
        // const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        const findStartPage =()=>{
            if (totalPages<=5){
                return 1
            }else{
                if (page<totalPages-1){
                    return Math.max(1, Math.floor(page - maxVisiblePages / 2));
                }else{
                    return totalPages-5
                }
            }
              
          }
  
          const startPage = findStartPage()
        const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      
        // Generate page number buttons
        for (let i = startPage; i <= endPage; i++) {
            console.log(startPage,  endPage);
          pages.push(
            <span
              key={i}
              className={page === i ? "p-[6px] flex justify-center items-center w-[32px] h-[32px] rounded-[6px] border-[1px] border-stroke-soft-200  text-text-main-900 bg-bg-weak-100  hover:cursor-pointer" : " text-text-sub-500 w-[32px] h-[32px] bg-bg-white-0 p-[6px] flex justify-center items-center rounded-[6px] border-[1px] border-stroke-soft-200 hover:cursor-pointer "}
              onClick={() => selectPageHandler(i)}
            >
              <h5 className={`${typography.labelSmall} `} >{i}</h5>
            </span>
          );
        }
      
        // Add ellipsis for hidden pages
        if (endPage < totalPages) {
          if (endPage === totalPages-1  ) {
            console.log("endPage",endPage);
            // pages.push(<span key="end-dots" className='text-text-sub-500 w-[32px] h-[32px] bg-bg-white-0 p-[6px] flex justify-center items-center rounded-[6px] border-[1px] border-stroke-soft-200 ' >{totalPages-1}</span>);
          }else if(endPage <= totalPages-1 || endPage <= totalPages-3){
            console.log("endPage",endPage);
            pages.push(<span key="end-dots" className='text-text-sub-500 w-[32px] h-[32px] bg-bg-white-0 p-[6px] flex justify-center items-center rounded-[6px] border-[1px] border-stroke-soft-200 ' >...</span>);
          }
          pages.push(
            <span
              key={totalPages}
              className={page === totalPages ? "p-[6px] flex justify-center items-center w-[32px] h-[32px] rounded-[6px] border-[1px] border-stroke-soft-200  text-text-main-900 bg-bg-weak-100 hover:cursor-pointer" : "text-text-sub-500 w-[32px] h-[32px] bg-bg-white-0 p-[6px] flex justify-center items-center rounded-[6px] border-[1px] border-stroke-soft-200 hover:cursor-pointer "}
              onClick={() => selectPageHandler(totalPages)}
            >
              {totalPages}
            </span>
          );
        }

        console.log(pages.length);
      
        return pages;
      };
    


  return (
    <div className='max-w-[1901px] max-h-[2000px] flex flex-1 flex-col'>
        <div className='flex flex-col flex-1 border-[1px] rounded-[16px] mb-[40px] p-[16px] gap-[16px] border-stroke-soft-200 bg-text-white-0 h-[100%]'>
            {/* <div className='flex flex-1 flex-row h-[32px]'>
                <div className='flex flex-row gap-[3px] items-center justify-center max-w-[567px]'>
                    <div><img src={clock} alt='clock' className='w-[75%]'/></div>
                    <h3 className={`${typography.labelMedium}`}>Recent Orders</h3>
                </div>
                <div className='ml-auto flex flex-row justify-center items-center'>
                    <DurationBtn/>
                    <ViewAll/>
                </div>
            </div> */}
            <div className='flex flex-row justify-between items-center '>
                <div className='w-[323px]'>
                        <div className='grid grid-cols-3 bg-bg-weak-100 rounded-[10px] py-[2px] px-[4px] '>
                        <div className={`flex justify-center rounded-[6px] hover:cursor-pointer  ${toggleTransaction === 'All' && 'bg-bg-white-0 shadow-custom-300'}`} onClick={() => setToggleTransaction('All')}>
                            <h5>All</h5>
                        </div>
                        <div className={`flex justify-center rounded-[6px] hover:cursor-pointer  ${toggleTransaction === 'Active' && 'bg-bg-white-0 shadow-custom-300'}`} onClick={() => setToggleTransaction('Active')}>
                            <h5>Active</h5>
                        </div>
                        <div className={`flex justify-center rounded-[6px] hover:cursor-pointer  ${toggleTransaction === 'Absent' && 'bg-bg-white-0 shadow-custom-300'}`} onClick={() => setToggleTransaction('Absent')}>
                            <h5>Absent</h5>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row gap-[12px]'>
                    <div className='flex flex-row gap-[4px] justify-center items-center '>
                        <img src={search2Line} alt='search' />
                        <input
                            type="text"
                            placeholder=" Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={` ${typography.paragraphSmall} border-[1px] border-stroke-soft-200 bg-bg-white-0 rounded-[8px] w-[264px] h-[36px] `} // Add appropriate CSS class for styling
                        />
                    </div>

                    <div>
                        <div className='flex flex-row gap-[4px] p-[8px] border-[1px] border-stroke-soft-200 bg-bg-white-0 rounded-[8px]'>
                            <img src={sortDesc} alt='sort'/>
                            <h5 className={` ${typography.paragraphSmall} text-text-sub-500`}>Sort by</h5>
                            <img src={arrowDown} alt='sort'/>
                        </div>
                    </div>

                    <div>
                        <div className='flex flex-row gap-[4px] p-[8px] border-[1px] border-stroke-soft-200 bg-bg-white-0 rounded-[8px]'>
                            <h5 className={` ${typography.paragraphSmall} text-text-sub-500`}>Filter</h5>
                            <img src={arrowDown} alt='sort'/>
                        </div>
                    </div>

                </div>

                
            </div>


            <div className='grid grid-cols-12 w-[100%px] h-[100%] min-h-[447px]'>
                <div className='col-span-3'>
                    <div className=' bg-bg-weak-100 h-[34px] flex flex-1 flex-row gap-[4px] rounded-[8px] '>
                        <div className=' flex flex-row items-center max-w-[318px]  py-[8px] px-[16px] gap-[10px]' >
                                <div>
                                    <input type="checkbox"/>
                                </div>
                                <div className={` flex flex-row max-w-[186px] items-center gap-[10px]`}>
                                    <h3 className={`${typography.paragraphSmall}`}>Product</h3>
                                        <div>
                                            <img src={toggle} alt='toggle'/>
                                        </div>
                                </div>
                            </div>
                    </div>

                    <div className='mt-[16px]'>
                        {products &&(
                                <div>
                                    {products.slice(page * 7 - 7, page * 7).map((items, index)=>{
                                        return(
                                            <div key={index} className='border-b-stroke-soft-200 border-b-[1px]' >
                                                <div className='flex flex-row h-[56px] gap-[8px] rounded-[12px] items-center py-[8px] px-[8px] '>
                                                    <div>
                                                        <img src={items.icon} alt='icon'/>
                                                    </div>
                                                    <div className='flex flex-col  max-w-[529px] h-[44px] '>
                                                        <h5 className={`${typography.labelSmall} text-text-main-900`}>
                                                            {items.productName}
                                                        </h5>
                                                        <p className={`${typography.paragraphXSmall}`}>
                                                            {items.productSKU}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                    </div>
                </div>

                <div className=''>
                    <div className='bg-bg-weak-100 h-[34px] flex flex-1 flex-row gap-[4px] rounded-[8px] '>

                        <div className='max-w-[114px] w-[100%] items-center py-[8px] px-[10px] '>
                                <div className={` flex flex-row flex-nowrap max-w-[160px] items-center gap-[10px]`}>
                                    <h3 className={`${typography.paragraphSmall} truncate`}>Price</h3>
                                    <div>
                                        <img src={toggle} alt='toggle'/>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className='mt-[16px]'>
                        {products &&(
                                <div>
                                    {products.slice(page * 7 - 7, page * 7).map((items, index)=>{
                                        return(
                                            <div key={index} className='border-b-stroke-soft-200 border-b-[1px]' >
                                                <div className='flex flex-row h-[56px] gap-[8px] rounded-[12px] items-center py-[8px] px-[8px] '>
                                                    <div className='flex flex-col  max-w-[529px] h-[44px] items-center justify-center '>
                                                        <h5 className={`${typography.labelSmall} text-text-main-900`}>
                                                            ₦{items.productPrice}
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                    </div>
                </div>

                <div className='col-span-2'>
                    <div className='bg-bg-weak-100 h-[34px] flex flex-1 flex-row gap-[4px] rounded-[8px] '>
                        <div className='max-w-[160px] w-[100%] py-[8px] px-[12px]'>
                                <div className={` flex flex-row items-center gap-[10px]`}>
                                <h3 className={`${typography.paragraphSmall}`}>Category</h3>
                                    <div>
                                        <img src={toggle} alt='toggle'/>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className='mt-[16px]'>
                        {products &&(
                                <div>
                                    {products.slice(page * 7 - 7, page * 7).map((items, index)=>{
                                        return(
                                            <div key={index} className='border-b-stroke-soft-200 border-b-[1px]' >
                                                <div className='flex flex-row h-[56px] gap-[8px] rounded-[12px] items-center py-[8px] px-[8px] '>
                                                 <div className='flex flex-row flex-1 max-w-[529px] h-[44px] gap-[16px] items-center justify-center'>
                                                        {items.productCategory.map((category, categoryIndex) => (
                                                            <div key={categoryIndex} style={{ color: category.fontColor ,  backgroundColor: category.bgColor }} className='h-[20px] py-[2px] px-[8px] rounded-[999px] flex  justify-center items-center'>
                                                                <h5  className={`${typography.labelXSmall} flex flex-row justify-center items-center`} >
                                                                    {category.name}
                                                                </h5>
                                                            </div>
                                                        
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                    </div>
                </div>

                <div className=''>
                    <div className='bg-bg-weak-100 h-[34px] flex flex-1 flex-row gap-[4px] rounded-[8px] '>
                        <div className='max-w-[104px] w-[100%] items-center py-[8px] px-[10px]'>
                                <div className={` flex flex-row flex-nowrap max-w-[160px] items-center gap-[10px]`}>
                                    <h3 className={`${typography.paragraphSmall} truncate`}>Sales</h3>
                                    <div>
                                        <img src={toggle} alt='toggle'/>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className='mt-[16px]'>
                        {products &&(
                                <div>
                                    {products.slice(page * 7 - 7, page * 7).map((items, index)=>{
                                        return(
                                            <div key={index} className='border-b-stroke-soft-200 border-b-[1px]' >
                                                <div className='flex flex-row h-[56px] gap-[8px] rounded-[12px] items-center py-[8px] px-[8px] '>
                                                    <div className='flex flex-col  max-w-[529px] h-[44px] items-center justify-center '>
                                                        <h5 className={`${typography.paragraphSmall} text-text-main-900`}>
                                                            {items.productSale}
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                    </div>
                </div>

                <div className='col-span-2'>
                    <div className=' bg-bg-weak-100 h-[34px] flex flex-1 flex-row gap-[4px] rounded-[8px] '>
                        <div className=' w-[70%] items-center py-[8px] px-[10px]'>
                                <div className={` flex flex-row flex-nowrap max-w-[160px] items-center gap-[10px]`}>
                                    <h3 className={`${typography.paragraphSmall} truncate`}>Stock Level</h3>
                                    <div>
                                        <img src={toggle} alt='toggle'/>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className='mt-[16px]'>
                        {products &&(
                                <div>
                                    {products.slice(page * 7 - 7, page * 7).map((items, index)=>{
                                        return(
                                            <div key={index} className='border-b-stroke-soft-200 border-b-[1px]' >
                                                <div className='flex flex-row h-[56px] gap-[8px] rounded-[12px] items-center py-[8px] px-[8px] '>
                                                    <div className='flex flex-col  max-w-[529px] h-[44px] items-center justify-center '>
                                                        <h5 className={`${typography.paragraphSmall} text-text-main-900`}>
                                                            {items.productStockLevel}
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                    </div>
                </div>

                <div className='col-span-3'>
                    <div className='bg-bg-weak-100 h-[34px] flex flex-1 flex-row gap-[4px] rounded-[8px] '>

                        <div className=' py-[8px] px-[12px]'>
                            <div className={` flex flex-row max-w-[80px] items-center gap-[10px]`}>
                                <h3 className={`${typography.paragraphSmall}`}>Satus</h3>
                                <div>
                                    <img src={toggle} alt='toggle'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-[16px] '>
                        {products &&(
                                <div>
                                    {products.slice(page * 7 - 7, page * 7).map((items, index)=>{
                                        return(
                                            <div key={index}  className='flex flex-row border-b-stroke-soft-200 border-b-[1px]'>
                                                <div className=''>
                                                    <div className='flex flex-row h-[44px] gap-[8px] rounded-[12px] items-center py-[8px] px-[8px] '>
                                                        <div className='flex flex-row max-w-[104px] py-[4px] px-[2px] gap-[4px] items-center rounded-[6px] border-[1px] border-stroke-soft-200 '>
                                                            <div>
                                                                {items.productStatus === "Out Of Stock" && <img src={errorIcon} alt='Out Of Stock'/> || items.productStatus === "Low stock" && <img src={orangeSatusIcon} alt='Low Stock'/> || items.productStatus === "Active" && <img src={greenSatusIcon} alt='Active'/> }
                                                            </div>
                                                            <h5 className={`${typography.labelXSmall} text-text-sub-500`}>{items.productStatus}</h5>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='flex flex-row h-[56px] gap-[8px] rounded-[12px] items-center py-[8px] px-[8px] ml-auto '>
                                                    <div className='flex flex-row gap-[23px]  max-w-[529px] h-[44px] items-center justify-center '>
                                                        <img src={deleteIcon} alt='bin'/>
                                                        <img src={pencilIcon} alt='pencil'/>  
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>

                </div>
            </div>




            {products.length === 0 && (
                <div className='w-[100%] h-[500px] flex items-center justify-center  '>
                    <div className=' flex flex-col w-[100%] h-[100%] justify-center items-center'>

                        <div className='flex justify-center'>
                            <img src={empty} alt='empty'/>
                        </div>
                        <div>
                            <h3 className={`${typography.paragraphSmall} text-center text-text-soft-400`}>
                            No records of spendings yet <br/>Please check back later
                            </h3>
                        </div>
                    </div>
            </div>
            ) }

        </div>

        <div className='flex flex-row gap-[24px] items-center w-[100%] justify-between'>
            <div>
                <h5 className={`${typography.paragraphSmall} text-center text-text-sub-500`}>Pages {page} of {lastPage}</h5>
            </div>
            <div className='flex flex-row  gap-[10px]'>
                <img src={arrowLeftDoubleLine} className='hover:cursor-pointer' alt='left' onClick={() => selectPageHandler(1)}  />
                {products.length > 0 && (
                    <div className='flex flex-1 justify-center items-center gap-[8px]'>
                        <span
                            onClick={() => selectPageHandler(page - 1)}
                            className={`pagination__nav ${page === 1 && "pagination__disabled"} hover:cursor-pointer`}
                        >
                            <img src={arrowLeftSLine} className='hover:cursor-pointer' alt='left'/>
                        </span>
                        {renderPageNumbers()}
                        <span
                            onClick={() => selectPageHandler(page + 1)}
                            className={`pagination__nav ${page === totalPages && "pagination__disabled"} hover:cursor-pointer`}
                        >
                            <img src={arrowRightSLine} className='hover:cursor-pointer' alt='right'/>
                        </span>
                    </div>
                )}
                <img src={arrowRightDoubleLine} className='hover:cursor-pointer' alt='right' onClick={() => selectPageHandler(lastPage)}/>

            </div>

            <div>
                <div className='flex flex-row justify-center gap-[4px] items-center rounded-[8px] p-[6px] bg-bg-white-0 border-[1px] border-stroke-soft-200 w-[97px] h-[32px]  '>
                    <h5 className={`${typography.paragraphSmall} text-center text-text-main-900`}>8 / Pages</h5>
                    <img src={arrowDown} alt='arrow'/>
                </div>
            </div>

        </div>

    </div>
  )
}

export default LargeCardTwo