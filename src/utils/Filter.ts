
// Filtrando os titulos e retornando dois valores, para poder aplicar um estilo diferente na segunda palavra
export const FilteredNames = (value: {title: string | undefined, percentPlayers?: string} | null) => {

    // Verifica se existe um valor, se não sai fa função
    if (!value || value.title === undefined){
        return;
    }

    const [firstName, ...rest] = value?.title.split(' ');
    const secondName = rest.join().replace(',', ' ');
    const arrayResult = [firstName, secondName];

    return arrayResult;
};