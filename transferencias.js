let userdata = {}
let userdatain = {}

const form = document.querySelector("#form_transfer")
const salir = document.querySelector("#salir")
const movimientos = document.querySelector("#movimientos")
const saldo = document.querySelector('#saldo')

document.addEventListener("DOMContentLoaded", function(){
    const correctUserString = localStorage.getItem("correctUser")
    const correctUser = JSON.parse(correctUserString)
    userdata = correctUser

    const userdosString = localStorage.getItem("usuarioinactivo")
    const userdos = JSON.parse(userdosString)
    userdatain = userdos

    saldo.innerHTML = `Saldo: ${userdata.saldo} ${userdata.currency}`
})

form.addEventListener("submit", function(e){
    e.preventDefault()
    const dataform = new FormData(form)
    const { cantidad, cuenta } = Object.fromEntries(dataform)

    if(Number(userdata.saldo)>= Number(cantidad)){
        if(Number(userdatain.cuenta) === Number(cuenta)){
            userdatain.saldo = Number(userdatain.saldo) + Number(cantidad);
            userdata.saldo = Number(userdata.saldo) - Number(cantidad)
            saldo.innerHTML = `Saldo: ${userdata.saldo} ${userdata.currency}`
            movimientos.innerHTML = `Se realizo de manera satisfactoria la transferencia a ${userdatain.nombre} por: $` + cantidad

            localStorage.setItem("correctUser", JSON.stringify(userdata))
            localStorage.setItem("usuarioinactivo", JSON.stringify(userdatain))
        }
    }else{
        movimientos.innerHTML = `No se pudo realizar la transferencia a falta de fondos`  
    }
})

salir.addEventListener('click', function(){
    window.location.href = "./atm.html"
})