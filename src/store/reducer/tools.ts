import { actionTypes } from "../action/tools"

// Onde todos os estados são iniciados, e com os valores inicial
const initialState = {
    tool: '',
}

export const toolReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {

    // Ação chamada na action
    case actionTypes.CHANGE:
        return { ...state, tool: payload }

    default:
        return state
    }
}
