import {
    SEARCH_USERS,
    GET_REPOS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
} from '../types';


const handlers = {
    [SEARCH_USERS]: (state, action) => ({...state, users: action.payload, loading: false}),
    [GET_REPOS]: (state, action) => ({...state, repos: action.payload, loading: false}),
    [SET_LOADING]: state => ({...state, loading: true}),
    [CLEAR_USERS]: state => ({...state, users: []}),
    [GET_USER]: (state, action) => ({...state, state: action.payload, loading: false}),
    DEFAULT: state => state
};

export const githubReduscer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
};