export const FilteredNames = (value: {title: string, percentPlayers?: string}) => {
    const [firstName, ...rest] = value?.title.split(' ');
    const secondName = rest.join().replace(',', ' ');
    const arrayResult = [firstName, secondName];

    return arrayResult;
};