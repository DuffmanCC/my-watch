// Estos son los 5 valores que puede tener la propiedad readyState del objeto XMLHttpRequest

var READY_STATE_UNINITIALIZED = 0; // No inicializado (objeto creado, pero no se ha invocado el método open)
var READY_STATE_LOADING = 1; // Cargando (objeto creado, pero no se ha invocado el método send)
var READY_STATE_LOADED = 2; // Cargado (se ha invocado el método send, pero el servidor aún no ha respondido)
var READY_STATE_INTERACTIVE = 3; // Interactivo (se han recibido algunos datos, aunque no se puede emplear la propiedad responseText)
var READY_STATE_COMPLETE = 4; // Completo (se han recibido todos los datos de la respuesta del servidor)

// El código de estado HTTP devuelto por el servidor
var STATUS_CORRECT = 200; // Respuesta correcta
var STATUS_404 = 404; // No encontrado

var peticion_http; // creamos variable y la dejamos vacía, aquí meteremos la instancia del objeto XMLHttpRequest

function refresh(){

	/*
	1 - Instanciar el objeto XMLHttpRequest
	*/	

	if(window.XMLHttpRequest) {  // Navegadores que siguen los estándares
	  peticion_http = new XMLHttpRequest();
	}
	else if(window.ActiveXObject) {  // Navegadores obsoletos
	  peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
	}


	/* 
	2 - Preparar la función de respuesta 

	Preparamos la función que se encarga de procesar la respuesta del servidor. La propiedad onreadystatechange del objeto XMLHttpRequest permite indicar esta función directamente.
	*/
	
	peticion_http.onreadystatechange = myWatch; 

	
	/*
	El código anterior indica que cuando la aplicación reciba la respuesta del servidor, se debe ejecutar la función myWatch(). La función se indica mediante su nombre sin paréntesis, ya que de otro modo se estaría ejecutando la función.
	*/

	/*
	3 - Realizar la petición al servidor

	La petición HTTP se crea mediante el método open(), en el que se incluye el tipo de petición (GET), la URL solicitada (watch.php) y un tercer parámetro que vale true que indica
	*/

	peticion_http.open('GET', 'watch.php', true);
	peticion_http.send();



	/* 
	4 - Ejecutar la función de respuesta
	
	La función myWatch() comprueba en primer lugar que se ha recibido la respuesta del servidor (mediante el valor de la propiedad readyState). Si se ha recibido alguna respuesta, se comprueba que sea válida y correcta (comprobando si el código de estado HTTP devuelto es igual a 200).
	*/
	function myWatch(){
		if(peticion_http.readyState == READY_STATE_COMPLETE){
			if(peticion_http.status == STATUS_CORRECT){
				document.getElementById('watch').innerHTML=peticion_http.responseText; // la propiedad responseText del objeto XMLHttpRequest devuelve la respuesta del servidor como una string. Por lo tanto lo que haremos con este código será volcar la respuesta del servidor en formato text en el div #watch. La respuesta es el contenido del archivo watch.php entero.
				setTimeout('refresh()', 1000); // el método setTimeout llamará a la función refresh() cada 1000 milisegundos.
			}		
		}
	}
}



