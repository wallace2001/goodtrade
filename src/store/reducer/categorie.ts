import { actionTypes } from "../action/categorie"

// Onde todos os estados são iniciados, e com os valores inicial
const initialState = {
    categorie: 'football',
}

export const categoryReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {

    // Ação chamada na action
    case actionTypes.CHANGE:
        return { ...state, categorie: payload }

    default:
        return state
    }
}
