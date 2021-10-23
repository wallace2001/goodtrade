import { actionTypes } from "../action/router"

const initialState = {
    router: '',
}

export const routerReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {

    case actionTypes.CHANGE:
        return { 
            ...state,
            router: payload,
        }

    default:
        return state
    }
}
