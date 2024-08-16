
import PropTypes from 'prop-types';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import Tooltip from '@mui/material/Tooltip';
import { typography } from '../style';
import { addIcon, tooltip, whiteArrowRight, secondArrowLeft, secondWhiteAddIcon } from '../constants/constant';
import { v4 as uuidv4 } from 'uuid';
import PhoneInput from 'react-phone-number-input'; 
import 'react-phone-number-input/style.css'
import flags from 'react-phone-number-input/flags'
import { useDispatch } from 'react-redux';
// import { createAction } from '@reduxjs/toolkit';
import {updateOrderState} from '../features/orders'


const CustomerInformation = ({ currentStep, totalSteps, handleNext, handleBack }) => {
  const dispatch = useDispatch();
 

  const handleCustomerInfoSubmit = (values) => {
    dispatch(updateOrderState(values));
  };


  const validationSchema = Yup.object({
    customerName: Yup.string()
      .min(2, "Customer's name must be at least 2 characters.")
      .max(100, "Customer's name must be less than 100 characters.")
      .required("Customer's name is required"),
    customerEmail: Yup.string()
      .email('Invalid email format')
      .required("Customer's email is required"),
    customerPhoneNumber: Yup.string()
      .required('Phone number is required')
      .min(6, 'Phone number is too short')
      .max(15, 'Phone number is too long'),
    customerGender: Yup.string()
      .required("Customer's gender is required"),
    streetAddress: Yup.string()
      .required("Customer's street address is required"),
    city: Yup.string()
      .required("Customer city is required"),
    products: Yup.array().of(
      Yup.object({
        productName: Yup.string().required('Product Name is required'),
        productSKU: Yup.string().required('Product SKU is required'),
        quantity: Yup.number()
          .max(1000, 'Quantity must be less than or equal to 1000')
          .required('Quantity is required')
          .positive('Quantity must be positive.')
          .typeError('Quantity must be a number')
      })
    ).required('At least one product is required')
  });

  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' }
  ];

  

  return (
    <div className='w-[605px] h-[528px] flex flex-1 gap-[4px] mb-[40px]'>
      <Formik
        initialValues={{
          customerName: '',
          customerEmail: '',
          customerPhoneNumber: '',
          customerGender: '',
          streetAddress: '',
          city: '',
          products: [{ productName: '', productSKU: '', quantity: '' }]
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            console.log(values)
            handleCustomerInfoSubmit(values);
            handleNext();
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, errors, setFieldValue, isSubmitting }) => (
          <Form className='flex flex-col flex-1 gap-[10px] justify-center'>
            <div className='flex flex-row flex-1 items-center'>
              <label htmlFor='customerName' className='flex flex-col flex-1 h-[82px]'>
                <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                  Customer Fullname{' '}
                  <Tooltip title="Customer fullname" placement="top-start">
                    <span><img src={tooltip} alt='tooTip' /></span>
                  </Tooltip>
                </h5>
                <Field
                  className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
                  name='customerName'
                  placeholder='Enter name here'
                />
                <ErrorMessage name='customerName' component='p' className='text-[11px] text-[#DC143C]' />
              </label>
            </div>

            <div className='flex flex-row flex-1 items-center'>
              <label htmlFor='customerEmail' className='flex flex-col flex-1 h-[82px]'>
                <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                  Customer Email{' '}
                  <Tooltip title="Customer Email" placement="top-start">
                    <span><img src={tooltip} alt='tooTip' /></span>
                  </Tooltip>
                </h5>
                <Field
                  className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
                  name='customerEmail'
                  placeholder='Name@example.com'
                />
                <ErrorMessage name='customerEmail' component='p' className='text-[11px] text-[#DC143C]' />
              </label>
            </div>

            <div className='flex flex-row flex-1 items-center'>
              <label htmlFor='customerPhoneNumber' className='flex flex-col flex-1 h-[82px]'>
                <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                  Customer Phone Number{' '}
                  <Tooltip title="Customer Phone Number" placement="top-start">
                    <span><img src={tooltip} alt='tooTip' /></span>
                  </Tooltip>
                </h5>
                <PhoneInput
                    // defaultCountry="NG"
                    flags={flags}
                    className='bg-bg-white-0 rounded-[10px] -[56px] border-[1px]  border-stroke-soft-200'
                    name='customerPhoneNumber'
                    placeholder='Enter phone number'
                    value={values.customerPhoneNumber}
                    onChange={(value) => setFieldValue('customerPhoneNumber', value)}
                    
                  />
                <ErrorMessage name='customerPhoneNumber' component='p' className='text-[11px] text-[#DC143C]' />
              </label>
            </div>

            <div className='flex flex-row flex-1 items-center'>
              <label htmlFor='customerGender' className='flex flex-col flex-1 h-[82px]'>
                <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                  Gender
                  <Tooltip title="Customer Gender" placement="top-start">
                    <span><img src={tooltip} alt='tooTip' /></span>
                  </Tooltip>
                </h5>
                <div className='w-[100%]'>
                  <Select
                    name='customerGender'
                    value={genderOptions.find(option => option.label === values.customerGender)}
                    onChange={(selectedOption) => setFieldValue('customerGender', selectedOption.value)}
                    options={genderOptions}
                    placeholder='Select Gender'
                    isSearchable={false}
                    components={{
                      IndicatorSeparator: () => null
                    }}
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        borderColor: errors.customerGender ? 'red' : (state.isFocused ? '#DCDCDC' : '#DCDCDC'),
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
                  {errors.customerGender && <p className='text-[11px] text-[#DC143C]'>{errors.customerGender}</p>}
                </div>
              </label>
            </div>

            <div className='flex flex-col gap-[10px] mt-[36px]'>
              <div className='mb-[25px]'>
                <h5 className={`${typography.subheadingMedium} text-text-sub-500`}>SHIPPING INFO</h5>
              </div>

              <div className='flex flex-row flex-1 items-center'>
                <label htmlFor='streetAddress' className='flex flex-col flex-1 h-[82px]'>
                  <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                    Street Address{' '}
                    <Tooltip title="Customer's Street Address" placement="top-start">
                      <span><img src={tooltip} alt='tooTip' /></span>
                    </Tooltip>
                  </h5>
                  <Field
                    className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
                    name='streetAddress'
                    placeholder='Enter address here'
                  />
                  <ErrorMessage name='streetAddress' component='p' className='text-[11px] text-[#DC143C]' />
                </label>
              </div>

              <div className='flex flex-row flex-1 items-center'>
                <label htmlFor='city' className='flex flex-col flex-1 h-[82px]'>
                  <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                    City{' '}
                    <Tooltip title="Customer's City" placement="top-start">
                      <span><img src={tooltip} alt='tooTip' /></span>
                    </Tooltip>
                  </h5>
                  <Field
                    className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
                    name='city'
                    placeholder='Enter city here'
                  />
                  <ErrorMessage name='city' component='p' className='text-[11px] text-[#DC143C]' />
                </label>
              </div>

              <FieldArray
                name='products'
                render={({ push }) => (
                  <>
                    {values.products.map((product, index) => (
                      <div className="flex flex-col gap-[10px]" key={index}>
                        <div className='flex flex-row flex-1 items-center'>
                          <label htmlFor={`products[${index}].productName`} className='flex flex-col flex-1 h-[82px]'>
                            <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                              Product Name{' '}
                              <Tooltip title="Product Name" placement="top-start">
                                <span><img src={tooltip} alt='tooTip' />  </span>
                              </Tooltip>
                            </h5>
                            <Field
                              className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
                              name={`products[${index}].productName`}
                              placeholder='Eg - YOGA1234'
                            />
                            <ErrorMessage name={`products[${index}].productName`} component='p' className='text-[11px] text-[#DC143C]' />
                          </label>
                        </div>

                        <div className='flex flex-row flex-1 gap-[10px] items-center'>
                          <label htmlFor={`products[${index}].productSKU`} className='flex flex-col flex-1 h-[82px]'>
                            <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                              Product SKU{' '}
                              <Tooltip title="Product SKU" placement="top-start">
                                <span><img src={tooltip} alt='tooTip' />  </span>
                              </Tooltip>
                            </h5>
                            <Field
                              className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
                              name={`products[${index}].productSKU`}
                              placeholder='Eg - YOGA1234'
                            />
                            <ErrorMessage name={`products[${index}].productSKU`} component='p' className='text-[11px] text-[#DC143C]' />
                          </label>

                          <label htmlFor={`products[${index}].quantity`} className='flex flex-col flex-1  h-[82px]'>
                            <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                              Quantity{' '}
                              <Tooltip title="Product Quantity" placement="top-start">
                                <span><img src={tooltip} alt='tooTip' />  </span>
                              </Tooltip>
                            </h5>
                            <Field
                              className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
                              name={`products[${index}].quantity`}
                              placeholder='0'
                            />
                            <ErrorMessage name={`products[${index}].quantity`} component='p' className='text-[11px] text-[#DC143C]' />
                          </label>

                          <div className={`${typography.labelSmall} hover:cursor-pointer flex flex-row gap-[12px] items-center border-[1px] justify-center p-[10px] mt-[4px] bg-bg-white-0 border-stroke-soft-200 rounded-[10px] h-[40px] w-[80px] text-text-sub-500`}
                            onClick={() => push({ id: uuidv4(), productName: '', productSKU: '', quantity: '' })}
                          >
                            <span><img src={addIcon} className='w-[100%]' alt='add' /> </span>
                            Add
                          </div>

                          {/* <div className='flex flex-col justify-center'>
                          <button
                            type='button'
                            onClick={() => remove(index)}
                            className='text-[#dc3545] bg-transparent border-none p-0'
                          >
                            Remove
                          </button>
                        </div> */}
                        </div>
                      </div>







                      
                    ))}
                    {/* <div className='flex flex-col justify-center'>
                      <button
                        type='button'
                        onClick={() => push({ productName: '', productSKU: '', quantity: '' })}
                        className='text-[#28a745] bg-transparent border-none p-0'
                      >
                        Add Product
                      </button>
                    </div> */}
                  </>
                )}
              />
            </div>

            {/* <div className='flex flex-row justify-between mt-[30px]'>
              <button
                type='button'
                onClick={handleBack}
                className='flex flex-row items-center gap-1 text-[#fff] bg-[#ccc] p-[10px] rounded-[10px]'
              >
                <img src={secondArrowLeft} alt='Back Arrow' />
                Back
              </button>
              {currentStep === totalSteps - 1 ? (
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] ml-auto bg-primary-purple-700 rounded-[10px] h-[38px] w-[80px] text-text-white-0 `}
                >
                  <img src={secondWhiteAddIcon} alt='Publish Icon' />
                  Publish
                </button>
              ) : (
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] ml-auto bg-primary-purple-700 rounded-[10px] h-[38px] w-[80px] text-text-white-0 `}
                >
                  <img src={whiteArrowRight} alt='Next Arrow' />
                  Next
                </button>
              )}
            </div> */}


            <div className="navigation flex flex-row py-[8px] ">
               {currentStep > 1 && 
                   <button type="button" onClick={handleBack} className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] bg-bg-white-0 border-stroke-soft-200 border-[1px] rounded-[10px] h-[38px] w-[80px] text-text-sub-500 `}>
                   <span><img src={secondArrowLeft} className='w-[100%] ' alt='arrow'/> </span> Back
                   </button>}
                  
               {currentStep < totalSteps ? 
               <button type='submit'  disabled={isSubmitting} className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] ml-auto bg-primary-purple-700 rounded-[10px] h-[38px] w-[80px] text-text-white-0 `}>
               Next <span><img src={whiteArrowRight} className='w-[100%] ' alt='arrow'/> </span>
               </button> : 
               <button type='submit' disabled={isSubmitting} className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] ml-auto bg-primary-purple-700 rounded-[10px] h-[38px] w-[156px] text-text-white-0 `}>
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

CustomerInformation.propTypes = {
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
};

export default CustomerInformation;














