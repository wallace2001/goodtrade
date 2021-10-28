export const actionTypes = {
    CHANGE: 'CHANGE_ROUTER',
}

export const changeRouter = (payload: string) => ({
    type: actionTypes.CHANGE,
    payload
});

export const ChangeRouter = (router: string) => (dispatch: any) => {
    dispatch(changeRouter(router));
}
