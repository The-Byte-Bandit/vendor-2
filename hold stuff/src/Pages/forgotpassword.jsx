import React from 'react'
import { Swiphr, useroct, lock, sms } from '../constants/constant';
import "../index.css"
import {useFormik} from 'formik'
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
import Carousel from '../components/carousel';
   
const initialValues ={

    email:'',
    password:'',
}

function ForgotPassword() {
    
    const {values, handleBlur, handleChange, handleSubmit,} = useFormik({
        initialValues: initialValues,
        onSubmit: (values) =>{
            console.log(values)
        }
})

  return (
    <div className='w-full h-svh  justify-center items-center'>
    <div  className=' w-full h-svh  px-24 py-[24px] flex flex-row gap-[40px]'>
        <div className=' h-[100%] flex flex-col w-96 gap-[8px]' >
            <img src={Swiphr} alt="Swiphr" className=' w-32' />
            <div className='h-[100%]'>
                <div className='  flex flex-col gap-2 w-64'>
                    <p className=' horn text-4xl font-extrabold'>Forgot password</p>
                    <p className=' text-sm'>Enter email address linked to your account to get a verification OTP code </p>
                </div>
                <form onSubmit={handleSubmit} className=' flex flex-col '>
                   
                    <div>
                        <label className=' relative top-3 h-3 px-2 bg-white left-8' style={{fontSize:'13px'}}>Email address</label>
                        <div className=' flex w-full gap-3 border-2 border-neutrals-white-200 rounded-3xl p-2'>
                        <img src={sms} alt="sms" className=' w-13' />
                        <input
                            className=' w-full outline-none  bg-white'
                            type='email'
                            name='email'
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            />
                        </div>
                    </div>
        
                    <button type='submit' className=' flex justify-center mt-auto bg-primaryPurple600 text-text-white-0 rounded-full h-14 items-center '>Send OTP</button>
                    
                </form>
            </div>
           
        </div>   

        <div className=' max-h-[650px] w-[489px]'>
            <Carousel/>
        </div> 
         
    </div>
    
</div>
  )
}

export default ForgotPassword;