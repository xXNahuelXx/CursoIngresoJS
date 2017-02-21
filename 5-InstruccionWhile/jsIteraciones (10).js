function Mostrar()
{
	var contador=0;
	var numero;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var contadorPar=0;
	var respuesta="si";

while(respuesta!="no")
{
	contador ++;
	numero=prompt("Ingrese numero");
	numero=parseInt(numero);
	respuesta=prompt("¿Desea continuar?");

	if(numero<0)
	{
		sumaNegativo=sumaNegativos+numero;
		contadorNegativos++;
	}
	else
	{
		if(numero>0)
		{
			sumaPositivos = sumaPositivos+numero;
			contadorPositivos ++;
		}
		else
		{
			contadorCeros ++;
		}	
	}

	if(numero%2==0)
	{
		contadorPar ++;
	}

 var promedioNegativo=sumaNegativos/contadorNegativos;
 var promedioPositivo=sumaPositivos/contadorPositivos;
 var diferencia=sumaPositivos-sumaNegativos;

 document.write("La suma de los negativos es: " + sumaNegativos);


} 






}//FIN DE LA FUNCIÓN