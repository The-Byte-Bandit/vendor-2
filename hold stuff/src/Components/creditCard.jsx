import React from 'react'
import { masterCard, masterCardBalance, cardTexture} from '../constants/constant';
import {typography} from '../style';


function CreditCard() {

// Get the current date
const currentDate = new Date();

// Get the day (1-31)
const day = currentDate.getDate();

// Get the month (0-11, where 0 represents January)
let month;
switch (currentDate.getMonth() + 1) {
    case 1:
        month = "January";
        break;
    case 2:
        month = "February";
        break;
    case 3:
        month = "March";
        break;
    case 4:
        month = "April";
        break;
    case 5:
        month = "May";
        break;
    case 6:
        month = "June";
        break;
    case 7:
        month = "July";
        break;
    case 8:
        month = "August";
        break;
    case 9:
        month = "September";
        break;
    case 10:
        month = "October";
        break;
    case 11:
        month = "November";
        break;
    case 12:
        month = "December";
        break;
    default:
        month = "Invalid month"; // Handle unexpected month values
        break;
}

// Get the year (four digits)
const year = currentDate.getFullYear();

// Output the results
console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);




  return (
    <div className=''>
        <div className='relative bg-bg-surface-700 w-[320px] max-h-[280px]  flex flex-col border-[1px] rounded-[12px] p-[14px] border-stroke-soft-200 gap-[4px]'>
            <div>
                <img src={masterCard} alt='mastercard'/>
            </div>

            <div className='flex flex-col gap-[8px]'>
                <p className={`${typography.paragraphSmall} text-text-white-0`}>Wallet Balance</p>
                <h3 className={`text-text-white-0 inter font-medium text-[32px] leading-20 tracking-paragraphSmall`}>₦{masterCardBalance}</h3>
            </div>
            <div>
                <p className={`${typography.paragraphXSmall} text-text-white-0`}>
                Cashback of {month}, {year}
                </p>
            </div>
            <div className='absolute right-[0%] top-[0%]'>
                <img src={cardTexture} alt='cardTexture'/>
            </div>
        </div>
    </div>
  )
}

export default CreditCard