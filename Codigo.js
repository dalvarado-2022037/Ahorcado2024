palabras = ["perro","gato","pez"];
selector = parseInt(Math.random()*palabras.length);

palabraSeleccionada = palabras[selector];
document.write("La palabra es "+palabraSeleccionada);
letrasPalabra = [];
for(i=0;i<palabraSeleccionada.length;i++){
    letrasPalabra += palabraSeleccionada.charAt(i);
}
function Pulsar(variable){
    for (i=0;i<palabraSeleccionada.length;i++){
        document.write("\nNumero: "+i+" Letra: "+variable+" Busqueda "+letrasPalabra[i]);
        if(variable==letrasPalabra[i]) document.write("Encontro la letra");
        letrasPalabra[i];
    }
}
