import React, { useRef } from 'react';
import { addPost, addUserPosts } from '../../Redux/Data/Actions';
import { connect } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const AddPost = (props) => {
    const titleRef = useRef()
    const bodyRef = useRef()
    const navigate = useNavigate()
    if (props.user == null) {
        return <Navigate to="/login" />
    }
    return (
        <div className='container'>
            <form>
                <label htmlFor="title"><h2>title</h2></label>
                <input type="text" name="title" id="title" ref={titleRef} />

                <label htmlFor="body"><h2>body</h2></label>
                <textarea name="body" id="body" ref={bodyRef}></textarea>
                <button className={(props.mode ? "dark" : "light")} type='button' onClick={() => {
                    const post = { id: 500, userId: props.user.id, title: titleRef.current.value, body: bodyRef.current.value }
                    props.addPost(post)
                    props.addUserPosts(post)
                    navigate("/")
                }}>add</button>
            </form>
        </div>
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
        addPost: (post) => dispatch(addPost(post)),
        addUserPosts: (post) => dispatch(addUserPosts(post))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddPost)
