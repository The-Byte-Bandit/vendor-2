import React from 'react'
import {sendMoneyIcon,userFollowFill, sendPlaneLine} from '../constants/constant';
import {typography} from '../style'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import {useDispatch } from 'react-redux';
import { updateTransactionDetails } from '../features/transaction';

function WithdrawCard() {

    const dispatch = useDispatch();

    const handleWithdrawalInfoSubmit = (values) => {
        console.log("this wan");
        dispatch(updateTransactionDetails(values));
        console.log("that wan");
      };

    const validationSchema = Yup.object({
        accountNumber: Yup.string()
          .min(7, "Account number must be at least 7 characters.")
          .max(15, "Account number name must be less than 15 characters.")
          .required("Account number name is required"),
        ammount: Yup.number()
        .min(7, "Ammount must be at least 10 naira.")
        .max(100000000, "Ammount must be less than 100,000,000 naira.")
        .required("Ammount is required"),
        bankName: Yup.string()
          .required('Bank name is required')
          .min(2, 'Bank name  is too short')
          .max(15, 'Bank name  is too long'),
        description: Yup.string()
      });
    
      const bankOptions = [
        { value: 'EcoBank', label: 'EcoBank' },
        { value: 'Opay', label: 'Opay' }
      ];
    



  return (
    <div className='w-[440px] max-h-[692px]'>
        <div className='w-[100%] h-[100%] flex flex-col bg-bg-white-0 border-[1px] border-stroke-soft-200 p-[32px] rounded-[16px]'>
            <div className='flex flex-col items-center gap-[8px]'>
                <div>
                    <img src={sendMoneyIcon} alt='send money'/>
                </div>

                <div className='flex flex-col items-center gap-[4px]'>
                    <h5 className={`${typography.titleH5Title} text-text-main-900`}>Withdraw money</h5>
                    <p className={`${typography.paragraphSmall} text-text-sub-500`}>Enter your bank account details</p>
                </div>
            </div>

            <div>
                <Formik
                    initialValues={{
                    accountNumber: '',
                    ammount: '',
                    bankName: '',
                    description: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        console.log(values)
                        // handleCustomerInfoSubmit(values);
                        handleWithdrawalInfoSubmit()
                        setSubmitting(false);
                    }, 400);
                    }}
                >

                    {({ values, errors, setFieldValue, isSubmitting }) => (
                        <Form className='flex flex-col flex-1 gap-[40px] justify-center'>
                        <div className=''>
                            <div className='flex flex-row flex-1 items-center'>
                                <label htmlFor='bankName' className='flex flex-col flex-1 h-[82px]'>
                                    <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                                        Select bank
                                    </h5>
                                    <div className='w-[100%]'>
                                    <Select
                                        name='bankName'
                                        value={bankOptions.find(option => option.label === values.bankName)}
                                        onChange={(selectedOption) => setFieldValue('bankName', selectedOption.value)}
                                        options={bankOptions}
                                        placeholder='Access Bank'
                                        isSearchable={false}
                                        components={{
                                        IndicatorSeparator: () => null
                                        }}
                                        styles={{
                                        control: (provided, state) => ({
                                            ...provided,
                                            borderColor: errors.bankName ? 'red' : (state.isFocused ? '#DCDCDC' : '#DCDCDC'),
                                            width: '100%',
                                            borderRadius: '10px',
                                            boxShadow: 'none',
                                            height: '40px'
                                        }),
                                        menu: (provided, state) => ({
                                            ...provided,
                                            borderColor: state.menuIsOpen ? '#DCDCDC' : '#DCDCDC',
                                            borderRadius: '10px',
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }),
                                        option: (provided, state) => ({
                                            ...provided,
                                            backgroundColor: state.isFocused ? '#F6F8FA' : state.isSelected ? '#DCDCDC' : null,
                                            color: '#0A0D14',
                                            borderRadius: '8px'
                                        })
                                        }}
                                    />
                                    {errors.bankName && <p className='text-[11px] text-[#DC143C]'>{errors.bankName}</p>}
                                    </div>
                                </label>
                            </div>


                            <div className='flex flex-row flex-1 items-center'>
                                <label htmlFor='accountNumber' className='flex flex-col flex-1 h-[82px]'>
                                    <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                                        Account number{' '}
                                    </h5>
                                    <Field
                                    className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
                                    name='accountNumber'
                                    placeholder='0121233445'
                                    />
                                    <div className='flex flex-row gap-[4px] mt-[2px]'>
                                        <div>
                                            <img src={userFollowFill} alt='user'/>
                                        </div>
                                        <div>
                                            <h5 className={`${typography.paragraphSmall} text-text-sub-500`}>Oduneye Oluwafemi David</h5>
                                        </div>
                                    </div>
                                    <ErrorMessage name='accountNumber' component='p' className='text-[11px] text-[#DC143C]' />
                                </label>
                            </div>

                        </div>

                        <div className=''>
                            <div className='flex flex-row flex-1 items-center'>
                                <label htmlFor='ammount' className='flex flex-col flex-1 h-[82px]'>
                                    <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                                        Enter Amount{' '}
                                    </h5>
                                    <Field
                                    className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
                                    name='ammount'
                                    placeholder='Enter ammount here'
                                    />
                                    <ErrorMessage name='ammount' component='p' className='text-[11px] text-[#DC143C]' />
                                </label>
                            </div>

                            <div className='flex flex-row flex-1 items-center'>
                                <label htmlFor='description' className='flex flex-col flex-1 h-[82px]'>
                                    <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                                        Description <span className={`${typography.paragraphSmall} text-text-sub-500`}>(Optional)</span>{' '}
                                    </h5>
                                    <Field
                                    className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
                                    name='description'
                                    placeholder='Money for ...'
                                    />
                                    <ErrorMessage name='description' component='p' className='text-[11px] text-[#DC143C]' />
                                </label>
                            </div>

                        </div>

                        <div className="w-[376px] h-[40px] "> 
                            <button type='submit'  disabled={isSubmitting} className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] bg-primary-purple-700 rounded-[10px] h-[100%] w-[100%] text-text-white-0 `}>
                                <span>
                                    <img src={sendPlaneLine} className='w-[100%] ' alt='send'/> 
                                </span>
                                Enter transaction pin 
                            </button>
                        </div>

                            
                        </Form>
                    )}
                </Formik>
            </div>


            <div>

            </div>
        </div>
    
    </div>
  )
}

export default WithdrawCard