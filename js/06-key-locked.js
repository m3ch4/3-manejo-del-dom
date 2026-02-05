//Bloqueo de teclas

const keyLocked = ["a", "A", "b", "B"];

document.querySelectorAll(".campo__field").forEach(field => {

    field.addEventListener("keydown", function(e) {

        if(keyLocked.includes(e.key)) {

            e.preventDefault();
            console.log(`Tecla ${e.key} bloqueada`);
        }
    })
});


