// ActionTypes são as ações que podem ocorrer
export const actionTypes = {
    CHANGE: 'CHANGE_ROUTER',
}

// Quando um ação acontecer, vai jogar pra onde ela está sendo chamada, que é na reducer dela
export const changeRouter = (payload: string) => ({
    type: actionTypes.CHANGE,
    payload
});

// Função que pode ser chamada no projeto por qualquer arquivo que esteja englobado no app principal
// Aqui onde fica a lógica do acontece e onde manda pra salvar ou atualizar os estados do redux
export const ChangeRouter = (router: string) => (dispatch: any) => {
    dispatch(changeRouter(router));
}
