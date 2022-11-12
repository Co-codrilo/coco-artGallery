import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERRORS
} from "../constants/userConstans";

export const authReducer = (state = { user: {} }, action) => {
  switch (action.type) {

    case LOGIN_REQUEST:
      return {
        loading: true,
        isAthenticated: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAthenticated: true,
        user: action.payload
      }
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        isAthenticated: false,
        user: null,
        error: action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }
      dafault:
      return state
  }
}