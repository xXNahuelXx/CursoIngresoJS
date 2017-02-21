function Mostrar()
{	
	var contador=0;
	var maximo;
	var minimo;
	var numero;
	var respuesta='si';

while(respuesta!="no")
{
	numero=prompt("Ingrese un numero");
	numero=parseInt(numero);
	respuesta=prompt("¿Desea continuar?");
	
	if(contador==0)
	{
		maximo=numero;
		minimo=numero;
	}
	else
	{
		if(numero>maximo)
		{
			maximo=numero;
		}
		if(numero<minimo)
		{
			minimo=numero;
		}	
	}
contador++;
	
}


document.getElementById("maximo").value=maximo;
document.getElementById("minimo").value=minimo;


}//FIN DE LA FUNCIÓN