import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./assets/style.css"
const Formik =() => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
        // rules: 
        validationSchema : Yup.object({
            email: Yup.string().email('vui long nhap lai').required('email khong duoc bo trong'),
            password: Yup.string().min(8,'mat khau toi thieu la 8 ki tu').required('mat khau khong duoc bo trong'),
            confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'khong giong mat khau ban dau').required('vui long xac nhan mat khau')
        }),

        onSubmit: (values) => {
            console.log(values)
        },
    })
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label>Email address&nbsp;</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
                    name="email" 
                    value={formik.values.email} 
                    onChange={formik.handleChange}/>&nbsp;
                    {formik.errors.email && formik.touched.email && (<span className="error">{formik.errors.email}</span>)}
                </div><br/>
                <div className="form-group">
                    <label>Password&nbsp;</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}/>&nbsp;
                    {formik.errors.password && formik.touched.password && (<span className="error">{formik.errors.password}</span>)}
                </div><br/>
                <div className="form-group">
                    <label>Confirm Password&nbsp;</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" 
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}/>&nbsp;
                    {formik.errors.confirmPassword && formik.touched.confirmPassword && (<span className="error">{formik.errors.confirmPassword}</span>)}
                </div><br/>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary"
                value="submit">Submit</button>
                </form>
        </div>
    )
}

export default Formik