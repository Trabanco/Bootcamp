const userNameElement = document.getElementById("user-name");
const okNameButton = document.getElementById("name-button");
const saludoElement = document.getElementById("saludo");    
function hey(){
    let inputValue = userNameElement.value;//le estamos dando el valor(value)del botón name-button
    saludoElement.innerHTML = `Hola  ${inputValue}`
  
 }

const userSurnameElement = document.getElementById("user-surname");
const okSurnameButton = document.getElementById("surname-button");
okSurnameButton.addEventListener("click", hey);