function Saludar()
{
    var nombre = prompt("Ingrese su nombre: ");
    var ejercicio1 = document.getElementById("ejercicio1");
    ejercicio1.innerHTML = "Saludos "+ nombre;
    
}

function Operaciones()
{
    var num1 = parseInt(prompt("Ingrese el primer número: "));
    var num2 = parseInt(prompt("Ingrese el segundo número: "));
    var ejercicio2 = document.getElementById("ejercicio2");
 
    ejercicio2.innerHTML = "Suma: "+ sumar(num1, num2) + " Resta: "+ restar(num1, num2) + " División: "+ dividir(num1, num2) + " Multiplicación: "+ multiplicar(num1, num2);

}

function sumar (num1, num2){
    suma = num1 + num2;
    return suma;
}
function restar (num1, num2){
    resta = num1 - num2;
    return resta;
}
function dividir (num1, num2){
    division = num1 / num2;
    return division;
}
function multiplicar (num1, num2){
    multiplicacion = num1 * num2;
    return multiplicacion;
}

function Paridad()
{
    var num1 = parseInt(prompt("Ingrese un número: "));
    var ejercicio3 = document.getElementById("ejercicio3");
    if(num1 % 2 == 0)
    {
        ejercicio3.innerHTML = "Es par";
    }
    else{
        ejercicio3.innerHTML = "Es impar";
    }
    
}

function Contador(){
    var palabra = prompt("Ingrese una palabra: ");
    var ejercicio4 = document.getElementById("ejercicio4");
    ejercicio4.innerHTML = "Su palabra tiene "+ palabra.length + " caracteres";
}

function Repetidor()
{
    var frase = prompt("Ingrese una frase: ");
    var num1 = parseInt(prompt("Ingrese un número: "));
    var ejercicio5 = document.getElementById("ejercicio5");
    var fraseRepetida = "";
    for(let i = 0; i<num1; i++)
    {
        fraseRepetida+=frase + " ";
    }
    ejercicio5.innerHTML = fraseRepetida;
}

function Tabla() {
    var num1 = parseInt(prompt("Ingrese un número: "));
    var ejercicio6 = document.getElementById("ejercicio6");
    var cuenta = 0;
    var numeros = "";
    for(let i = 1; i<11; i++)
    {
        cuenta = num1*i;
        numeros+= cuenta + " ";
    }
    ejercicio6.innerHTML = numeros;
}

function Adivinar(random)
{
    var num1 = parseInt(prompt("Ingrese un número: "));
    var ejercicio7 = document.getElementById("ejercicio7");

    if(random < num1)
    {
        ejercicio7.innerHTML = "El número es menor";
    }
    else if (random>num1)
    {
        ejercicio7.innerHTML = "El número es mayor";
    }
    else
    {
        ejercicio7.innerHTML = "ADIVINASTE";
    }
}

function ContadorVocales()
{
    var palabra = prompt("Ingrese una palabra: ");
    var ejercicio8 = document.getElementById("ejercicio8");
    var contador = 0;
    for(let i = 0; i<palabra.length; i++)
    {
        if (palabra[i]== "a" || palabra[i]== "e" || palabra[i]== "i" || palabra[i]== "o" || palabra[i]== "u")
        {
            contador++;
        }
    }
    ejercicio8.innerHTML = "La cantidad de vocales que contiene: " + contador;

}

function Revertir ()
{
    var palabra = prompt("Ingrese una palabra: ");
    var ejercicio9 = document.getElementById("ejercicio9");
    var acumulador = "";
    for(let i = palabra.length-1; i>=0; i--)
    {
        acumulador += palabra[i];
    }
    ejercicio9.innerHTML = acumulador;

}

function Palindromador ()
{
    var palabra = prompt("Ingrese una palabra: ");
    var ejercicio10 = document.getElementById("ejercicio10");
    var acumulador = "";
    for(let i = palabra.length-1; i>=0; i--)
    {
        acumulador += palabra[i];
    }
    
    if(palabra != acumulador)
    {
        ejercicio10.innerHTML = "No es palíndromo";
    }
    else 
    {
        ejercicio10.innerHTML = "Sí es palíndromo";
    }

}