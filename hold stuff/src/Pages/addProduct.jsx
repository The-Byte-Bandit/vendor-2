import React, { useState, useRef, useEffect } from 'react';
import ProductDetails from './productDetails';
import PricingAndInventory from './pricingAndInventory';
import DeliveryInformation from './deliveryInformation';
import { typography } from '../style';

const steps = [
  { title: 'Product Details', content: ProductDetails},
  { title: 'Pricing And Inventory', content: PricingAndInventory},
  { title: 'Delivery Information', content: DeliveryInformation},
];

function AddProductPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const stepRef = useRef([]);
  const [margins, setMargins] = useState({ marginLeft: 0, marginRight: 0 });

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateProgressBarWidth = () => {
    let width;
    switch (currentStep) {
      case 1:
        width = 0
        
        break;

      case 2:
          width = 50
        break;

      case 3:
          width = 100
        break;
    
      default:
        break;
    }

    return width;

    // const width = (currentStep / steps.length) * 100;
    // const roundedWidth = Math.floor(width);
    // console.log(roundedWidth);
    // return roundedWidth;
  };

  useEffect(() => {
    if (stepRef.current.length > 0) {
      const firstStepWidth = stepRef.current[0].offsetWidth;
      const lastStepWidth = stepRef.current[stepRef.current.length - 1].offsetWidth;
      setMargins({ marginLeft: firstStepWidth / 2, marginRight: lastStepWidth / 2 });
    }
  }, [stepRef.current, steps.length]);

const renderStepContent = () => {
  const StepComponent = steps[currentStep - 1].content;
  return <StepComponent currentStep={currentStep} totalSteps={steps.length} handleNext={handleNext} handleBack={handleBack} />;
};

  return (
    <div className="flex ml-[18%] flex-1 items-center max-w-[605px]  ">
    <div className="w-[100%] flex flex-col gap-[40px] mt-[15px]   ">
      <div className="flex flex-1 flex-row h-[60px] items-center justify-center relative ">
        {steps.map((item, index) => (
          <div key={index} ref={(el) => (stepRef.current[index] = el)} className="flex flex-col flex-1 items-center justify-center h-[100%] z-20">
            <div className={`${index + 1 === currentStep ? 'bg-primaryPurple600 border-primaryPurple600 ' : index < currentStep ? 'bg-primaryPurple600 border-primaryPurple600 ' : ''} ${index+1 > currentStep ? 'bg-bg-white-0 shadow-custom-150 ' : ''} ease-2s shadow-custom-150 w-[32px] h-[32px] border-[.8px] border-stroke-soft-200 rounded-[6px] p-[6px]`}>
              <h5 className={`${typography.labelSmall} ${index + 1 === currentStep ? 'text-text-white-0 ' : index < currentStep ? 'text-text-white-0' : ''} ${index+1 > currentStep ? 'text-text-sub-500  ' : ''} text-center   `}>{index + 1}</h5>
            </div>
            <div className="step-name">
              <h5 className={`${typography.subheadingMedium} text-center text-text-sub-500`}>{item.title}</h5>
            </div>
          </div>
        ))}
        <div className="progress-bar absolute bg-[#ccc]  h-[4px] top-[35%] w-[100%]  z-0 border-dotted" style={{ width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`, marginLeft: margins.marginLeft, marginRight: margins.marginRight }}>
          <div className="ease-2s bg-primaryPurple600 h-[100%] absolute top-[35%]  z-10" style={{ width: `${calculateProgressBarWidth()}%` }}></div>
        </div>
      </div>
      <div className='flex flex-1 flex-col items-center'>
        <div className='flex flex-col flex-1 gap-[40px] ' >
          <h2 className={`${typography.subheadingMedium} text-text-sub-500 `}>{steps[currentStep - 1].title}</h2>
          {renderStepContent()}
        </div>
      </div>
    
    </div>
    </div>
  );
}

export default AddProductPage;