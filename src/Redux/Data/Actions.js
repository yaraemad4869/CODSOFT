import * as ActionTypes from "./ActionTypes";
import axios from "axios";
export const fetchData = () => {
    return {
        type: ActionTypes.FETCH_DATA
    };
};
export const fetchPostsSuccess = (posts) => {
    return {
        type: ActionTypes.FETCH_POSTS_SUCCESS,
        payload: posts
    };
};
export const fetchUsersSuccess = (users) => {
    return {
        type: ActionTypes.FETCH_USERS_SUCCESS,
        payload: users
    };
};
export const fetchDataFailure = (error) => {
    return {
        type: ActionTypes.FETCH_DATA_FAILURE,
        payload: error
    };
};

export const fetchPostsFunction = () => {
    return function (dispatch) {
        dispatch(fetchData())
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                dispatch(fetchPostsSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchDataFailure(err.message))
            })
    }
}
export const fetchUsersFunction = () => {
    return function (dispatch) {
        dispatch(fetchData())
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                dispatch(fetchUsersSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchDataFailure(err.message))
            })
    }
}

export const setUser = (user) => {
    return {
        type: ActionTypes.SET_USER,
        payload: user
    };
};

export const addPost = (post) => {
    return {
        type: ActionTypes.ADD_POST,
        payload: post
    };
};
export const addUser = (user) => {
    return {
        type: ActionTypes.ADD_USER,
        payload: user
    };
};

export const deletePost = (post) => {
    return {
        type: ActionTypes.DELETE_POST,
        payload: post
    };
};
export const deleteUser = (user) => {
    return {
        type: ActionTypes.DELETE_USER,
        payload: user
    };
};

export const updatePost = (post) => {
    return {
        type: ActionTypes.UPDATE_POST,
        payload: post
    };
};
export const updateUser = (user) => {
    return {
        type: ActionTypes.UPDATE_USER,
        payload: user
    };
};

export const addUserPosts = (post) => {
    return {
        type: ActionTypes.ADD_USER_POSTS,
        payload: post
    };
};