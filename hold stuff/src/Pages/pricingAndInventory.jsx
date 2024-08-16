import React from 'react';
import PropTypes from 'prop-types';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { typography } from '../style';
import { tooltip, whiteArrowRight, secondArrowLeft, secondWhiteAddIcon } from '../constants/constant';
import Tooltip from '@mui/material/Tooltip';

const PricingAndInventory = ({currentStep, totalSteps, handleNext, handleBack}) => {
  const validationSchema = Yup.object({
    price: Yup.number()
      .min(10, 'Price must be at least 10.')
      .max(10000000, 'Price cannot be more than 10,000,000.')
      .required('Price is required')
      .typeError('Price must be a number'),
  
    discountPrice: Yup.number()
      .nullable()
      .positive('Discount Price must be positive.')
      .typeError('Discount Price must be a number')
      .when('price', (price, schema) =>
        price ? schema.max(price, 'Discount Price cannot be more than the Price') : schema
      ),
  
    sku: Yup.string()
    .transform((value) => value.toUpperCase()) // Convert value to uppercase
    .min(8, 'SKU must be at least 8 characters.')
    .max(16, 'SKU must be less than 17 characters.')
    .required('SKU is required')
    .test(
      'is-sku-length',
      'SKU must be between 8 and 16 characters.',
      (value) => value.length >= 8 && value.length <= 16
    ),
  
    stock: Yup.number()
      .max(10000000, 'Total Stock cannot be more than 10,000,000.')
      .nullable()
      .required('Total Stock is required')
      .positive('Total Stock must be positive.')
      .typeError('Total Stock must be a number')
      .test('is-integer', 'Total Stock must be an integer', (value) => Number.isInteger(value))
      .test('is-greater-than-three', 'Total Stock must be at least 3 units.', (value) => value>2),
  
    lowStockAlert: Yup.number()
      .required('Low Stock Alert is required')
      .positive('Low Stock Alert must be positive.')
      .typeError('Low Stock Alert must be a number')
      .test('is-integer', 'Low Stock Alert must be an integer', (value) => Number.isInteger(value))
      .test('is-low', 'Low Stock Alert must be at least 2 units.', (value) => value >= 2)
      .when('stock', (stock, schema) =>
    stock ? schema.max(stock-1, 'Low Stock Alert cannot equal or exceed stock value') : schema
  ),
  });
  

  return (
    <div className='w-[605px] h-[528px] flex flex-1 gap-0'>
      <Formik
        initialValues={{
          price: '',
          discountPrice: '',
          sku: '',
          stock: '',
          lowStockAlert: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            handleNext()
            console.log(values)
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className='flex flex-col flex-1 gap-[16px]'>
            <label htmlFor='price' className='flex flex-col flex-1'>
              <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1 `}>
                Price{' '}
                <span className={`${typography.paragraphSmall} text-text-sub-500 `}>(Naira)</span>
                <Tooltip title="Product Price" placement="top-start">
                <span><img src={tooltip} alt='tooTip'/>  </span>
                </Tooltip>
              </h5>
              <Field
                className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
                name='price'
                placeholder='₦0.00'
              />
              <ErrorMessage name='price' component='p' className='text-[11px] text-[#DC143C] '/>
            </label>
            <label htmlFor='discountPrice' className='flex flex-col flex-1'>
              <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                Discount Price{' '}
                <span className={`${typography.paragraphSmall} text-text-sub-500 `}>(Optional)</span>
                <Tooltip title="Product Discount Price" placement="top-start">
                <span><img src={tooltip} alt='tooTip'/>  </span>
                </Tooltip>
              </h5>
              <Field
                className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
                name='discountPrice'
                placeholder='₦0.00'
              />
              <ErrorMessage name='discountPrice' component='p' className='text-[11px] text-[#DC143C] ' />
            </label>
            <label htmlFor='sku' className='flex flex-col flex-1'>
              <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                SKU{' '}
                <span className={`${typography.paragraphSmall} text-text-sub-500 `}>
                  (Stock Keeping Unit)
                </span>
                <Tooltip title="Product Stock Keeping Unit" placement="top-start">
                <span><img src={tooltip} alt='tooTip'/>  </span>
                </Tooltip>
              </h5>
              <Field
                className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
                name='sku'
                placeholder='Eg - YOGA1234'
              />
              <ErrorMessage name='sku' component='p' className='text-[11px] text-[#DC143C] ' />
            </label>
            <label htmlFor='stock' className='flex flex-col flex-1'>
              <h5 className={`${typography.labelSmall} text-text-main-900  flex flex-row items-center gap-1`}>
                Total Number Of Available Stock
                <Tooltip title="Number Of Available Units" placement="top-start">
                <span><img src={tooltip} alt='tooTip'/>  </span>
                </Tooltip>
              </h5>
              <Field
                className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
                name='stock'
                placeholder='100 Units'
              />
              <ErrorMessage name='stock' component='p' className='text-[11px] text-[#DC143C] ' />
            </label>
            <label htmlFor='lowStockAlert' className='flex flex-col flex-1'>
              <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1 `}>
                Low Stock Alert{' '}
                <span className={`${typography.paragraphSmall} text-text-sub-500 `}>
                  (Stock quantity before showing the low signal)
                </span>
                <Tooltip title="Minimum Number Of Units Left Before Restock " placement="top-start">
                <span><img src={tooltip} alt='tooTip'/>  </span>
                </Tooltip>
              </h5>
              <Field
                className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
                name='lowStockAlert'
                placeholder='30 Units'
              />
              <ErrorMessage name='lowStockAlert' component='p' className='text-[11px] text-[#DC143C] ' />
            </label>
            <div className="navigation flex flex-row py-[8px] ">
        {currentStep > 1 && 
            <button onClick={handleBack} className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] bg-bg-white-0 border-stroke-soft-200 border-[1px] rounded-[10px] h-[38px] w-[80px] text-text-sub-500 `}>
            <span><img src={secondArrowLeft} className='w-[100%] ' alt='arrow'/> </span> Back
            </button>}
            
        {currentStep < totalSteps ? 
        <button  disabled={isSubmitting} className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] ml-auto bg-primary-purple-700 rounded-[10px] h-[38px] w-[80px] text-text-white-0 `}>
        Next <span><img src={whiteArrowRight} className='w-[100%] ' alt='arrow'/> </span>
        </button> : 
        <button onClick={handleNext} disabled={isSubmitting} className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] ml-auto bg-primary-purple-700 rounded-[10px] h-[38px] w-[156px] text-text-white-0 `}>
        <span><img src={secondWhiteAddIcon} className='w-[100%] ' alt='arrow'/> </span>
        Publish product</button> 
        }
      </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};


PricingAndInventory.propTypes = {
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
};


export default PricingAndInventory;

