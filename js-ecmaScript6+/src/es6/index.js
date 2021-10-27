//Funcion antes de ES6

function newFunction(name, age, country) {
    var name = name || 'Montse';
    var age = age || 26;
    var country = country || 'Bolivia';
    console.log(name, age, country);
}

// ya con ES6

function newFunction2(name = 'Montse', age = 26, country = 'Bolivia') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Valeria', 27, 'MX');

// before

let hello = "hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// after
let hello = "hello";
let world = "world";
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// multilineas antes
let lorem = "Quiero escribir una frase epica para separarla \n" + "Otra frase epica que necesitamos.";

//multilineas en es6
let lorem2 = `Quiero escribir una frase epica x2 para separarla
Otra frase epica que necesitamos.`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name' : 'Montse',
    'age' : 26,
    'country' : 'MX'
}

//antes
console.log(person.name, person.age, person.country);

// despues de es6
let { name, age } = person;
console.log(name, age);

//operador de propagacion
let team1 = ['Montse', 'Alejandra', 'Carla'];
let team2 = ['Michael', 'Israel', 'Mauricio'];

let education = ['David', ...team1, ...team2];
console.log(education);

let name = 'Montse';
let age = 26;

//antes
obj = { name: name, age: age };

//con es6
obj2 = { name, age};
console.log(obj2);

