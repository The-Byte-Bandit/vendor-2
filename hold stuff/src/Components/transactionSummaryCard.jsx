import React from 'react'
import {SummaryIcon} from '../constants/constant';
import {typography} from '../style'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { useSelector } from 'react-redux';

function TransactionSummaryCard() {
    const transactionDetails = useSelector((state) => state.transactionDetails);
    



  return (
    <div className='w-[440px] max-h-[768px] '>
        <div className='w-[100%] h-[100%] flex  flex-col bg-bg-white-0 border-[1px] border-stroke-soft-200 p-[32px] rounded-[16px] gap-[40px]'>
            <div className='flex flex-col items-center gap-[8px]'>
                <div>
                    <img src={SummaryIcon} alt='send money'/>
                </div>

                <div className='flex flex-col items-center gap-[4px]'>
                    <h5 className={`${typography.titleH5Title} text-text-main-900`}>Transaction summary</h5>
                    <p className={`${typography.paragraphSmall} text-text-sub-500 text-center`}>Review summary and confirm it before finalizing your transfer.</p>
                </div>
            </div>

            <div className='w-[376px] max-h-[494px] '>
                <div className='w-[100%] h-[100%] flex flex-col bg-bg-white-0 border-[1px] border-stroke-soft-200  rounded-[20px] gap-[4px]'>
                    <div className='flex flex-col items-center gap-[4px] p-[16px]'>
                        <p className={`${typography.paragraphSmall} text-text-sub-500 text-center`}>Amount to send</p>
                        <h5 className={`${typography.titleH5Title} text-text-main-900`}>₦8,400.00</h5>
                    </div>

                    <div className='flex flex-col w-[100%]'>
                        <div className='w-[100%] h-[28px] bg-bg-weak-100 flex flex-row items-center p-[16px]'>
                            <h5 className={`$inter text-[12px] font-medium leading-[16px] tracking-subheadingXSmall text-text-soft-400 uppercase`}> Recipient Details</h5>
                        </div>

                        <div className='flex flex-col gap-[8px]  p-[16px]'>
                            <div className='flex flex-row justify-center '>
                                <p className={`${typography.paragraphSmall} text-text-sub-500 text-center`}>Recipient</p>
                                <h5 className={`${typography.labelSmall} text-text-main-900 ml-auto`}>James Brown</h5>
                            </div>
                            
                            <div className='flex flex-row justify-center'>
                                <p className={`${typography.paragraphSmall} text-text-sub-500 text-center`}>Bank</p>
                                <h5 className={`${typography.labelSmall} text-text-main-900 ml-auto`}>Summit Wallet Intl.</h5>
                            </div>
                            
                            <div className='flex flex-row justify-center'>
                                <p className={`${typography.paragraphSmall} text-text-sub-500 text-center`}>Account Number</p>
                                <h5 className={`${typography.labelSmall} text-text-main-900 ml-auto`}>123450123</h5>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col w-[100%]'>
                        <div className='w-[100%] h-[28px] bg-bg-weak-100 flex flex-row items-center p-[16px]'>
                            <h5 className={`$inter text-[12px] font-medium leading-[16px] tracking-subheadingXSmall text-text-soft-400 uppercase`}> Funding Source</h5>
                        </div>

                        <div className='flex flex-col gap-[8px]  p-[16px]'>
                            <div className='flex flex-row justify-center '>
                                <p className={`${typography.paragraphSmall} text-text-sub-500 text-center`}>From</p>
                                <h5 className={`${typography.labelSmall} text-text-main-900 ml-auto`}>Swiphr ecom account</h5>
                            </div>
                            
                            <div className='flex flex-row justify-center'>
                                <p className={`${typography.paragraphSmall} text-text-sub-500 text-center`}>Balance</p>
                                <h5 className={`${typography.labelSmall} text-text-main-900 ml-auto`}>
                                    ₦{transactionDetails.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col w-[100%]'>
                        <div className='w-[100%] h-[28px] bg-bg-weak-100 flex flex-row items-center p-[16px]'>
                            <h5 className={`$inter text-[12px] font-medium leading-[16px] tracking-subheadingXSmall text-text-soft-400 uppercase`}> Description</h5>
                        </div>

                        <div className='flex flex-col gap-[8px]  p-[16px]'>
                            <div className='flex flex-row justify-center '>
                                <p className={`${typography.paragraphSmall} text-text-sub-500 text-center`}>Sender’s Note</p>
                                <h5 className={`${typography.labelSmall} text-text-main-900 ml-auto truncate`}>Best wishes!</h5>
                            </div>
                        </div>
                    </div>

                    <div className="mb-[20px]  flex flex-row gap-[16px] px-[16px] items-center justify-center">
            
                        <button  className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] bg-bg-white-0 border-[1px] border-stroke-soft-200 rounded-[10px] h-[36px] w-[156px] text-text-sub-500 `}>
                            Discard 
                        </button> 

                        <button  className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] ml-auto bg-primary-purple-700 rounded-[10px] h-[36px] w-[156px] text-text-white-0 `}>
                            Send Money
                        </button> 

                    </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default TransactionSummaryCard