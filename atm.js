const botondeposito = document.querySelector("#depositos");
const modal = document.querySelector("#modal");
const botonSaldos = document.querySelector("#saldo")
const cerrarModalSaldos = document.querySelector("#modal button")
const fondoDeModal = document.querySelector("#backdrop")
const botonRetiros = document.querySelector("#retiros")
const botonSalir = document.querySelector('#salir')
const botonTransfer = document.querySelector("#transfer")

let userdata = {};

document.addEventListener("DOMContentLoaded", function () {
  const correctUserString = localStorage.getItem("correctUser");
  const correctUser = JSON.parse(correctUserString);

  if (!correctUser) window.location.href = "/index.html";
  userdata = correctUser;
  const saludoTag = document.querySelector("#saludo_usuario");
  saludoTag.outerHTML = `<h1>Bienvenid@ ${correctUser.nombre}</h1>`;
});

botondeposito.addEventListener("click", function () {
    window.location.href = "/pantalla.html";
});

function conmutarClase(elementohtml, clase){
    elementohtml.classList.toggle(clase)
}

const h5delSaldoDelModal = document.createElement("h5")
botonSaldos.addEventListener('click', function(){
    fondoDeModal.style = "display: block"
    conmutarClase(modal, "close_modal")
    h5delSaldoDelModal.innerHTML = `
    <div>
        <h5 style="font-size: 2rem">Saldo: ${userdata.saldo} ${userdata.currency}</h5>
    </div>
    `
    modal.appendChild(h5delSaldoDelModal)
})

cerrarModalSaldos.addEventListener('click', function(){
    conmutarClase(modal, 'close_modal')
    fondoDeModal.style = "display: none"
})

fondoDeModal.addEventListener('click', function(){
    fondoDeModal.style = "display: block"
    conmutarClase(modal, 'close_modal')
    fondoDeModal.style = "display: none"
})

botonRetiros.addEventListener('click', function(){
    window.location.href = "/retiros.html";
})

botonSalir.addEventListener('click', function(){
    window.location.href = "./index.html";
})

botonTransfer.addEventListener("click", function(){
    window.location.href = "./transferencias.html";
})
