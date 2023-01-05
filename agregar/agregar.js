//funcion para guardar las palabras nuevas
const $btnGuardar  = document.getElementById("btnGuardar");
$btnGuardar.addEventListener("click", () => {
 
    //tomo el texto del input
    let input = document.getElementById('txtTextoIngresado').value;
    //transformo las todas letras en mayusculas
    let max = input.toUpperCase();

    //crear un array
    let palabras = ["ORACLE", "ALURA", "CHALLENGE", "DESAFIO", "PROGRAMACION"];
    //pushear la palabra nueva

    palabras.push(max);



    //alert o mensaje que la palabra ya fue agregada
    alert(palabras);

    //limpiar el input
    document.getElementById('txtTextoIngresado').value = "";

    //volver al inicio
    window.location.href = "../index.html";

});


const $btnCancelar  = document.getElementById("btnCancelar");
$btnCancelar.addEventListener("click", () => {

    //limpiar el input
    document.getElementById('txtTextoIngresado').value = "";


});