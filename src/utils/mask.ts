
// Função que mascara o tempo em minutos e segundos. EX: 19:02
export const MaskTime = (value: number) => {
    const mind = value % (60 * 60);
    const minute = Math.floor(mind / 60);

    const secd = mind % 60;
    const seconds = Math.ceil(secd);
    
    return `${minute}:${seconds}`
};