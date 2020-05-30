
var n=1;

document.addEventListener("DOMContentLoaded",function(event){
	
	
carrusel();
	
 a=document.getElementsByClassName("cont22");

 for(var i=0;i<a.length;i++){
	 
	 a[i].addEventListener("mouseover",cara);
	 a[i].addEventListener("mouseout",sello);
 }	 
	
 b=document.getElementsByClassName("enlace");
	
 for(var i=0;i<b.length;i++){
	 
	 b[i].addEventListener("click",cli);
 }	
	
 c=document.getElementsByClassName("eco");
	for(var i=0;i<c.length;i++){
		
		c[i].addEventListener("mouseover",aumentar);
		c[i].addEventListener("mouseout",normal);
	}
	
}
						 
						 );




function limpiar(){
document.getElementById("txtUsr").value="";
	document.getElementById("txtDni").value="";
	
	document.getElementById("olf").value="";
	
	
	
}// JavaScript Document

function enviar(){
	
	var w=document.getElementById("txtUsr").value;
	
	alert("sus datos fueron eviados:  "+w);
	limpiar();
}

function carrusel(){
	document.getElementById("banner").src="./imagenes/paquete"+n+".jpg";
	n++;
	if(n>4)
		n=1;
	 setTimeout("carrusel()",2000); 
	
}
function cara(){
	document.getElementById("im").src="./imagenes/logo2.jpg";
}
function sello(){
	document.getElementById("im").src="./imagenes/logo1.jpg";
}

function cli(){
	
	document.getElementById("nombre").innerHTML=this.innerText;
	
	
	switch(this.innerText){
		   
		case "PRODUCTOS1" :
			
			document.getElementById("prod").src="./imagenes/produ1.jpg";
			
			document.getElementById("codigo").innerText="Codigo :12345";
			
			document.getElementById("precio").innerText="Precio :$100";
			
			document.getElementById("stock").innerText="Stock :14";
		   break;
		   
		   
	case  "PRODUCTOS2":
	      	document.getElementById("prod").src="./imagenes/produ2.jpg";
			
			document.getElementById("codigo").innerText="Codigo :45789";
			
			document.getElementById("precio").innerText="Precio :$300";
			
			document.getElementById("stock").innerText="Stock : 8";
		   break;
	}
}

function aumentar(){
	
	this.style.fontSize="50px";
	this.style.fontStyle="verdana";
	
	
}
function normal(){
	this.style.fontSize="30px";
	this.style.fontStyle="italic";

	
}



