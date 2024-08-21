import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchData, fetchDataFailure, setUser, addUser } from '../../Redux/Data/Actions'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Signup = (props) => {

    async function apiSignup(values) {
        let test = props.users.find(user => user.email == values.email)
        if (test == undefined || test == null) {

            props.fetchData()
            let { data } = await axios
                .post("https://jsonplaceholder.typicode.com/users", values)
                .catch(err => {
                    props.fetchDataFailure(err.message)
                })
            props.setUser(values)
            props.addUser(values)
            navigate("/")

        }
        else {
            props.fetchDataFailure("Email is used already")

        }

        // props.fetchData();
        // let { data } = await axios.post(("https://jsonplaceholder.typicode.com/users"), values)
        //     .catch(err => {
        //         setApiError(err.response.data.errors.params + ":" + err.response.data.errors.msg)
        //         props.fetchDataFailure(err.response.data.errors.msg)
        //     })
        // if (data.message === "success") {
        //     props.setUser(values)
        //     props.addUser(values)
        //     navigate("/")
        // }
    }

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const phoneRef = useRef()
    const navigate = useNavigate()
    const SignupSchema = Yup.object({
        name: Yup.string()
            .min(2, 'First name is less than 2')
            .max(16, 'First name is more than 16')
            .required('Required'),
        phone: Yup.string().required('Required').matches(/^01[0125][0-9]{8}$/, "Doesn't match Phone Number"),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required').min(8, 'Password must be more than 8 characters').max(20, 'Password must be less than 20 characters').matches(/^(?!\d)(?=.*[A-Z])(?=.*[0-9])[a-z_]*/, "password should start with letters and can contain "),
    });
    let formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            password: ""
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            apiSignup({ ...values, id: 50 })
        }
    })

    return (
        <div className='container'>
            <h1>Sign Up</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">
                    <h2>name</h2>
                </label>
                <input type="text" id='name' ref={nameRef} value={formik.values.name} onChange={formik.handleChange} onBlur={(e) => {
                    formik.handleBlur(e)
                    if (formik.values.name && formik.values.name != '' && formik.values.name != null) {
                        if (formik.errors.name != undefined) {
                            e.target.style.border = "red 0.5px solid"
                        }
                        else {
                            e.target.style.border = "#33e133 0.5px solid"
                        }
                    }
                    else {
                        e.target.style.border = "0.5px solid rgba(0, 0, 0, 0.514)"
                    }
                }} />
                {formik.errors.name && formik.values.name != '' && formik.values.name != null ? <p className="text-danger">{formik.errors.name}</p> : null}

                <label htmlFor="email">
                    <h2>email</h2>
                </label>
                <input type="email" id='email' ref={emailRef} value={formik.values.email} onChange={formik.handleChange} onBlur={(e) => {
                    formik.handleBlur(e)
                    if (formik.values.email && formik.values.email != '' && formik.values.email != null) {
                        if (formik.errors.email != undefined) {
                            e.target.style.border = "red 0.5px solid"
                        }
                        else {
                            e.target.style.border = "#33e133 0.5px solid"
                        }
                    }
                    else {
                        e.target.style.border = "0.5px solid rgba(0, 0, 0, 0.514)"
                    }
                }} />
                {formik.errors.email && formik.values.email != '' && formik.values.email != null ? <p className="text-danger">{formik.errors.email}</p> : null}

                <label htmlFor="phone">
                    <h2>phone number</h2>
                </label>
                <input type="tel" id='phone' ref={phoneRef} value={formik.values.phone} onChange={formik.handleChange} onBlur={(e) => {
                    formik.handleBlur(e)
                    if (formik.values.phone && formik.values.phone != '' && formik.values.phone != null) {
                        if (formik.errors.phone != undefined) {
                            e.target.style.border = "red 0.5px solid"
                        }
                        else {
                            e.target.style.border = "#33e133 0.5px solid"
                        }
                    }
                    else {
                        e.target.style.border = "0.5px solid rgba(0, 0, 0, 0.514)"
                    }
                }} />
                {formik.errors.phone && formik.values.phone != '' && formik.values.phone != null ? <p className="text-danger">{formik.errors.phone}</p> : null}

                <label htmlFor="password">
                    <h2>password</h2>
                </label>
                <input type="password" id='password' ref={passwordRef} value={formik.values.password} onChange={formik.handleChange} onBlur={(e) => {
                    formik.handleBlur(e)
                    if (formik.values.password && formik.values.password != '' && formik.values.password != null) {
                        if (formik.errors.password != undefined) {
                            e.target.style.border = "red 0.5px solid"
                        }
                        else {
                            e.target.style.border = "#33e133 0.5px solid"
                        }
                    }
                    else {
                        e.target.style.border = "0.5px solid rgba(0, 0, 0, 0.514)"
                    }
                }} />
                {formik.errors.password && formik.values.password != '' && formik.values.password != null ? <p className="text-danger">{formik.errors.password}</p> : null}

                <button className={(props.mode ? "dark" : "light")} type='submit' disabled={!(formik.isValid && formik.dirty)}>sign up</button>
            </form>
            <h4 className='text-center text-danger'>{(props.error != null && props.error == "Email is used already" ? props.error : null)}</h4>
            <h4 className='text-center'>have an account already? <Link to="/login"><u>Login</u></Link></h4>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        error: state.data.error,
        loading: state.data.loading,
        user: state.data.user,
        users: state.data.users,
        mode: state.settings.mode
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => dispatch(setUser(user)),
        fetchDataFailure: (error) => dispatch(fetchDataFailure(error)),
        fetchData: () => dispatch(fetchData()),
        addUser: (user) => dispatch(addUser(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)
