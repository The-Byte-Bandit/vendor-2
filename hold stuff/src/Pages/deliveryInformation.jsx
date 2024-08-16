import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { typography } from '../style';
import Tooltip from '@mui/material/Tooltip';
import { tooltip, whiteArrowRight, secondArrowLeft, secondWhiteAddIcon } from '../constants/constant';

const DeliveryInformation = ({currentStep, totalSteps, handleNext, handleBack}) => {
  
  const validationSchema = Yup.object({
    weight: Yup.number()
      .min(0.1, 'Weight must be at least 0.1')
      .max(10000000, 'Weight must be less than or equal to 10,000,000')
      .nullable()
      .required('Weight is required')
      .typeError('Weight must be a number'),

    dimension: Yup.string()
      .nullable()
      .typeError('Wrong input format'),

    shippingClass: Yup.string()
      .required('Shipping class is required'),

    deliveryFee: Yup.number()
      .max(10000000, 'Delivery fee must be less than or equal to 10,000,000')
      .nullable()
      .required('Delivery fee is required')
      .positive('Delivery fee must be positive.')
      .typeError('Delivery fee must be a number'),
  });

  const deliveryOptions = [
    { value: 'Feather-Light', label: 'Feather-Light Package (up to 0.5 kg)' },
    { value: 'express', label: 'Lightweight Package (0.5 kg to 2 kg)' },
    { value: 'Moderate', label: 'Moderate Package (2 kg to 5 kg)' },
    { value: 'Hefty', label: 'Hefty Package (5 kg to 10 kg)' },
    { value: 'Heavyweight', label: 'Heavyweight Package (10 kg and above)' },
  ];

  

  return (
    <div className='w-[605px] h-[528px] flex flex-1 gap-0'>
      <Formik
        initialValues={{
          weight: '',
          dimension: '',
          shippingClass: '',
          deliveryFee: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {

          setTimeout(() => {

            alert(JSON.stringify(values, null, 2));
            
            console.log('Submitted values:', values);
            console.log('Submitted values:', values.shippingClass);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, errors, setFieldValue, isSubmitting }) => (
          <Form className='flex flex-col flex-1 gap-[16px]'>
            <label htmlFor='weight' className='flex flex-col flex-1 gap-1  '>
              <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1 `}>
                Weight{' '}
                <span className={`${typography.paragraphSmall} text-text-sub-500 `}>
                  (Kg)
                </span>
                <Tooltip title="Product Weight" placement="top-start">
                <span><img src={tooltip} alt='tooTip'/>  </span>
                </Tooltip>
              </h5>
              <Field
                className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px] h-[40px]'
                name='weight'
                placeholder='2Kg'
              />
              <ErrorMessage name='weight' component='p' className='text-[11px] text-[#DC143C] ' />
            </label>
            <label htmlFor='dimension' className='flex flex-col flex-1 gap-1'>
              <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                Dimension{' '}
                <span className={`${typography.paragraphSmall} text-text-sub-500 `}>
                  (Length, Width, and Height) Optional
                </span>
                <Tooltip title="Product Dimension" placement="top-start">
                <span><img src={tooltip} alt='tooTip'/>  </span>
                </Tooltip>
              </h5>
              <Field
                className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px] h-[40px] '
                name='dimension'
                placeholder='cm x inches x metres'
              />
              <ErrorMessage name='dimension' component='p' className='text-[11px] text-[#DC143C] ' />
            </label>
            <label htmlFor='shippingClass' className='flex flex-col flex-1 gap-1'>
              <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                Shipping Class 
                <Tooltip title="Product Weight Range" placement="top-start">
                <span><img src={tooltip} alt='tooTip'/>  </span>
                </Tooltip>
              </h5>
              <div className='w-[100%] inter text-[14px] '>
                <Select
                  name='shippingClass'
                  value={values.shippingClass.label}
                  onChange={(selectedOption) => {setFieldValue('shippingClass', selectedOption.value)
                  console.log(values)}}
                  options={deliveryOptions}
                  placeholder='Light Package'
                  isSearchable={false}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  styles={{
  control: (provided, state) => ({ 
    ...provided, 
    borderColor: errors.shippingClass ? 'red' : (state.isFocused || state.isSelected ? '#DCDCDC' : '#DCDCDC'),
    width: '100%',
    borderRadius: '10px',
    boxShadow: 'none',
    indicatorSeparator: 'none',
    height: '40px'
  }),
  menu: (provided, state) => ({
    ...provided,
    borderColor: state.menuIsOpen ? '#DCDCDC' : (state.isFocused || state.isSelected ? '#DCDCDC' : '#DCDCDC'),
    borderRadius: '10px',
    border: '1px solid #DCDCDC',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
   
  }),
  option: (provided, state)=>({
    ...provided,
    backgroundColor: state.isFocused ? '#F6F8FA' : (state.isSelected ? '#DCDCDC':null || (state.isSelected && state.isDisabled ? 'red' : null)),
    color: state.isDisabled? '#0A0D14':'#0A0D14' ,
    fontSize: state.isSelected  || state.isFocused? '500': null,
    borderRadius: '8px',
  })
}}

                />
                {errors.shippingClass && <p className='text-[11px] text-[#DC143C] '>{errors.shippingClass}</p>}
              </div>
            </label>
            <label htmlFor='deliveryFee' className='flex flex-col flex-1 gap-1'>
              <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                Delivery Fee
                <Tooltip title="Product Delivery Fee" placement="top-start">
                <span><img src={tooltip} alt='tooTip'/>  </span>
                </Tooltip>
              </h5>
              <Field
                className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
                name='deliveryFee'
                placeholder='₦1,000'
              />
              <ErrorMessage name='deliveryFee' component='p' className='text-[11px] text-[#DC143C] ' />
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


DeliveryInformation.propTypes = {
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
};


export default DeliveryInformation;
