import { ADD_USER, CLOSE_MODAL_DIALOG, OPEN_MODAL_DIALOG, SET_INITIAL_DATA, UPDATE_USER_LIST } from "../actions/users"
import { setData } from "../../utils"


const initialState = {
    activeComponent: "",
    modalData: {},
    userList: []
}

export default function usersReducer(state = { ...initialState }, action) {
    switch (action.type) {

        case OPEN_MODAL_DIALOG:
            return { ...state, activeComponent: action.modal, modalData: action.data }

        case CLOSE_MODAL_DIALOG:
            return { ...state, activeComponent: "", modalData: action.data }

        case SET_INITIAL_DATA:
            return { ...state, userList: action.data }

        case ADD_USER:
            let updatedUserList = [...state.userList]
            updatedUserList.push(action.data);
            setData("user-list", updatedUserList)
            return { ...state, userList: updatedUserList }

        case UPDATE_USER_LIST:
            setData("user-list", action.data)
            return { ...state, userList: action.data }

        default:
            return state
    }
}