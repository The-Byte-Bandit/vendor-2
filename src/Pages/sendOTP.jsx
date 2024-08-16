
import { Swiphr, key } from '../constants/constant';
import "../index.css"
import {useFormik} from 'formik'
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const initialValues ={

    otp:'',
}

function SendOtp() {
    
    const {values, handleBlur, handleChange, handleSubmit,} = useFormik({
        initialValues: initialValues,
        onSubmit: (values) =>{
            console.log(values)
        }
})

  return (
    <div className=' w-full flex justify-center'>
        <div className=' flex flex-col w-96 gap-8' >
            <img src={Swiphr} alt="Swiphr" className=' w-32' /> 
            <div>
                <div className='  flex flex-col gap-2 w-74'>
                    <p className=' horn text-3xl font-extrabold '>Enter OTP code</p>
                    <p className=' text-sm'>Enter email address linked to your account to get a verification OTP code</p>
                </div>
                <form onSubmit={handleSubmit}  className=' flex flex-col '>
                <div>
                            <label className=' relative top-3 h-3 px-2 bg-white left-8' style={{fontSize:'13px'}}>Enter OTP code</label>
                            <div className=' flex w-full gap-3 border-2 border-neutrals-white-200 rounded-3xl p-2'>
                            <img src={key} alt="sms" className=' w-13' />
                            <input
                                className=' w-full outline-none  bg-white'
                                type='text'
                                name='otp'
                                value={values.otp}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                />
                            </div>
                    </div>
                   
                    <button type='submit' className='flex justify-center mt-8 bg-primaryPurple600 text-text-white-0 rounded-full h-14 items-center '>Send OTP</button>
                   
                </form>
            </div>

        </div>
    </div>
  )
}

export default SendOtp;