import * as ActionTypes from "./ActionTypes";
const intialState = {
    posts: [],
    users: [],
    user: null,
    userPosts: [],
    loading: false,
    error: null
};
export const DataReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_USER:
            return {
                ...state,
                loading: false,
                user: payload
            };
        case ActionTypes.ADD_USER:
            return {
                ...state,
                loading: false,
                users: [...state.users, payload]
            };
        case ActionTypes.ADD_POST:
            return {
                ...state,
                loading: false,
                posts: [payload, ...state.posts]
            };

        case ActionTypes.DELETE_USER:
            return {
                ...state,
                loading: false,
                users: state.users.filter(user => user.id != payload.id),
                user: null
            };
        case ActionTypes.DELETE_POST:
            return {
                ...state,
                loading: false,
                posts: state.posts.filter(post => post.id != payload.id)
            };
        case ActionTypes.ADD_USER_POSTS:
            return {
                ...state,
                loading: false,
                userPosts: [...state.userPosts, payload]
            };

        case ActionTypes.UPDATE_USER:
            return {
                ...state,
                loading: false,
                users: state.users.map(user => {
                    if (user.id == payload.id) {
                        return { ...user, name: payload.name, phone: payload.phone, email: payload.email }
                    }
                    return user
                })
            };


        case ActionTypes.UPDATE_POST:
            return {
                ...state,
                loading: false,
                posts: state.posts.map(post => {
                    if (post.id == payload.id) {
                        return { ...post, title: payload.title, body: payload.body }
                    }
                    return post
                })
            };

        case ActionTypes.FETCH_DATA:
            return {
                ...state,
                loading: true
            };
        case ActionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: payload
            };
        case ActionTypes.FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload
            };


        case ActionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: payload
            };

        default:
            return state;
    }
};