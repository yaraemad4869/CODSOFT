import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { updatePost } from '../../Redux/Data/Actions'

const UpdatePost = (props) => {

    const navigate = useNavigate()
    if (props.user == null) {
        return <Navigate to="/login" />
    }
    const { id } = useParams()
    const post = props.posts.find(post => post.id == id)

    const titleRef = useRef()
    const bodyRef = useRef();

    const [inputTitle, setInputTitle] = useState(post.title);
    const [inputBody, setInputBody] = useState(post.body);
    return (
        <div>
            <form>
                <label htmlFor="title">
                    <h2>title</h2>
                </label>
                <input type="text" id='title' ref={titleRef} value={inputTitle} onChange={(e) => {
                    setInputTitle(e.target.value)
                }} />

                <label htmlFor="body">
                    <h2>body</h2>
                </label>
                <input type="text" id='body' ref={bodyRef} value={inputBody} onChange={(e) => {
                    setInputBody(e.target.value)
                }} />

                <button className={(props.mode ? "dark" : "light")} onClick={() => {
                    props.updatePost({ ...post, title: titleRef.current.value, body: bodyRef.current.value })
                    navigate("/")
                }} style={{ marginRight: "10px" }}>update</button>
                <button className={(props.mode ? "dark" : "light")} onClick={() => navigate("/")} style={{ marginRight: "10px" }}>cancel</button>

            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        posts: state.data.posts,
        mode: state.settings.mode,
        user: state.data.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updatePost: (post) => dispatch(updatePost(post))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdatePost)
