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
	num2=parseInt(num1+((num2*10)/100));    /*sueldo + sueldo*0.10 (sacamos factor comun) que es=sueldo 
											  sueldo*1+0.10 (en caso de que fuera 90% sera 0.9) */
 
	


   document.getElementById("resultado").value=num2;


}

/* Otra manera de resolver:
   sueldo=parseInt("Sueldo");
   resultado=parseInt("Resultado");

   resultado=(sueldo*1+0.10);

   document.getElementById(Resultado).value=resultado; 