//Eventos de los inputs

//Leer lo que ingresa el usuario

const userName = document.querySelector(".user-name");
const userPhone = document.querySelector(".user-phone");
const userMail = document.querySelector(".user-mail");
const userMessage = document.querySelector(".user-message");


// userName.addEventListener(
//     "input", function(e){
//         //Leer lo que el usuario ingresa
//         console.log(e.target.value);        
//     });

// //Telefono
// userPhone.addEventListener(
//     "input", function(e){
//         //Leer lo que el usuario ingresa
//         console.log(e.target.value);        
//     });

// //E-mail
// userMail.addEventListener(
//     "input", function(e){
//         //Leer lo que el usuario ingresa
//         console.log(e.target.value);        
//     });

// //Mensaje
// userMessage.addEventListener(
//     "input", function(e){
//         //Leer lo que el usuario ingresa
//         console.log(e.target.value);        
//     });

    //Refactoring



    userName.addEventListener("input", readingText)
    userPhone.addEventListener("input", readingText)
    userMail.addEventListener("input", readingText)
    userMessage.addEventListener("input", readingText)



    function readingText(e) {
        console.log(e.target.value);
        
    }