export const MaskTime = (value: number) => {
    const mind = value % (60 * 60);
    const minute = Math.floor(mind / 60);

    const secd = mind % 60;
    const seconds = Math.ceil(secd);
    
    return `${minute}:${seconds}`
};