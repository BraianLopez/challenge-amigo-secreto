// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let btnAgregar = document.getElementById("btnAgregar");

function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo");
    let amigo = nombreAmigo.value;
    
    if(!amigo){
        alert("ingrese el nombre de un amigo");
        return;
    }
    amigos.push(amigo);
    console.log(amigos);
    nombreAmigo.value="";
    nombreAmigo.focus();
    mostrarLista();
}

 function limpiarLista(){
        listaAmigos.innerHTML = "";
     }
    
    function mostrarLista(){  
        let listaAmigos = document.getElementById("listaAmigos");
        limpiarLista();
        for (i = 0; i <amigos.length;i++) {
            const item = document.createElement("li");
            item.innerHTML=(amigos[i]);
            listaAmigos.appendChild(item);
          }
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert("no hay amigos para sortear");
    }
    let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ` El amigo sorteado es ${amigoSorteado}`;
    limpiarLista();
}
