const banco = [
    {
        nombre: "Daniel",
        cuenta: 123456,
        password: "wasd",
        saldo: "100",
        currency: "MXN",
    },
    {
        nombre: "Annely",
        cuenta: 654321,
        password: "123",
        saldo: "200",
        currency: "USD",
    }
];

const cuenta = document.querySelector("#login_cuenta")
const password = document.querySelector("#password")
const buttonLogin = document.querySelector("button")

buttonLogin.addEventListener("click", function(e){
    e.preventDefault()
    const currentCuenta = cuenta.value
    const currentPassword = password.value
    let correctUser = null
    for (let i = 0; i < banco.length; i++) {       
        const usuarioBb = banco[i]
        if (usuarioBb.cuenta === Number(currentCuenta) && usuarioBb.password === currentPassword) {            
            correctUser = usuarioBb
            if(i===0){
                const usuarioinactivo = banco[1]
                localStorage.setItem("usuarioinactivo", JSON.stringify(usuarioinactivo))
                console.log(usuarioinactivo)
            }else{
                const usuarioinactivo = banco[0]
                localStorage.setItem("usuarioinactivo", JSON.stringify(usuarioinactivo))
                console.log(usuarioinactivo)
            }
            break
        }        
    }

    console.log(correctUser, "Si lo encontramos")
    if (!correctUser) {
        alert("El usuario y/o contraseña son incorrectos")        
    } else  {     
        localStorage.setItem("correctUser", JSON.stringify(correctUser))
        window.location.href = "/atm.html"
    }
})

