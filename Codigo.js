palabras = ["perro","gato","pez"];
selector = parseInt(Math.random()*3);

palabraSeleccionada = palabras[selector];
document.write("La palabra es "+palabraSeleccionada);

function Pulsar(variable){
    document.getElementById(variable);
    document.write("La palabra es "+variable);
}


