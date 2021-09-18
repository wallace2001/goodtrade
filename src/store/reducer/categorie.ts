import { actionTypes } from "../action/categorie"

const initialState = {
    categorie: 'football',
}

export const categoryReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {

    case actionTypes.CHANGE:
        return { ...state, categorie: payload }

    default:
        return state
    }
}
