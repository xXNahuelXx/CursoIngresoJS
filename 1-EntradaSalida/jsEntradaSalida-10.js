/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var num1;
	var num2;
	
	
	num1=document.getElementById("importe").value;
	num2=document.getElementById("importe").value;
	
	num1=parseInt(num1);
	num2=parseInt(num1-((num2*25)/100));
	


    document.getElementById("resultado").value=num2;

}
