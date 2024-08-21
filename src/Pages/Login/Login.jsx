import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { fetchData, fetchDataFailure, setUser } from '../../Redux/Data/Actions';

const Login = (props) => {

    const navigate = useNavigate()
    const apiLogin = (values) => {
        const user = props.users.find(user => user.email == values.email)

        if (user == [] || user == null) {
            props.fetchDataFailure("This email does not exist")
        }
        else if (user.password == values.password) {
            props.setUser(user)
            navigate("/")
        }
        else {
            props.fetchDataFailure("Email or password is incorrect")
        }
    }
    const loginSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(8, 'Password must be more than 8 characters').max(20, 'Password must be less than 20 characters').matches(/^(?!\d)(?=.*[A-Z])(?=.*[0-9])[a-z_]*/, "Password must contain Capital Character and Number")
    })
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: values => {
            apiLogin(values)
        }
    })

    return (
        <div className='container'>
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit}>

                <label htmlFor="email">
                    <h3>Email</h3>
                </label>
                <input type="email" id='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.email && formik.values.email != '' && formik.values.email != null ? <p className="text-danger">{formik.errors.email}</p> : null}

                <label htmlFor="password">
                    <h3>password</h3>
                </label>
                <input type="text" id='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.password && formik.values.password != '' && formik.values.password != null ? <p className="text-danger">{formik.errors.password}</p> : null}

                <button className={(props.mode ? "dark" : "light")} type='submit' disabled={!(formik.isValid && formik.dirty)}>submit</button>
            </form>
            <h4 className='text-center text-danger'>{(props.error != null && props.error == "This email does not exist" ? props.error : (null))}</h4>
            <h4 className='text-center'>Doesn't have an account? <Link to="/signup"><u>sign up</u></Link></h4>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        users: state.data.users,
        user: state.data.user,
        loading: state.data.loading,
        mode: state.settings.mode,
        error: state.data.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => dispatch(setUser(user)),
        fetchData: () => dispatch(fetchData()),
        fetchDataFailure: (err) => dispatch(fetchDataFailure(err))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
