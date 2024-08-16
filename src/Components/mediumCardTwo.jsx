
import DurationBtn from './durationBtn'
import { clock, toggle, empty} from '../constants/constant';
import {typography} from '../style';

function MediumCardTwo() {
  return (
    <div className='max-w-[1900px] max-h-[660px] md:h-[660px]'>
        <div className='flex flex-col flex-1 border-[1px] h-[100%] rounded-[16px] p-[16px] gap-[16px] border-stroke-soft-200 bg-text-white-0'>
            <div className='flex flex-1 flex-row h-[32px]'>
                <div className='flex flex-row gap-[3px] items-center justify-center max-w-[567px]'>
                  <div><img src={clock} alt='clock' className='w-[75%]'/></div>
                  <h3 className={`${typography.labelMedium}`}>Recent Orders</h3>
                </div>
                <div className='ml-auto'><DurationBtn/></div>
            </div>

            <div className='bg-bg-weak-100 h-[34px] flex flex-1 flex-row gap-[10px] rounded-[8px]'>
              <div className=' flex flex-row items-center  w-[35%] py-[8px] px-[16px] gap-[10px]'>
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

              <div className='max-w-[184px] w-[35%] items-center py-[8px] px-[10px]'>
              <div className={` flex flex-row flex-nowrap max-w-[160px] items-center gap-[10px]`}>
                  <h3 className={`${typography.paragraphSmall} truncate`}>Customer Name</h3>
                <div>
                  <img src={toggle} alt='toggle'/>
                  </div>
                </div>
              </div>

              <div className='max-w-[100px] py-[8px] px-[12px]'>
              <div className={` flex flex-row max-w-[76px] items-center gap-[10px]`}>
                  <h3 className={`${typography.paragraphSmall}`}>Amount</h3>
                <div>
                  <img src={toggle} alt='toggle'/>
                  </div>
                </div>
              </div>

              <div className='w-[104px] py-[8px] px-[12px]'>
              <div className={` flex flex-row max-w-[80px] items-center gap-[10px]`}>
                  <h3 className={`${typography.paragraphSmall}`}>Satus</h3>
                <div>
                  <img src={toggle} alt='toggle'/>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-[100%] h-[100%] flex items-center '>
              <div className=' flex flex-col w-[100%] justify-center items-center'>

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
        </div>
    </div>
  )
}

export default MediumCardTwo