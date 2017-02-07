/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var num1;
	var num2;
	
	
	num1=document.getElementById("sueldo").value;
	num2=document.getElementById("sueldo").value;
	
	num1=parseInt(num1);
	num2=parseInt(num1+((num2*10)/100));
	


    document.getElementById("resultado").value=num2;


}

