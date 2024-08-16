
import {addIcon} from '../constants/constant';
import {typography} from '../style';

function AddAccoountBtn() {
  return (
    <div className='w-[128px]'>
        <div className='flex flex-row p-[6px] rounded-[8px] border-[1px] gap-[6px] items-center shadow-custom-150 bg-bg-white-0 border-stroke-soft-200'>
            <div>
                <img src={addIcon} />
            </div>
            <div>
                <h5 className={`${typography.labelSmall} text-text-sub-500`}>Add account</h5>    
            </div>
        </div>
    </div>
  )
}

export default AddAccoountBtn