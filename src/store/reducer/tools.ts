import { actionTypes } from "../action/tools"

const initialState = {
    tool: '',
}

export const toolReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {

    case actionTypes.CHANGE:
        return { ...state, tool: payload }

    default:
        return state
    }
}
