import { SET_USER, GET_USER, LOGIN, REMOVE_USER, LOGIN_FAILURE, LOGOUT } from './actionTypes'


export function login(user) {
    return {
        type: LOGIN,
        payload: user
    }
}

export function loginFailure(message, error_code) {
    return {
        type: LOGIN_FAILURE,
        payload: {
            message,
            error_code
        }
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}

export function removeUser() {
    return {
        type: REMOVE_USER
    }
}

export function getUser() {
    return {
        type: GET_USER,
    }
}

export function setUser(user) {
    return {
        type: SET_USER,
        payload: user,
    }
}