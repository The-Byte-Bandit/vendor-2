
import styles, { typography } from '../style';
import CardArrow from './cardArrow';
import PropTypes from 'prop-types';


function SmallCard(props) {
    // const [heading, figure] = props;

    return (
        <div className='flex flex-col flex-1  max-w-[800px] max-h-[229px]'>
            <div className={`${styles.cardCorner} bg-bg-white-0 gap-[28px] flex flex-col flex-1 justify-between w-[100%] shadow-custom-150 `}>
                <div className=''>
                    <CardArrow />
                </div>
                <div className='flex flex-1 flex-col mt-auto justify-evenly'>
                    <p className={`${typography.paragraphSmall}`}>{props.heading}</p>
                    <div className='flex flex-row items-center gap-[4px] justify-between'>
                        <h3 className='inter text-medium text-[32px] leading-20 text-text-main-900 truncate '>₦{props.amount} </h3>
                        <div className='h-[16px] w-[34px] flex items-center justify-center'>
                            {props.percentage && <span className={`${typography.subheading2XSmall} bg-[#F8C9D2] text-[#710E21] rounded-[999px] py-[2px] px-[6px] h-[100%] w-[100%] flex items-center justify-center `}>{props.difference}%</span>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


SmallCard.propTypes = {
    difference: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
      // Adjust this if `type` is optional
  };
  
export default SmallCard;
