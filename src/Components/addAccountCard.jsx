
import { clock} from '../constants/constant';
import {typography} from '../style';
import AddAccoountBtn from './addAccoountBtn';

function AddAccountCard() {
  return (
    <div className='w-[352px] max-h-[178px]'>
        <div className='flex  flex-col p-[16px] gap-[16px] justify-between rounded-16px] border-[1px] shadow-custom-150 bg-bg-white-0 border-stroke-soft-200'>
            <div className='flex flex-row flex-1'>
                <div className='flex flex-row gap-[8px] items-center'>
                  <img src={clock} />
                  <h5 className={`${typography.labelMedium} text-text-main-900`}>Bank</h5>
                </div>
                <div className='ml-auto'>
                  <AddAccoountBtn/>
                </div>
            </div>
            <div className='bg-stroke-soft-200 h-[1px] rounded-none w-[100%] mt-[5px]'> </div>
            <div className='flex flex-col flex-1'>
              <p className={`${typography.paragraphMedium} text-text-soft-400`}>You dont have an account </p>
              <p className={`${typography.paragraphXSmall} text-text-soft-400`}>Apply for an account to get your funds  withdrawn easily and swiftly.</p>
            </div>
        </div>
    </div>
  )
}

export default AddAccountCard