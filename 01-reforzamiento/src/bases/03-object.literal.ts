
// 1. Definimos la interfaz principal que estructurará los datos de la persona.
interface person {
    firstName: String;
    lastName: String;
    age: number;
    // 2. ¡La magia está acá! La propiedad 'address' no es un tipo simple (como un número),
    // sino que exige cumplir obligatoriamente con la estructura de OTRA interfaz.
    address: address; 
}

// 3. Definimos la interfaz secundaria que detalla exactamente cómo debe ser una dirección.
interface address {
    postalCode: number;
    city: String;
}

// 4. Creamos el objeto literal. Al asignarle ": person", TypeScript vigila que 
// incluyas firstName, lastName, age y, además, un objeto address válido.
const IronMan: person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    // 5. Aquí abrimos un nuevo par de llaves para el objeto anidado. 
    // Este bloque interno debe cumplir estrictamente con la interfaz 'address'.
    address: {
        postalCode: 12345,
        city: 'New York'
    } 
};

// 6. Imprimimos el objeto completo en la consola.
console.log(IronMan);



// 2. Usamos structuredClone() para hacer una "copia profunda" (deep copy) del objeto.
// Esto crea un clon exacto, pero totalmente independiente en la memoria.
//const spiderMan = structuredClone(IronMan);

// 3. Sobrescribimos las propiedades del NUEVO objeto (el clon).
//spiderMan.firstName = 'Peter';
//spiderMan.lastName = 'Parker';
//spiderMan.age = 18;

// 4. Imprimimos ambos objetos. 
// Verás que IronMan sigue intacto y spiderMan tiene sus propios datos.
//console.log(IronMan, spiderMan);