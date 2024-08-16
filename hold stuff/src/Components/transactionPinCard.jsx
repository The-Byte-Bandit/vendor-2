import React from 'react'
import { lockIcon, sendPlaneLine} from '../constants/constant';
import {typography} from '../style'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function TransactionPinCard() {

    const initialValues = { pin1: '', pin2: '', pin3: '', pin4: '' };
    const validationSchema = Yup.object().shape({
      pin1: Yup.number()
      .required('Missing Digit(s)')
      .typeError('Pin must be a number')
      .test('is-integer', 'Pin must be an integer', (value) => Number.isInteger(value)),
      pin2: Yup.number()
      .required('Missing Digit(s)')
      .typeError('Pin must be a number')
      .test('is-integer', 'Pin must be an integer', (value) => Number.isInteger(value)),
      pin3: Yup.number()
      .required('Missing Digit(s)')
      .typeError('Pin must be a number')
      .test('is-integer', 'Pin must be an integer', (value) => Number.isInteger(value)),
      pin4: Yup.number()
      .required('Missing Digit(s)')
      .typeError('Pin must be a number')
      .test('is-integer', 'Pin must be an integer', (value) => Number.isInteger(value)),
    });
    



  return (
    <div className='w-[440px] max-h-[692px]'>
        <div className='w-[100%] h-[100%] flex flex-col gap-[40px] bg-bg-white-0 border-[1px] border-stroke-soft-200 p-[32px] rounded-[16px]'>
            <div className='flex flex-col items-center gap-[8px]'>
                <div>
                    <img src={lockIcon} alt='send money'/>
                </div>

                <div className='flex flex-col items-center gap-[4px]'>
                    <h5 className={`${typography.titleH5Title} text-text-main-900`}>Enter transaction pin</h5>
                    <p className={`${typography.paragraphSmall} text-text-sub-500`}>Enter recipient details and amount</p>
                </div>
            </div>

            <div>
                <Formik
                    initialValues={{
                    pin1: '',
                    pin2: '',
                    pin3: '',
                    pin4: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        console.log(values)
                        // handleCustomerInfoSubmit(values);
                        setSubmitting(false);
                    }, 400);
                    }}
                >

                    {({ values, errors, setFieldValue, isSubmitting }) => (
                        <Form className='flex flex-col flex-1 gap-[40px] justify-center'>
                            <div className="flex flex-row gap-[10px] w-{376px] h-[64px]">
                                <Field
                                type="text" maxLength={1} name="pin1" 
                                className={`${typography.labelXLarge} bg-bg-white-0 border-[1px] text-center border-stroke-soft-200 rounded-[16px] h-[100%] w-[86px] py-[16px] flex flex-row justify-center px-[8px]`}

                                />

                                <Field
                                type="text" maxLength={1} name="pin2" 
                                className={`${typography.labelXLarge} bg-bg-white-0 border-[1px] text-center border-stroke-soft-200 rounded-[16px] h-[100%] w-[86px] py-[16px] flex flex-row justify-center px-[8px]`} 

                                />

                                <Field
                                type="text" maxLength={1} name="pin3" 
                                className={`${typography.labelXLarge} bg-bg-white-0 border-[1px] text-center border-stroke-soft-200 rounded-[16px] h-[100%] w-[86px] py-[16px] flex flex-row justify-center px-[8px]`} 

                                />

                                <Field
                                type="text" maxLength={1} name="pin4" 
                                className={`${typography.labelXLarge} bg-bg-white-0 border-[1px] text-center border-stroke-soft-200 rounded-[16px] h-[100%] w-[86px] py-[16px] flex flex-row justify-center px-[8px]`} 
                                    
                                />
                            </div>

                            <div className="w-[376px] h-[40px] "> 
                                <button type='submit'  disabled={isSubmitting} className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] bg-primary-purple-700 rounded-[10px] h-[100%] w-[100%] text-text-white-0 `}>
                                    <span>
                                        <img src={sendPlaneLine} className='w-[100%] ' alt='send'/> 
                                    </span>
                                    Enter transaction pin 
                                </button>
                            </div>

                            <div className='flex flex-col gap-[3px] text-[11px] text-[#DC143C]'>
                                {errors.pin1  || errors.pin2 || errors.pin3  || errors.pin4}
                            </div>  
                        </Form>
                    )}
                </Formik>
            </div>


            <div className='flex flex-col gap-[4px] items-center'>
                <p className={`${typography.paragraphSmall} text-text-sub-500`}>Cant remember your transaction pin</p>
                <h5 className='text-text-main-900 inter font-medium text-[14px]'>Reset pin here</h5>
            </div>
        </div>
    
    </div>
  )
}

export default TransactionPinCard