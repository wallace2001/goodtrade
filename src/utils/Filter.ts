export const FilteredNames = (value: {title: string | undefined, percentPlayers?: string} | null) => {

    if (!value || value.title === undefined){
        return;
    }

    const [firstName, ...rest] = value?.title.split(' ');
    const secondName = rest.join().replace(',', ' ');
    const arrayResult = [firstName, secondName];

    return arrayResult;
};