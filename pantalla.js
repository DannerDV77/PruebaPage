let userdata = {}
const form = document.querySelector("#form_deposito")
const botonSalir = document.querySelector("#salir")
const movimientos = document.querySelector('#movimientos')

document.addEventListener("DOMContentLoaded", function () {    
    const correctUserString = localStorage.getItem("correctUser");    
    const correctUser = JSON.parse(correctUserString);
    userdata = correctUser;        
});

form.addEventListener("submit", function(e){
    e.preventDefault()
    const dataform = new FormData(form)
    const { deposito } = Object.fromEntries(dataform)
    userdata.saldo = Number(userdata.saldo) + Number(deposito)    
    localStorage.setItem("correctUser", JSON.stringify(userdata))
    movimientos.innerHTML = `Se realizo correctamnete su deposito por: $ ${deposito}`
})

botonSalir.addEventListener("click", function(){
    window.location.href = "./atm.html"
})


//No seria mejor con un FormData?