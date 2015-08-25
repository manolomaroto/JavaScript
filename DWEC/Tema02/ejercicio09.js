
function calcularPrimos(){
	var contador;
	for(var i=1; i <=100; i++){
		contador = 0;
		for(var j = 1; j<=100; j++){
			if((i%j)==0){
				contador++;
			}
		}
		if(contador==2){
			alert(i + " es primo");
			
		}

	}
}