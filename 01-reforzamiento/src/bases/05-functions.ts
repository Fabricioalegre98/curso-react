
// 1. Definimos la firma de la función.
function greet (name: string): string {
    // 2. Definimos el cuerpo de la función.
    return `Hello ${name}`;
}

// 1. Definimos la firma de la función. 
const greet2 = (name: String) => `Hello ${name}`;



// 2. Llamamos a la función.
const message = greet ('Fabricio');
const message2 = greet2 ('Nicolas');
// 3. Imprimimos el resultado en la consola.
console.log(message, message2);

function getUser(){
    return{
        uid: 'ABC123',
        username: 'Fabricio'
    };
}
// 1. Definimos la firma de la función.
const getUser2 = () =>({// 2. Definimos el cuerpo de la función.
    uid: 'ABC123',
    username: 'Fabricio'
    });



const user = getUser();
const user2= getUser2();
console.log(user, user2);
