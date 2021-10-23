export const actionTypes = {
    CHANGE: "CHANGE",
};

export const changeTools = (payload: string) => ({
    type: actionTypes.CHANGE,
    payload
});

export const ChangeTools = (category: string) => (dispatch: any) => {
    dispatch(changeTools(category));
};
