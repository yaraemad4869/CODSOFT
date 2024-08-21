import React, { useEffect } from 'react'
import { changeMode } from '../../Redux/Settings/Actions'
import { fetchPostsFunction, fetchUsersFunction } from '../../Redux/Data/Actions'
import { Outlet } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import Nav from '../../Components/Nav/Nav'


const Layout = (props) => {
    let htmlPage = document.querySelector("html")

    if (props.mode) {

        htmlPage.style.cssText = `
        background-color: black;
        color:white;
        `
    }
    else {
        htmlPage.style.cssText = `
        background-color: white;
        color:black;
        `
    }
    useEffect(() => {
        props.fetchUsersFn()
        props.fetchPostsFn()


    }, [])

    return (
        <>
            <Nav />
            <div style={{ marginBottom: "100px" }}></div>
            <Outlet />
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        posts: state.data.posts,
        mode: state.settings.mode,
        users: state.data.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeMode: () => dispatch(changeMode()),
        fetchPostsFn: () => dispatch(fetchPostsFunction()),
        fetchUsersFn: () => dispatch(fetchUsersFunction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
