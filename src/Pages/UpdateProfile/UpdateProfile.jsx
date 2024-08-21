import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { setUser, updateUser } from '../../Redux/Data/Actions'

const UpdateUser = (props) => {

    const navigate = useNavigate()
    if (props.user == null) {
        return <Navigate to="/login" />
    }

    const nameRef = useRef()
    const emailRef = useRef();
    const phoneRef = useRef();


    const [inputName, setInputName] = useState(props.user.name);
    const [inputPhone, setInputPhone] = useState(props.user.phone);
    const [inputEmail, setInputEmail] = useState(props.user.email);
    return (
        <div>
            <form>
                <label htmlFor="name">
                    <h2>name</h2>
                </label>
                <input type="text" id='name' ref={nameRef} value={inputName} onChange={(e) => {
                    setInputName(e.target.value)
                }} />

                <label htmlFor="phone">
                    <h2>phone</h2>
                </label>
                <input type="text" id='phone' ref={phoneRef} value={inputPhone} onChange={(e) => {
                    setInputPhone(e.target.value)
                }} />

                <label htmlFor="email">
                    <h2>email</h2>
                </label>
                <input type="text" id='email' ref={emailRef} value={inputEmail} onChange={(e) => {
                    setInputEmail(e.target.value)
                }} />

                <button className={(props.mode ? "dark" : "light")} onClick={() => {
                    props.updateUser({ ...props.user, name: nameRef.current.value, email: emailRef.current.value, phone: phoneRef.current.value })
                    props.setUser({ ...props.user, name: nameRef.current.value, email: emailRef.current.value, phone: phoneRef.current.value })
                    navigate("/")
                }} style={{ marginRight: "10px" }}>update</button>
                <button className={(props.mode ? "dark" : "light")} onClick={() => navigate("/")} style={{ marginRight: "10px" }}>cancel</button>

            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        mode: state.settings.mode,
        user: state.data.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
        setUser: (user) => dispatch(setUser(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser)
