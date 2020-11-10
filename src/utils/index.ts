export const uuid = (): string => {
    const alphabet = 'qwertyuiopasdfghjklzxcvbnm';
    let uid = '';
    for(let i = 0; i < 16; i++) {
        const character = alphabet[Math.floor(Math.random() * 26)];
        uid = uid.concat(character)
    }

    return uid;
}