//Enviar formulario con form data API
//FORMULARIO SIEMPRE CON SUBMIT

const userForm = document.querySelector(".formulario");

userForm.addEventListener("submit", function(e){
    e.preventDefault();

    const data = new FormData(userForm);
    const userData = Object.fromEntries(data.entries());

    console.log("Todos los datos del usuario son: ", userData);
    console.log("El nombre del usuario es: ", userData.nombre);
    console.log("El correo del usuario es: ", userData.email);

    const tel = userData["numero"];
    console.log("Esta es una variable", tel);    
    });
