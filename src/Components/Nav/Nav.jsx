import React from 'react'
import { connect } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { changeMode } from '../../Redux/Settings/Actions'
import { setUser } from '../../Redux/Data/Actions'

const Nav = (props) => {
    const navigate = useNavigate()
    return (
        <header>
            <nav className={(props.mode ? "dark" : "light")}>
                <div className="container text-center m-5 flex-row-sm m-sm-0 gap-sm-30 justify-between align-items-baseline ">
                    <Link to={"/"} className='col-12 col-sm-1'><h2>blogyoo</h2></Link>
                    <div className='flex-row gap-10 text-center justify-between col-12 col-sm-7 col-md-6 col-lg-5 align-items-center'>

                        <NavLink to={"/"}>home</NavLink>

                        {
                            (props.user == null) ?
                                <>
                                    <NavLink to="/signup">sign up</NavLink>
                                    <NavLink to="/login">login</NavLink>
                                </>
                                :
                                <>
                                    <NavLink to="/profile">profile</NavLink>
                                    <button className={'btn-' + (props.mode ? "dark" : "light")} onClick={() => props.setUser(null)}>logout</button>
                                </>
                        }
                        <button className={'btn-' + (props.mode ? "dark" : "light")} onClick={() => {
                            props.changeMode()
                        }}>mode</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.data.user,
        mode: state.settings.mode
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeMode: () => dispatch(changeMode()),
        setUser: (user) => dispatch(setUser(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)
