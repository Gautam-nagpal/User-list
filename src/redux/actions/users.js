


// Custom Modal open & close
export const OPEN_MODAL_DIALOG = "OPEN_MODAL_DIALOG";

export function openCustomModalDialog(data, modal) {
    return dispatch => {
        dispatch({
            type: OPEN_MODAL_DIALOG,
            modal: modal,
            data: data
        })
    }
}

export const CLOSE_MODAL_DIALOG = "CLOSE_MODAL_DIALOG";

export function closeCustomModalDialog(data = {}) {
    return dispatch => {
        dispatch({
            type: CLOSE_MODAL_DIALOG,
            data: data
        })
    }
}

export const SET_INITIAL_DATA = "SET_INITIAL_DATA";

export function setInitialData(data = {}) {
    return dispatch => {
        dispatch({
            type: SET_INITIAL_DATA,
            data: data
        })
    }
}

export const ADD_USER = "ADD_USER";

export function addUser(data = {}) {
    return dispatch => {
        dispatch({
            type: ADD_USER,
            data: data
        })
    }
}

export const UPDATE_USER_LIST = "UPDATE_USER_LIST";

export function updateUserList(data = {}) {
    return dispatch => {
        dispatch({
            type: UPDATE_USER_LIST,
            data: data
        })
    }
}