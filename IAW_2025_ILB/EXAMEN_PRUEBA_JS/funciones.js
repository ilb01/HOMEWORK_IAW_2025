// Pregunta 1 

function calcularNota(problemes, bonus, penalitzador) {
    // Pas 1: Ordenar les notes de menor a major
    problemes.sort((a, b) => a - b);

    // Pas 2: Descartar les dues notes més baixes
    const millorsProblemes = problemes.slice(2); // Obtenim un nou array sense les dues notes més baixes

    // Pas 3: Convertir les notes de 0 a 10 a 0 a 1.25
    const convertit = millorsProblemes.map(nota => (nota / 10) * 1.25);

    // Pas 4: Calcular la mitjana de les 8 millors notes
    const suma = convertit.reduce((acc, val) => acc + val, 0);
    const mitjana = suma / convertit.length; // mitjana dels 8 millors

    // Pas 5: Afegir el bonus i restar el penalitzador
    const notaFinal = mitjana + bonus - penalitzador;

    // Retornar la nota final, assegurant-nos que no sigui inferior a 0
    return Math.max(notaFinal, 0);
}

// Exemple de crida de la funció
let problemes = [0, 5, 5, 5, 10, 5, 10, 5, 4, 8];
let bonus = 0.25;
let penalitzador = 1;
console.log("La nota final es", calcularNota(problemes, bonus, penalitzador));

// Pregunta 2 
// Array d’exemple: Nom, llinatges, edat i sou
let treballadors = [{ "nom": "Joan", "llinatges": "Ques Ferrer", "edat": 45, "sou": 15000 },
{ "nom": "Pere", "llinatges": "Gomila Alarde", "edat": 30, "sou": 10000 },
{ "nom": "Marta", "llinatges": "Salas García", "edat": 55, "sou": 40000 }]

function IncrementarSou(treballadors) {
    let agafarTreballadors = treballadors.map((treballador) => {
        // Si el treballador té més de 40 anys i el sou és igual o superior a 15000
        if (treballador.edat > 40 && treballador.sou >= 15000) {
            // Incrementem el sou en 2000 €
            return { ...treballador, sou: treballador.sou + 2000 };
        }
        // Si no compleix les condicions, simplement retornem el treballador tal qual
        return treballador;
    });
    return agafarTreballadors.sort((a, b) => a.edat - b.edat);
}

console.log(IncrementarSou(treballadors))


// Pregunta 3
let cartes = ["Ah", "Ad", "Ac", "As", "2h", "2d", "2c", "2s", "3h", "3d", "3c", "3s", "4h", "4d", "4c", "4s", "5h", "5d", "5c", "5s", "6h", "6d", "6c", "6s", "7h", "7d", "7c", "7s", "8h", "8d", "8c", "8s", "9h", "9d", "9c", "9s", "10h", "10d", "10c", "10s", "Jh", "Jd", "Jc", "Js", "Qh", "Qd", "Qc", "Qs", "Kh", "Kd", "Kc", "Ks"]

function mesclarBaralla(cartes) {
    const barallaDesordenada = [];

    // Mentres la baralla original tingui cartes
    while (cartes.length > 0) {
        // Triem una posició aleatòria basant-nos en la mida actual de la baralla
        const indexAleatori = parseInt(Math.random() * cartes.length);

        // Movem la carta de la baralla original a la baralla desordenada
        barallaDesordenada.push(cartes.splice(indexAleatori, 1)[0]);
    }

    return barallaDesordenada;
}

console.log(mesclarBaralla(cartes))
// Pregunta 4
let numbers = [5, 64, 9, 2, 83]

function RaizCuadrada(raiz) {
    let resultado = []
    raiz.forEach(num => {
        try {
            if (num < 0) {
                // Si el número és negatiu, llancem un error personalitzat
                throw new Error(`No es pot calcular l'arrel quadrada d'un número negatiu: ${num}`);
            }

            // Calculem l'arrel quadrada amb 3 decimals
            const arrelQuadrada = Math.sqrt(num).toFixed(3);

            // Afegim el resultat a l'array de resultats
            resultado.push(Number(arrelQuadrada));
        } catch (error) {
            // Capturem l'error i el mostrem per consola
            console.error(error.message);
        }
    });

    return resultado;
}
console.log(RaizCuadrada(numbers))

// 5
let array = [{ "nom": "Joan", "llinatges": "Ques Ferrer", "sexe": "H", "categoria": "Platinum", "hotel": "Gran Hotel Emili Darder", "entrada": "07/02/2024", "sortida": "09/03/2024", "encarregat": "Marina Darder" },
{ "nom": "Marina", "llinatges": "Gabriel Ques", "sexe": "D", "categoria": "Silver", "hotel": "Hotel Palma", "entrada": "07/03/2024", "sortida": "09/03/2024", "encarregat": "Pere Darder" },
{ "nom": "Josep", "llinatges": "Castellofells Miranda", "sexe": "H", "categoria": "", "hotel": "Hotel Wonder", "entrada": "17/02/2024", "sortida": "19/02/2024", "encarregat": "Marina Darder" }]

function PlantillaHtml(clientes) {
    for (client of clientes) {
        let benvolgut = client.sexe === 'H' ? 'Benvolgut' : 'Benvolguda';
        let usuari = client.categoria ? `Com usuari ${client.categoria} ` : '';

        let mensaje = `
        ${benvolgut} ${client.nom},
        ${usuari}és un plaer donar-te la benvinguda al ${client.hotel} del ${client.entrada} al ${client.sortida}.

        Jo i la resta del equip estam a la teva disposició per qualsevol cosa que necessitis.
        Atentament,
        ${client.encarregat}
        `
        console.log(mensaje);
    }
}

console.log(PlantillaHtml(array));

// 6
document.getElementById("logotip");
document.getElementById("btn-ir");
document.getElementById("categoria");
document.getElementById("especialitat");