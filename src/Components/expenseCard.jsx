
import {typography} from '../style';
import {barChartBoxLine} from '../constants/constant'
import DurationBtn from './durationBtn';


function ExpenseCard() {


  return (
    <div className='w-[352px] max-h-[278px]'>
        <div className=' p-[16px]  bg-bg-white-0  flex flex-col border-[1px] rounded-[12px] border-stroke-soft-200 justify-between gap-[13px] h-[100%] w-[100%]'>
            <div className='flex flex-row gap-[8px] items-center justify-between'>
                <div className='flex flex-row gap-[8px] items-center'>
                    <img src={barChartBoxLine} alt=''/>
                    <h5 className={`${typography.labelMedium} text-text-main-900`}>Expense Breakdown</h5>
                </div>
                <div><DurationBtn/></div>
            </div>

            <div className='bg-stroke-soft-200 h-[1px] rounded-none w-[100%] mt-[5px]'> </div>

            <div className='flex flex-col'>
                <h5 className={`${typography.labelMedium} text-text-soft-400`}>You dont have an account </h5>
                <p className={`${typography.paragraphSmall} text-text-soft-400`}>Apply for an account to get your funds withdrawn easily and swiftly.</p>
            </div>
        </div>

        
    </div>
  )
}

export default ExpenseCard