function Mostrar()
{
//tomo la edad  
var age;

age=document.getElementById("edad").value;

if(age<18&&age>12)
{
 
}
else
{
	alert("Usted no es adolescente");
}

}//FIN DE LA FUNCIÓN

/*Otra forma de resolver es:
if(!(age<18&&edad>12))
{
	alert("Usted no es adolescente");
}