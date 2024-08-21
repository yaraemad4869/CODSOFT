import React from 'react'
import Post from '../../Components/Post/Post'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Posts = (props) => {
    const navigate = useNavigate()

    return (
        <div className='container'>
            {props.posts.map((post) => {
                return <Post key={post.id} post={post} />
            })}
            <button className={'fixed ' + (props.mode ? "dark" : "light")} onClick={() => navigate("/addpost")}>add post</button>
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


export default connect(mapStateToProps)(Posts)
