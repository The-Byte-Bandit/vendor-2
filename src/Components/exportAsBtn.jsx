
import { downloadIcon} from '../constants/constant'
import {typography} from '../style';


function ExportAsBtn() {
  return (
    <div className='flex'>
        <div className='flex flex-row gap-[8px] justify-center items-center max-w-[135px] max-h-[40px] bg-bg-white-0 shadow-custom-50 rounded-[10px] border-stroke-soft-200 border-[1px] py-[10px] px-[10px] hover:cursor-pointer'>
            <img src={downloadIcon} alt="download" />
            <h3 className={`${typography.labelSmall} text-text-sub-500`}>Export As</h3>
        </div>
    </div>
  )
}

export default ExportAsBtn