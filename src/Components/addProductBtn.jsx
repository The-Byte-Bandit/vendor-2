import { useState } from 'react';
import { whiteAddIcon } from '../constants/constant';
import { typography } from '../style';

function AddProductBtn() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    // Set the clicked state to true
    setClicked(true);

    // After 100ms, reset the clicked state to false
    setTimeout(() => {
      setClicked(false);
    }, 100);
  };

  return (
    <div className='flex'>
      <button 
        className={`flex flex-row flex-1 flex-nowrap ease bg-primary-purple-700 hover:bg-swiphr-purple border-custom-100 max-w-[135px] max-h-[40px] gap-[4px] py-[10px] px-[10px] rounded-[10px] justify-center items-center ${clicked ? 'scale-95' : ''}`}
        onClick={handleClick}
      >
        <img src={whiteAddIcon} alt="Add Product" />
        <h3 className={`${typography.labelSmall} text-text-white-0`}>Add Product</h3>
      </button>
    </div>
  );
}

export default AddProductBtn;
