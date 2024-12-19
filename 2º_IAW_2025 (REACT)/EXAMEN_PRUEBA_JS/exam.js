// Pregunta 1 corto
function transformarNota(nota) {
    return nota / 8;
}

// Funcion para ordernar "comparar" sort === ascedente 
function compare(a, b) {
    return b - a;
}

function calcularNota(exercices, bonus, malus) {
    var sumaNotes = 0;

    // .sort sirve para ordernar 
    var sortedExercices = exercices.sort(compare)
    // .pop elimina el ultimo array
    sortedExercices.pop()
    sortedExercices.pop()

    for (let nota of sortedExercices) {
        sumaNotes += transformarNota(nota)

    }
    return (sumaNotes / 8) + bonus - malus;
}

// Pregunta 1 Larga
function calcularNota(exercices, bonus, malus) {
    var sumaNotes = 0;

    var notaInferior1 = 10;
    var posicioNotaInferior1 = 2;
    var notaInferior2 = 10;
    var posicioNotaInferior2 = 2;

    // let problemes = [0, 5, 5, 5, 10, 5, 10, 5, 4, 8];
    for (let i = 0; i < exercices.length; i++) {
        if (exercices[i] < notaInferior1) {
            notaInferior1 = exercices[i];
            posicioNotaInferior1 = i;
        } else if (exercices[i] < notaInferior2) {
            notaInferior2 = exercices[i];
            posicioNotaInferior2 = i;
        }
    }
    for (let i = 0; i < exercices.length; i++) {
        if (i != posicioNotaInferior1 && i != posicioNotaInferior2) {
            sumaNotes += exercices[i];
        }
    }
    return (sumaNotes / 8) + bonus - malus;
}

// Pregunta 1 muy corta
function calcularNota(exercices, bonus, malus) {
    let sum = exercices
        .sort((a, b) => b - a)
        .slice(0, 8)
        .reduce((acc, cur) => acc + (cur / 10) * 1.25, 0) +
        bonus - malus;
    return sum;
}
let problemes = [0, 5, 5, 5, 10, 5, 10, 5, 4, 8];
let bonus = 0.25;
let penalitzador = 1;
// console.log("La nota final es", calcularNota(problemes, bonus, penalitzador));


// Pregunta 2
// let treballadors = [{ "nom": "Joan", "llinatges": "Ques Ferrer", "edat": 45, "sou": 15000 },
// { "nom": "Pere", "llinatges": "Gomila Alarde", "edat": 30, "sou": 10000 },
// { "nom": "Marta", "llinatges": "Salas García", "edat": 55, "sou": 40000 }]

// function incrementarSou(client) {
//     // .map coge los valores de una array
//     let agafarTreballadors = client.map((persona) => {
//         if (persona.edat > 40 && persona.sou >= 15000) {
//             return persona.sou + 2000;
//         }
//         return persona;

//     });
//     return agafarTreballadors.sort((a, b) => a.edat - b.edat);
// }
// console.log(incrementarSou(treballadors))

// Pregunta 2 (opcion Toni)
function souTreballadors(array) {
    var edat = 'edat'
    var sou = 'sou'

    for (let i = 0; i < array.length; i++) {
        if (array[i][sou] >= 15000 && array[i][edat] > 40) {
            array[i][sou] += 2000;
        }
    }
    // Para ordenar de menor a mayor
    return array.sort((a, b) => a[edat] - b[edat]);
}

let treballadors = [{ "nom": "Joan", "llinatges": "Ques Ferrer", "edat": 45, "sou": 15000 },
{ "nom": "Pere", "llinatges": "Gomila Alarde", "edat": 30, "sou": 10000 },
{ "nom": "Marta", "llinatges": "Salas García", "edat": 55, "sou": 40000 }]

console.log(souTreballadors(treballadors));

// Pregunta 3

let numeros = ["Ah", "Ad", "Ac", "As", "2h", "2d", "2c", "2s", "3h", "3d", "3c", "3s", "4h", "4d", "4c", "4s", "5h", "5d", "5c",
    "5s", "6h", "6d", "6c", "6s", "7h", "7d", "7c", "7s", "8h", "8d", "8c", "8s", "9h", "9d", "9c", "9s", "10h",
    "10d", "10c", "10s", "Jh", "Jd", "Jc", "Js", "Qh", "Qd", "Qc", "Qs", "Kh", "Kd", "Kc", "Ks"]

function barallaPocker(carta) {
    let barallaDesordenada = []

    while (carta.length > 0) {
        const numAleatori = parseInt(Math.random() * carta.length);
        // .push añade un nuevo valor en la array 
        barallaDesordenada.push(carta.splice(numAleatori, 1)[0]);
    }
    return barallaDesordenada;
}

console.log(barallaPocker(numeros));

// Pregunta 3 (opcion Toni con comentarios)
// Función que mezcla de forma aleatoria un mazo de cartas
function ramdomize(cards) {
    const scrambledDeck = [] // Arreglo que almacenará el mazo mezclado

    // Mientras queden cartas en el mazo original
    while (cards.length > 0) {
        // Escoge una posición aleatoria dentro del mazo de cartas restante
        const randomPosition = Math.floor(Math.random() * cards.length);

        // Toma la carta de esa posición y la elimina del mazo original, añadiéndola al mazo mezclado
        // splice devuelve un array, por eso se usa [0] para obtener la carta eliminada
        scrambledDeck.push(cards.splice(randomPosition, 1)[0]);
    }

    // Retorna el nuevo mazo de cartas ya mezclado
    return scrambledDeck;
}

// Declaración de un mazo de cartas estándar (4 palos: corazones, diamantes, tréboles y picas, de As a Rey)
let cards = [
    "Ah", "Ad", "Ac", "As", "2h", "2d", "2c", "2s", "3h", "3d", "3c", "3s",
    "4h", "4d", "4c", "4s", "5h", "5d", "5c", "5s", "6h", "6d", "6c", "6s",
    "7h", "7d", "7c", "7s", "8h", "8d", "8c", "8s", "9h", "9d", "9c", "9s",
    "10h", "10d", "10c", "10s", "Jh", "Jd", "Jc", "Js", "Qh", "Qd", "Qc", "Qs",
    "Kh", "Kd", "Kc", "Ks"
]

// Imprime el mazo mezclado
console.log(ramdomize(cards));

// Pregunta 4 (opcion Toni)
function calculateSquareRoot(numbers) {
    let resultats = []

    numbers.forEach(value => {
        try {
            if (value < 0) throw "Error: negative number";
            resultats.push(Math.sqrt(value).toFixed(3));
        } catch (err) {
            resultats.push(err);
        }
    });
    return resultats;
}

let items = [5, 64, 9, 2, 83]
console.log(calculateSquareRoot(items));

// Pregunta 5
let usuaris = [{
    "nom": "Joan", "llinatges": "Ques Ferrer", "sexe": "H", "categoria": "Platinum", "hotel": "Gran Hotel Emili Darder", "entrada": "07 /02 / 2024", "sortida": "09 /03 / 2024", "encarregat": "Marina Darder"
},
{
    "nom": "Marina", "llinatges": "Gabriel Ques", "sexe": "D", "categoria": "Silver", "hotel": "Hotel Palma",
    "entrada": "07/03/2024", "sortida": "09/03/2024", "encarregat": "Pere Darder"
},
{
    "nom": "Josep", "llinatges": "Castellofells Miranda", "sexe": "H", "categoria": "", "hotel": "Hotel Wonder",
    "entrada": "17/02/2024", "sortida": "19/02/2024", "encarregat": "Marina Darder"
}]

function usuariHtml(clients) {
    for (client of clients) {
        let bienvenido = client.sexe = 'H' ? "Benvolgut" : 'Benvolguda';
        let categoria = client.categoria ? `Com usuari ${client.categoria}` : '';
        let mensaje = `
        ${bienvenido} ${client.nom},
        ${categoria} es un plaer donar-te la benvinguda al ${client.hotel} del ${client.entrada} al ${client.sortida}.

        Jo i la resta del equip estam a la reva disposició per qualsevol cosa que necessitis.
        
        Atentament, 
        ${client.encarregat}`;
        console.log(mensaje);
    }
}
console.log(usuariHtml(usuaris));

// Pregunta 5 (opcion Toni)
function generateResponse(items) {
    for (var value of items) {
        var greeting = value["sexe"] == "H" ? "Benvolgut" : "Benvolguda";
        var category = value.categoria != "" ? "Com usuari " + value.categoria + " es" : "Es";
        console.log(`
            ${greeting}${value.nom},
            ${category} es un plaer donar-te la benvinguda al ${value.hotel} del ${value.entrada} al ${value.sortida}.

            Jo i la resta del equip estam a la reva disposició per qualsevol cosa que necessitis.
            
            Atentament, 
            ${value.encarregat}
            `);
    }
}

console.log(generateResponse(usuaris));


// Pregunta 7
function generateResponseLet() {
    let y = 50; // Declaro una variable y con valor 50
    if (true) {
        let y = 80; // Declaro otra variable y dentro del bloque if, esta es diferente
    } 
    console.log(y); // Imprime 50 porque está usando la y de afuera (50)
}

function generateResponseVar() {
    var x = 50; // Declaro una variable x con valor 50
    if (true) {
        var x = 80; // Esta x es la misma que la de arriba, así que cambia el valor
    } 
    console.log(x); // Imprime 80 porque x fue cambiada dentro del if
}

generateResponseLet(); // Llama a la función que usa let
generateResponseVar(); // Llama a la función que usa var


// Pregunta 8 
let num = [1, 2, 3, 4, 5];
let num1 = [5, 6, 7, 8];

function cambioPosicio(array, posiciones) {
    if (!Array.isArray(array) || array.some(item => typeof item !== 'number')) {
        return "Error: El array debe contener solo números.";
    }
    posiciones %= array.length;
    return array.slice(-posiciones).concat(array.slice(0, -posiciones));
}

console.log(cambioPosicio(num, 2)); // [4, 5, 1, 2, 3]
console.log(cambioPosicio(num1, 2));    // [7, 8, 5, 6]


// Pregunta 8 (opcion Toni)
function rotateArray(array, steps) {
    if (!array.every(element => typeof element === "number")) {
        return "Error: the array can only contain numbers";
    }
    const rotateArray = {
        ...array.slice(-steps),...array.slice(0,steps)
    }
    return rotateArray;
}
var array = [1,2,3,4,5,6]
var steps = 2;

console.log(rotateArray(array,steps));