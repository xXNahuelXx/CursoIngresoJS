/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambrar con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var Lt;
	var At;
	var hiloT;

	Lt=document.getElementById("Largo").value;
	At=document.getElementById("Ancho").value;

	Lt=parseInt(Lt);
	At=parseInt(At);
	hiloT=((Lt*2)+(At*2))*3;

	alert(hiloT);



}
function Circulo () 
{
	
}
function Materiales () 
{
	
}