
import PropTypes from 'prop-types';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { typography } from '../style';
// import { tooltip, whiteArrowRight, secondArrowLeft, secondWhiteAddIcon, uploadCloud } from '../constants/constant';
import Tooltip from '@mui/material/Tooltip';
import Select from 'react-select';

import {updateOrderState} from '../features/orders'

import { addIcon, tooltip, whiteArrowRight, secondArrowLeft, secondWhiteAddIcon } from '../constants/constant';
import { v4 as uuidv4 } from 'uuid';


import { useSelector, useDispatch } from 'react-redux';


const PaymentAndPricing = ({currentStep, totalSteps, handleNext, handleBack}) => {
  const dispatch = useDispatch();
  
 

  const handleCustomerInfoSubmit = (values) => {
    console.log("this wan");
    dispatch(updateOrderState(values));
    console.log("that wan");
  };
  const cardState = useSelector((state) => state.orders);
  console.log(cardState)


  const validationSchema = Yup.object({ 
    vat: Yup.number()
    .max(1000, 'VAT must be less than or equal to 1000')
    .required('VAT is required')
    .positive('VAT must be positive.')
    .typeError('VAT must be a number'),
    discount: Yup.number()
      .max(1000, 'Discount must be less than or equal to 1000')
      .required('Discount is required')
      .positive('Discount must be positive.')
      .typeError('Discount must be a number'),
    subtotal: Yup.number()
      .max(1000, 'Sub-Total must be less than or equal to 1000')
      .required('Sub-Total is required')
      .positive('Sub-Total must be positive.')
      .typeError('Sub-Total must be a number'),

    total: Yup.number()
      .max(1000000000, 'Total must be less than or equal to 1,000,000,000')
      .required('Total is required')
      .positive('Total must be positive.')
      .typeError('Total must be a number'),
    
    paymentMethod: Yup.string()
      .required('Payment Method is required'),
    products: Yup.array().of(
      Yup.object({

        productSKU: Yup.string().required('Product SKU is required'),
        quantity: Yup.number()
          .max(1000, 'Quantity must be less than or equal to 1000')
          .required('Quantity is required')
          .positive('Quantity must be positive.')
          .typeError('Quantity must be a number'),

        price: Yup.number()
          .max(1000000000, 'Price must be less than or equal to 1000,000,000')
          .required('Price is required')
          .positive('Price must be positive.')
          .typeError('Price must be a number')
      })
    ).required('At least one product is required')
  });

  const paymentMethod = [
    { value: 'Transfer', label: 'Transfer' },
    { value: 'Cash', label: 'Cash' }
  ];

  

  return (
    <div className='w-[605px] h-[528px] flex flex-1 gap-[4px] mb-[40px]'>
      <Formik
        initialValues={{
          vat: '',
          total: '',
          subtotal: '',
          discount: '',
          paymentMethod: '', 
          products: [{ productName: '', productSKU: '', quantity: '', price: '' }]
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            handleCustomerInfoSubmit(values);
            console.log(cardState)
            console.log(values);
            handleNext();
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, errors, setFieldValue, isSubmitting }) => (
          <Form className='flex flex-col flex-1 gap-[10px] justify-center'>
            <div className='flex flex-row flex-1 items-center'>
              <label htmlFor='Payment Method' className='flex flex-col flex-1 h-[82px]'>
                <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                  Select payment method
                  <Tooltip title="Payment Methodr" placement="top-start">
                    <span><img src={tooltip} alt='tooTip' /></span>
                  </Tooltip>
                </h5>
                <div className='w-[100%]'>
                  <Select
                    name='paymentMethod'
                    value={paymentMethod.find(option => option.label === values.paymentMethod)}
                    onChange={(selectedOption) => setFieldValue('paymentMethod', selectedOption.value)}
                    options={paymentMethod}
                    placeholder='Select Payment Method'
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
                  {errors.paymentMethod && <p className='text-[11px] text-[#DC143C]'>{errors.paymentMethod}</p>}
                </div>
              </label>
            </div>

            <div className='flex flex-col gap-[10px] mt-[36px]'>
              <div className='mb-[25px]'>
                <h5 className={`${typography.subheadingMedium} text-text-sub-500`}>PRICING DETAILS</h5>
              </div>

              <FieldArray
                name='products'
                render={({ push }) => (
                  <>
                    {values.products.map((product, index) => (
                      <div className="flex flex-col gap-[10px]" key={index}>
                        <div className='flex flex-row flex-1 gap-[10px] items-center ]'>
                          <label htmlFor={`products[${index}].productSKU`} className='flex flex-col flex-1 w-[304px]  h-[82px]'>
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

                          <div className='w-[84px]'>
                            <label htmlFor={`products[${index}].quantity`} className='flex flex-col flex-1 w-[100%x]  h-[82px]'>
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

                          </div>

                          <div className='w-[84px]'>
                            <label htmlFor={`products[${index}].price`} className='flex flex-col flex-1 w-[100%]  h-[82px]'>
                              <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                                Price{' '}
                                <Tooltip title="Product Price" placement="top-start">
                                  <span><img src={tooltip} alt='tooTip' />  </span>
                                </Tooltip>
                              </h5>
                              <Field
                                className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
                                name={`products[${index}].price`}
                                placeholder='0'
                              />
                              <ErrorMessage name={`products[${index}].price`} component='p' className='text-[11px] text-[#DC143C]' />
                            </label>
                          </div>

                          
                          

                          <div className={`${typography.labelSmall} hover:cursor-pointer flex flex-row gap-[12px] items-center border-[1px] justify-center p-[10px] mt-[4px] bg-bg-white-0 border-stroke-soft-200 rounded-[10px] h-[45px] w-[80px] text-text-sub-500`}
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

              <div className='flex flex-row flex-1 items-center'>
                <label htmlFor='streetAddress' className='flex flex-col flex-1 h-[82px]'>
                  <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                    VAT 0.5%{' '}
                    <Tooltip title="Value-added tax" placement="top-start">
                      <span><img src={tooltip} alt='tooTip' /></span>
                    </Tooltip>
                  </h5>
                  <Field
                    className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
                    name='vat'
                    placeholder='E. 4.32'
                  />
                  <ErrorMessage name='vat' component='p' className='text-[11px] text-[#DC143C]' />
                </label>
              </div>

              <div className='flex flex-row flex-1 items-center'>
                <label htmlFor='Discount' className='flex flex-col flex-1 h-[82px]'>
                  <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                    Discount{' '}
                    <Tooltip title="Discounted Price" placement="top-start">
                      <span><img src={tooltip} alt='tooTip' /></span>
                    </Tooltip>
                  </h5>
                  <Field
                    className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
                    name='discount'
                    placeholder='Enter Discounted Price'
                  />
                  <ErrorMessage name='discount' component='p' className='text-[11px] text-[#DC143C]' />
                </label>
              </div>

              <div className='flex flex-row flex-1 items-center'>
                <label htmlFor='Sub-Total' className='flex flex-col flex-1 h-[82px]'>
                  <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                    Sub-Total{' '}
                    <Tooltip title="Sub-Total" placement="top-start">
                      <span><img src={tooltip} alt='tooTip' /></span>
                    </Tooltip>
                  </h5>
                  <Field
                    className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
                    name='subtotal'
                    placeholder='Enter sub-total'
                  />
                  <ErrorMessage name='city' component='p' className='text-[11px] text-[#DC143C]' />
                </label>
              </div>

              <div className='flex flex-row flex-1 items-center'>
                <label htmlFor='Total' className='flex flex-col flex-1 h-[82px]'>
                  <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
                    Total{' '}
                    <Tooltip title="Total Price" placement="top-start">
                      <span><img src={tooltip} alt='tooTip' /></span>
                    </Tooltip>
                  </h5>
                  <Field
                    className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
                    name='total'
                    placeholder='Enter total price'
                  />
                  <ErrorMessage name='total' component='p' className='text-[11px] text-[#DC143C]' />
                </label>
              </div>


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


PaymentAndPricing.propTypes = {
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
};


export default PaymentAndPricing;

