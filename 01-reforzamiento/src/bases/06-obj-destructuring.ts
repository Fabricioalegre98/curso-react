

const person ={
    name: 'Tony',
    age: 45,
    key: 'Ironman',
    rank: 'Ironman'
}

const { name:ironManName, age, key} = person;

console.log({ironManName, age, key});

interface Hero {
    name: string;
    age: number;
    key: string;
    rank: string;
}

const useContext = ( {key, name, age, rank = 'sin rango'}: Hero ) => {
    return {
        keyName: key,
        user: {
            name: name,
            age: age,
        },
        rank: rank,
    };
};

const {rank, keyName, user: {name}} = useContext(person);
console.log({rank,keyName, name});