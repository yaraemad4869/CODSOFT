import React from 'react'
import { connect } from 'react-redux'
import { addUserPosts } from '../../Redux/Data/Actions'

const Post = (props) => {
    // if (props.user != null && props.user.id == props.post.userId) {
    //     props.addUserPosts(props.post)
    // }
    return (
        <>

            {props.users.map((user) => {

                if (user.id == props.post.userId)
                    return (
                        <div key={props.post.id} className='post' style={{
                            border: (props.mode ? "solid 0.5px rgba(255, 255, 255, 0.24)" : "solid 0.5px rgba(0, 0, 0, 0.24)")
                        }}>
                            <h2>{user.name}</h2>
                            <h3>{props.post.title}</h3>
                            <h4>{props.post.body}</h4>
                            {props.children}
                        </div>
                    )
            })}
        </>
    )

}
const mapStateToProps = (state) => {
    return {
        users: state.data.users,
        mode: state.settings.mode,
        user: state.data.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addUserPosts: (post) => dispatch(addUserPosts(post))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post)
