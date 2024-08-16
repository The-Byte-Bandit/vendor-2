import React from 'react'
import DurationBtn from './durationBtn'
import { pieChart, empty, laptopIcon, miniClock, shoppingicon, utilitiesIcon, othersIcon, infoIcon} from '../constants/constant';
import {typography} from '../style';
import SeeAll from './seeAll';
import { useSelector, useDispatch } from 'react-redux';
import GuageChart from "./guageChart"

function VerticalCard(props) {

  const dispatch = useDispatch();
  const cardState = useSelector((state) => state.dashboard);



  return (
    <div className='flex flex-1 max-w-[700px] max-h-[486px]'>
        <div className='flex  flex-1 flex-col h-[100%] w-[100%] md:w-[100%] p-[16px] rounded-[16px] border-[1px] shadow-custom-150 bg-bg-white-0 border-stroke-soft-200'>
            <div className='flex flex-1 flex-row w-[100%]'>
                <div className='p-[1px] flex flex-row gap-[3px] items-center justify-center'>
                    <div className=' w-full'>
                    {props.type === "earningCategory" || props.type === "EarningCategory" ? (
                        <img src={pieChart} alt='icon'/> 
                      ) : (
                        props.type === "TopProduct" || props.type === "topProduct" ? (
                          <img src={laptopIcon} alt='icon'/> 
                        ) : null
                    )}
                    
                    {/* <img src={props.type === "earningCategory" || props.type === "EarningCategory" ? pieChart : props.type === "topPerformingProduct" || props.type === "TopPerformingProduct" ? laptopIcon: null } alt='icon' className='w-[75%]'/> */}
                   </div>
                    <h3 className={`${typography.labelMedium} text-text-main-900 text-nowrap` } style={{fontSize: '13px'}}>{props.type === "earningCategory" || props.type === "EarningCategory" ? "Earning Categories" : (props.type === "topProduct" || props.type === "topProduct" ? "Top Performing Products" : (props.type === "spendingSummary" || props.type === "SpendingSummary" ? "Spending Summary" :null))}</h3>
                </div>
                <div className='ml-auto'>
                    {props.type === "topProduct" || props.type === "TopProduct" ? <DurationBtn/>:(props.type === "earningCategory" || props.type === "EarningCategory" ? <SeeAll/>: null ) }   
                </div>
            </div>
            
            {cardState.topProducts.length === 0 && (
              <div className='flex flex-col w-[100%] h-[100%] justify-center items-center'>
                <div className='flex justify-center'>
                  <img src={empty} alt='empty'/>
                </div>
                <div>
                  <h3 className={`${typography.paragraphSmall} text-center text-text-soft-400`}>
                  No records of spendings yet <br/>Please check back later
                  </h3>
                </div>
              </div>

            )}
            {cardState.topProducts.length > 0 && (props.type === "topProduct" || props.type === "TopProduct") &&(
              <div className='flex flex-col w-[100%] h-[100%] gap-[16px] mt-[8px] '>
                <div className='bg-stroke-soft-200 h-[1px] rounded-none w-[100%] mt-[5px] mb-[4px]'> </div>
                  {cardState.topProducts.slice(0,5).map((item, index)=>{
                    return(
                      <div key={index} className='flex flex-row gap-[16px] h-[44px] px-[6px] '>
                        <div>
                          <img src={item.avatar} alt={'avatar'} />
                        </div>
                        <div className='fllex gap-[4px] w-[190px] h-[40px] '>
                          <h5 className={`${typography.paragraphSmall} truncate`} >{item.product}</h5>
                          <p className={`${typography.paragraphXSmall}`}>{item.rank} </p>
                        </div>
                        <div className='flex ml-auto items-center justify-center '>
                          <span className='flex items-center flex-row gap-[2px] rounded-[999px] px-[8px] py-[2px] bg-[#FFDAC2] '>
                            <div><img src={miniClock} alt='miniClock'/></div>
                            <h5 className={`${typography.paragraphXSmall}`}>{item.time}</h5>
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
            )}

            {cardState.SpendingSummary.length > 0 && (props.type === "earningCategory" || props.type === "EarningCategory" ) &&(
              <div className='flex flex-col gap-[4px] h-[100%] '>
              <div className='bg-stroke-soft-200 h-[1px] rounded-none w-[100%] mt-[5px] mb-[4px]'> </div>
                <div>
                  <GuageChart
                    chartData = {[cardState.SpendingSummary[0].shopping, cardState.SpendingSummary[0].utilities, cardState.SpendingSummary[0].others]}
                  />
                </div>
                
                <div className='bg-stroke-soft-200 h-[1px] rounded-none w-[100%] mt-[5px] mb-[4px]'> </div>
                <div className='grid  grid-cols-3'>
                  <div className='flex flex-col gap-[12px] justify-center items-center border-r-[1px] border-stroke-soft-200 '>
                    <div>
                      <img src={shoppingicon} alt='icon' />
                    </div>
                    <div className='flex flex-col items-center gap-[12px]'>
                      <p className={`${typography.paragraphSmall}`}>Wears</p>
                      <h5 className={`${typography.labelSmall} text-text-main-900`}>{cardState.SpendingSummary[0].shopping}</h5>
                    </div>
                    <div></div>
                  </div>

                  <div className='flex flex-col gap-[12px] justify-center items-center border-r-[1px] border-stroke-soft-200'>
                    <div>
                    <img src={utilitiesIcon} alt='icon' />
                    </div>
                    <div className='flex flex-col items-center gap-[12px]'>
                      <p className={`${typography.paragraphSmall}`}>Electronics</p>
                      <h5 className={`${typography.labelSmall} text-text-main-900`}>{cardState.SpendingSummary[0].utilities}</h5>
                    </div>
                    <div></div>
                  </div>

                  <div className='flex flex-col gap-[12px] justify-center items-center '>
                    <div>
                      <img src={othersIcon} alt='icon' />
                    </div>
                    <div className='flex flex-col items-center gap-[12px]'>
                      <p className={`${typography.paragraphSmall}`}>Others</p>
                      <h5 className={`${typography.labelSmall} text-text-main-900`}>{cardState.SpendingSummary[0].others}</h5>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div className='flex flex-1  w-[100%]'>
                  <div className='flex items-center h-[28px] w-[2970px] gap-[4px] p-[6px] border-[1px] border-stroke-soft-200 rounded-[8px] '>
                    <p className={`${typography.paragraphXSmall} text-text-sub-500`}>Your weekly spending limit is <span className={`${typography.labelSmall} text-text-main-900`}>₦2000.</span></p>
                    <div className='flex ml-auto'>
                      <img src={infoIcon} alt='icon' />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            
            
        </div>
    </div>
  )
}

export default VerticalCard