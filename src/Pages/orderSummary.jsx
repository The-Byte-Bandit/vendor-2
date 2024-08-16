
import PropTypes from 'prop-types';
import { typography } from '../style';
import { whiteArrowRight, secondArrowLeft, secondWhiteAddIcon } from '../constants/constant';
import { useSelector } from 'react-redux';


const OrderSummary = ({currentStep, totalSteps, handleNext, handleBack}) => {

  const customerOrderInfo = useSelector((state)=> state.orders)

  const isSubmitting = ()=>{
    return
  }
  

  return (
    <div className='w-[605px] h-[528px] flex flex-col flex-1 gap-[4px] mb-[40px]'>
      <div className='flex flex-col flex-1 gap-[40px]'>
        <div className='w-[100%] bg-bg-white-0 border-stroke-soft-200 border-[1px] h-[288px] rounded-[12px] p-[24px] flex flex-col gap-[14px]'>
          <div className='flex flex-col gap-[4px] w-[100%]'>
            <h5 className={`${typography.labelMedium} text-text-main-900`}>Summary</h5>
            <p className={`${typography.paragraphXSmall} text-text-soft-400`}>Please confirm your order so it can be saved in the system</p>
          </div>

          <div className='bg-stroke-soft-200 h-[1px] rounded-none w-[100%]  mb-[2px]'> </div>
          
          <div className='flex flex-1 flex-col gap-[16px]'>
            <h5 className={`${typography.paragraphSmall} text-text-main-900`}>FullName: <span className={`${typography.paragraphXSmall} text-text-soft-400`}>{customerOrderInfo.customerName}</span></h5>
            <h5 className={`${typography.paragraphSmall} text-text-main-900`}>Phone number: <span className={`${typography.paragraphXSmall} text-text-soft-400`}>{customerOrderInfo.customerPhoneNumber}</span></h5>
            <h5 className={`${typography.paragraphSmall} text-text-main-900`}>Email Address: <span className={`${typography.paragraphXSmall} text-text-soft-400`}>{customerOrderInfo.customerEmail}</span></h5>
            <h5 className={`${typography.paragraphSmall} text-text-main-900`}>Delivery Address: <span className={`${typography.paragraphXSmall} text-text-soft-400`}>{customerOrderInfo.streetAddress}</span></h5>  
            <h5 className={`${typography.paragraphSmall} text-text-main-900`}>Delivery Address: <span className={`${typography.paragraphXSmall} text-text-soft-400`}>Number 19 kalejaiye street, shomolu ,Lagos, Nigeria</span></h5>
          </div>

        </div>

        <div className='w-[100%] bg-bg-white-0 border-stroke-soft-200 border-[1px] min-h-[362px] rounded-[12px] p-[24px] flex flex-col gap-[14px]'>
          <div className='flex flex-col gap-[4px] w-[100%]'>
            <h5 className={`${typography.labelMedium} text-text-main-900`}>Info Summary</h5>
            <p className={`${typography.paragraphXSmall} text-text-soft-400`}>Here is a summary note for the headline?</p>
          </div>

          <div className='bg-stroke-soft-200 h-[1px] rounded-none w-[100%] mt-[2px] mb-[2px]'> </div>

          <div className='flex flex-col gap-[16px]'>
            <div className='h-[78px] flex flex-row gap-[8px]'>
              <div className='h-[100%]'> img</div>

              <div className='flex flex-col gap-[4px] w-[100%]'>
                <h5 className={`${typography.labelMedium} text-text-main-900`}>{customerOrderInfo.products[0].productName}</h5>
                <p className={`${typography.paragraphXSmall} text-text-soft-400 truncate`}>Small description on the product</p>
              </div>

              <div>
                <p className={`${typography.paragraphXSmall} text-text-main-900 truncate`}>{customerOrderInfo.products[0].price}</p>
              </div>
            </div>
          </div>
          
          <div className='flex flex-col gap-[24px]'>
            <div className='h-[94px] flex flex-col gap-[10px]'>
              <div className='flex flex-row justify-between'>
                <h5 className={`${typography.labelMedium} text-text-soft-400`}>Subtotal</h5>
                <p className={`${typography.paragraphXSmall} text-text-main-900 truncate`}>{customerOrderInfo.subtotal}</p>
              </div>

              <div className='flex flex-row justify-between'>
                <h5 className={`${typography.labelMedium} text-text-soft-400`}>Delivery Fee</h5>
                <p className={`${typography.paragraphXSmall} text-text-main-900 truncate`}>₦24,000.00</p>
              </div>

              <div className='flex flex-row justify-between'>
                <h5 className={`${typography.labelMedium} text-text-soft-400`}>Discount</h5>
                <p className={`${typography.paragraphXSmall} text-text-main-900 truncate`}>{customerOrderInfo.discount}</p>
              </div>

              <div className='flex flex-row justify-between'>
                <h5 className={`${typography.labelMedium} text-text-soft-400`}>VAT</h5>
                <p className={`${typography.paragraphXSmall} text-text-main-900 truncate`}>{customerOrderInfo.vat}</p>
              </div>
            </div>

           

        </div>
        <div className='bg-stroke-soft-200 h-[1px] rounded-none w-[100%] mt-[25px] mb-[2px]'> </div>

        <div className='flex flex-row justify-between'>
            <h5 className={`${typography.labelMedium} text-text-soft-400`}>Total</h5>
            <p className={`${typography.paragraphXSmall} text-text-main-900 truncate`}>{customerOrderInfo.total}</p>
          </div>
        </div>
      </div>
      
      
            <div className="navigation flex flex-row py-[8px] ">
        {currentStep > 1 && 
            <button onClick={handleBack} className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] bg-bg-white-0 border-stroke-soft-200 border-[1px] rounded-[10px] h-[38px] w-[80px] text-text-sub-500 `}>
            <span><img src={secondArrowLeft} className='w-[100%] ' alt='arrow'/> </span> Back
            </button>}
            
        {currentStep < totalSteps ? 
        <button  disabled={isSubmitting} className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] ml-auto bg-primary-purple-700 rounded-[10px] h-[38px] w-[80px] text-text-white-0 `}>
        Next <span><img src={whiteArrowRight} className='w-[100%] ' alt='arrow'/> </span>
        </button> : 
        <button onClick={handleNext} disabled={isSubmitting} className={`${typography.labelSmall} flex flex-row gap-[4px] items-center justify-center p-[10px] ml-auto bg-primary-purple-700 rounded-[10px] h-[38px] w-[] text-text-white-0 `}>
        <span><img src={secondWhiteAddIcon} className='w-[100%] ' alt='arrow'/> </span>
        Next</button> 
        }
      </div>
    </div>
  );
};


OrderSummary.propTypes = {
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
};


export default OrderSummary;

