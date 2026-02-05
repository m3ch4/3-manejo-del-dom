//Enviar formulario con form data API
//FORMULARIO SIEMPRE CON SUBMIT

const userForm = document.querySelector(".formulario");

userForm.addEventListener("submit", function(e){
    e.preventDefault();

    const data = new FormData(userForm);
    const userData = Object.fromEntries(data.entries());

    console.log("Todos los datos del usuario son: ", userData);
    
    });
