/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
   var num1;
   var num2;

   num1=document.getElementById("numeroUno").value;
   num2=document.getElementById("numeroDos").value;

   num1=parseInt(num1);
   num2=parseInt(num2);

   alert(num1+num2);
}

