import { actionTypes } from "../action/router"

// Onde todos os estados são iniciados, e com os valores inicial
const initialState = {
    router: '',
}

export const routerReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {

    // Ação chamada na action
    case actionTypes.CHANGE:
        return { 
            ...state,
            router: payload,
        }

    default:
        return state
    }
}
