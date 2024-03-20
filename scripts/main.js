//Variables//
//alert("JavaScript funcionando correctamente");//
let variableSinValor;
console.log("Variable",variableSinValor);
let booleano1 = false;
let booleano2 = true;
const PI = 3.14;
console.log("PI",PI);
const TAU = 2 * PI;
console.log(TAU);
const miNombre = "Juanjo";
console.log("Nombre",miNombre);
const miNumeroFav = 17;
console.log("miNumeroFav",miNumeroFav);
const booleano3 = true;
console.log(miNombre.length);
console.log("tipoNumero",typeof miNumeroFav);
console.log("Mi nombre es " + miNombre + " mi numero favorito es " + miNumeroFav);
const crack = "Seré un crack en JavaScript al terminar el bootcamp";
console.log(crack.toUpperCase());
const hola = "Hola soy un crack";
console.log(hola.substring(0,4));
console.log("convertir numero a string",miNumeroFav.toString());
const edad = 32;
console.log(`Mi edad es ${edad}`);
console.log(PI.toFixed(2));

//Arrays//
const arrayVacio = [];
const arrayNumeros = [0,1,2,3,4,5,6,7,8,9];
console.log(arrayNumeros);
const arrayNumeros2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(arrayNumeros2);
const arrayNumerosPares = [0,2,4,6,8];
console.log(arrayNumerosPares);
const arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
console.log(arrayNumerosNeg);
const holaMundo = ['Hola','Mundo'];
console.log(holaMundo);
const loGuardoTodo = ['hola','que',23,42.33,'tal'];
console.log(loGuardoTodo);
const arrayDeArrays = [[756,'nombre'], [225,'apellido'], [298,'direccion']];
console.log(arrayDeArrays);
console.log('Longitud',loGuardoTodo.length);
loGuardoTodo.push(17);
console.log(loGuardoTodo);
console.log(typeof loGuardoTodo[1]);
loGuardoTodo.push('Euralio');
console.log(loGuardoTodo);

//Objetos//
const coche = {
        marca: 'opel',
        modelo: 'astra',
        matricula: '2669BSV',
};
console.log(coche);
const casa = {
        codPostal: 46017,
        calle: 'avd Aragon',
        portal: 78,
        piso: 20,
};
console.log(casa);
const FullStackDeveloper = {
    arrayLenguajes: ['javascript','php'],
    arrayProyectos: ['mi pagina personal'],
};
console.log(FullStackDeveloper);
const perro = {
        nombre: 'sheldon',
        raza: 'mestizo',
        color: 'negro',
        edad: 8,
};
console.log(perro);
const Noticia = {
        titular: 'Premio gordo en Valencia',
        cuerpo: 'Toca el primer premio del euromillones a una familia en Valencia',
};
console.log(Noticia);
const Persona = {
        nombre: 'pepe',
        apellidos: ['Garcia','diaz'],
        edad: 63,
};
console.log(Persona.nombre);
console.log(FullStackDeveloper.arrayLenguajes[0]);
const Portatil = {
        marca: 'Asus',
};
console.log(Portatil.marca);
console.log(Portatil["marca"]);
const Concierto = {
        grupos: ['Iron Maiden','AC DC','Metallica'],
};
console.log(Concierto.grupos);
const Led = {
        lampara1: 'Rojo',
        lampara2: 'Verde',
        lampara3: 'Azul',
        arrayRGB: ['Rojo', 'Verde', 'Azul'],
};
console.log(Led.arrayRGB);
const O_Error = {
        código: 05298,
};
console.log("Error",O_Error.código);
const Grupo = {
        integrantes: ['bruno','jose','javier'],
};
console.log("Integrante",Grupo.integrantes[0]);
const Impresora = {
        tinta: ['rojo','verde','azul'],
};
const nivelesTinta = Impresora.tinta;
console.log(nivelesTinta);
const Movil = {
        especificaciones: ['procesador MK542','resolucion 4k','128GB'],
};
console.log(Movil["especificaciones"]);
Portatil.marca = 'MSI';
console.log(Portatil.marca);
Concierto.grupos.push("Guns N´Roses");
console.log(Concierto.grupos);
Concierto.fecha = "20-03-2024";
Concierto.fecha = new Date("2024-03-25");
console.log(Concierto.fecha);
Grupo.integrantes.pop();
console.log(Grupo.integrantes.length);