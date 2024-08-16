import * as Yup from 'yup'

export const signupVal = Yup.object({
    fname: Yup.string().min(3).required("Please Enter Name"),
    lname: Yup.string().min(3).required("Please Enter Name"),
    Email: Yup.string().email("Please Enter Valid Email").required("Please Enter Email"),
    password: Yup.string().min(5).required("Please Enter Password")
})