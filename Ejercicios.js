

/* ---------------------------------------------------------------------ASIGNACION */
document.write("<br>" + "<hr>" + "<h1>" + "Asignacion");


let valor = 100;
document.write("<p>" + "El valor de la variable es " + valor);
valor*=10;
document.write("<p>" + "La variable se multiplico por 10 y el nuevo valor es " + valor);
let modulo = valor%=3;
document.write("<p>" + "El modulo de la variable divida en 3 es " + modulo);


/* ---------------------------------------------------------------------FUNCIONES */
document.write("<br>" + "<hr>" + "<h1>" + "Funciones");


/* Funcion 1 */
function sumar(){
    let valor1 = parseInt(prompt("Digite el primer valor a sumar:"));
    let valor2 = parseInt(prompt("Digite el segundo valor a sumar:"));
    let resultado = valor1 + valor2
    document.write("<p>" + "El resultado de la suma es " + resultado);
};
sumar();


/* Funcion 2 */
let kilometros = parseInt(prompt("Cuantos kilometros desea convertir a millas ?"));
function toMiles(kilometros) {
    return kilometros * 0.621371;
};
document.write("<p>" + "La cantidad de millas en " + kilometros + " kilometros es " + (toMiles(kilometros)));


/* Funcion 3 */
const saludarUsuario = (user) => {
    alert(`Hola ${user} !!!`);
};
saludarUsuario(prompt("Digite su nombre: "));


/* ---------------------------------------------------------------------OBJETOS */
document.write("<br>" + "<hr>" + "<h1>" + "Objetos");


/* Objeto 1 */
let mascota = prompt("Digite el nombre de su mascota: ");
let raza = prompt("Digite la raza de su mascota: ");

let miMascota = {
    nombre: mascota,
    raza: raza
}
document.write("<p>" + "Usted tiene una mascota llamada " + miMascota.nombre + " y es de raza " + miMascota.raza);


let persona = {
    miNombre: prompt("Digite su nombre:"),
    añoNacimiento: parseInt(prompt("Digite su año de nacimiento:")),
    edad: function(){
        return (2021 - this.añoNacimiento);
    }
};
document.write("<p>" + "Su nombre es " + persona.miNombre + " y tiene " + persona.edad() + " años.");


/* ---------------------------------------------------------------------ARRAYS */
document.write("<br>" + "<hr>" + "<h1>" + "Arrays");


let marcasVehiculos = [];
marcasVehiculos[0] = "Nissan";
marcasVehiculos[1] = "Toyota";
marcasVehiculos[2] = "Subaru";
marcasVehiculos[3] = "Fiat";

document.write("<p>" + "La longitud del array marcasVehiculos es " + marcasVehiculos.length + " y tiene los siguientes valores: ");
document.write("<p>" + marcasVehiculos[0]);
document.write("<p>" + marcasVehiculos[1]);
document.write("<p>" + marcasVehiculos[2]);
document.write("<p>" + marcasVehiculos[3]);

document.write("<p>" + "Este es el resultado de recorrer el mismo array con un ciclo FOR ");
for (marca of marcasVehiculos) {
    document.write("<p>" + marca);
};


/* ---------------------------------------------------------------------ARRAY METHODS */
document.write("<br>" + "<hr>" + "<h1>" + "Array METHODS");


let padre = prompt("Ingrese el nombre de su padre:");
let madre = prompt("Ingrese el nombre de su madre:"); 
let padres = [padre, madre];

let cantidadHermanos = parseInt(prompt("Digite la cantidad de hermanos que usted tiene: "));
let hermanos = [];



let i;
for(i = 0; i < cantidadHermanos; i++) {
    hermanos[i] = prompt("Digite el nombre de su hermano:")
}

document.write("<p>" + "Este es el resultado de la union del array padres y hermanos ");
let familia = padres.concat(hermanos);
for(familiar of familia) {
    document.write("<p>" + familiar);
}

/* ---------------------------------------------------------------------SWITCH */
document.write("<br>" + "<hr>" + "<h1>" + "SWITCH");


let figure = prompt("Introduce la figura geometrica de la que quieres calcular el area: Triangulo, Rectangulo o Circulo");
let base;
let height;
let radius;

switch(figure){
    case 'Triangulo':
        base = prompt("Introduce la base del Triangulo:");
        height = prompt("Introduce la altura del Triangulo:");
        document.write("<p>" + "El area del triangulo es " + ((base * height)/2));
        break;
    case 'Rectangulo':
        base = prompt("Introduce la base del Rectangulo:");
        height = prompt("Introduce la altura del Rectangulo:");
        document.write("<p>" + "El area del triangulo es " + (base * height));
        break;
    case 'Circulo':
        radius = prompt("Introduce el radio del Circulo:");
        document.write("<p>" + "El area del triangulo es " + (Math.PI * Math.pow(radius, 2)));
        break;
    default:
        console.log("La figura geometrica no es valida");
}

/* ---------------------------------------------------------------------CICLO FOR */
document.write("<br>" + "<hr>" + "<h1>" + "CICLO FOR");


/* Ejercicio 1 */
let num = parseInt(prompt("Introduce un numero:"));
let divisores = 0;


if(num === 1){
    document.write("<p>" + "El numero " + num + " no es valido.");
}
else{
    for(let i=2; i<num; i++){
        if(num%i==0){
            document.write("<p>" + "El numero " + num + " divido entre " + i + " es igual a " + (num/i) + " luego el numero no es primo.");
            divisores++;
            break;
        }
    }
}

if(divisores==0){
    document.write("<p>" + "El numero " + num + " es primo.")
}

/* Ejercicio 2 */
const palabra = prompt("Calculemos vocales y consonantes. Introduce una palabra").toLowerCase();
let consonantes = 0;
let vocales = 0;

for (let letra of palabra) {
    if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" ){
        vocales++;
    }
    else{
        consonantes++;
    }
}

document.write("<p>" + "La palabra " + palabra + " tiene " + vocales + " vocales.");
document.write("<p>" + "La palabra " + palabra + " tiene " + consonantes + " consonantes.");
document.write("<p>" + "La palabra " + palabra + " tiene " + palabra.length + " letras.");


/* ---------------------------------------------------------------------CICLO WHILE */
document.write("<br>" + "<hr>" + "<h1>" + "CICLO WHILE");


let suma = 0;
let contador = 0;

while(suma<50) {
    numero = parseInt(prompt("Suma de x cantidad de numeros antes de 50. Introduzca un numero:"));
    if((numero+suma)<=50){
        suma = suma + numero;
        contador++;
    }
    else{
        break;
    }
}

document.write("<p>" + "La cantidad de la suma es " + suma);
document.write("<p>" + "La cantidad de numeros introducidos es " + contador);
