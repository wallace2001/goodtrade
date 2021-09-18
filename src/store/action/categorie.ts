export const actionTypes = {
    CHANGE: "CHANGE",
};

export const changeCategory = (payload: string) => ({
    type: actionTypes.CHANGE,
    payload
});

export const ChangeCategory = (category: string) => (dispatch: any) => {
    dispatch(changeCategory(category));
};
