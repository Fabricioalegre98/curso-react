const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [, , trunks] = characterNames;    

console.log({trunks});

const returnsArrayfn = () => {
    return ['ABC', 123];
}

const [letras, numeros] = returnsArrayfn();
console.log({letras, numeros});