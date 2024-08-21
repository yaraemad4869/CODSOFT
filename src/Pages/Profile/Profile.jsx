import { connect } from 'react-redux'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { deletePost, deleteUser, setUser } from '../../Redux/Data/Actions'
import Post from "../../Components/Post/Post"
const Profile = (props) => {
    const navigate = useNavigate()
    if (props.user == null) {
        return <Navigate to="/login" />
    }
    return (
        <div>
            <button className={(props.mode ? "dark" : "light")} onClick={() => navigate("/" + props.user.id + "/profile/update")} style={{ marginRight: "10px" }}>update profile</button>
            <button className={(props.mode ? "dark" : "light")} onClick={() => {
                props.deleteUser(props.user)
                navigate("/")
            }}>delete account</button>

            <h1>Name: {props.user.name}</h1>
            <h2>Email: {props.user.email}</h2>
            <h2>Phone: {props.user.phone}</h2>
            <button className={(props.mode ? "dark" : "light")} onClick={() => {
                props.setUser(null)
                navigate("/")
            }}>logout</button>
            {((props.userPosts != null && props.userPosts.length != 0)
                ? <>
                    <h1>Posts</h1>
                    <div>
                        {

                            props.userPosts.map(post => {
                                return <Post post={post}>
                                    <button className={(props.mode ? "dark" : "light")} onClick={() => navigate("/" + post.id + "/update")} style={{ marginRight: "10px" }}>update post</button>
                                    <button className={(props.mode ? "dark" : "light")} onClick={() => {
                                        props.deletePost(post)
                                    }}>delete post</button>
                                </Post>
                            })

                        }
                    </div>
                </>
                : null)}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.data.user,
        mode: state.settings.mode,
        userPosts: state.data.userPosts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (user) => dispatch(deleteUser(user)),
        setUser: (user) => dispatch(setUser(user)),
        deletePost: (post) => dispatch(deletePost(post))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
