let userdata = {}

const form = document.querySelector('#form_retiro')
const saldo = document.querySelector('#saldo')
const salir = document.querySelector('#salir')
const movimientos = document.querySelector('#movimientos')

document.addEventListener('DOMContentLoaded', function(){
    const correctUserString = localStorage.getItem('correctUser')
    const correctUser = JSON.parse(correctUserString)
    userdata = correctUser
    saldo.innerHTML = `Saldo: ${userdata.saldo} ${userdata.currency}`
})

form.addEventListener('submit', function(e){
    e.preventDefault()
    const dataform = new FormData(form)
    const { retiro } = Object.fromEntries(dataform)
    if(Number(userdata.saldo)>= Number(retiro)){
        movimientos.innerHTML = `Se realizo correctamnete su retiro por: $ ${retiro}`
        userdata.saldo = Number(userdata.saldo) - Number(retiro)
        localStorage.setItem("correctUser", JSON.stringify(userdata))
        saldo.innerHTML = `Saldo: ${userdata.saldo} ${userdata.currency}`
    }else {
        movimientos.innerHTML = `No cuentas con suficiente saldo para realizar tu retiro`
    }
})

salir.addEventListener('click', function(){
    window.location.href = "./atm.html"
})


