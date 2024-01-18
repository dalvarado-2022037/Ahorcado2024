palabras = ["perro","gato","pez"];
selector = parseInt(Math.random()*palabras.length);

palabraSeleccionada = palabras[selector];
document.write("La palabra es "+palabraSeleccionada);
letrasPalabra = [];
for(i=0;i<palabraSeleccionada.length;i++){
    letrasPalabra += palabraSeleccionada.charAt(i);
}

function Pulsar(variable, id){
    boton = document.getElementById(id);
    for (i=0;i<palabraSeleccionada.length;i++){
        if(variable==letrasPalabra[i]) boton.style="background-color: red;";
        boton.disabled="false";
        letrasPalabra[i];
    }
}
