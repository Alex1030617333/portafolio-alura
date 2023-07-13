

(function () {
    const letra = document.getElementById("letra")
    const bienvenidad = document.getElementById("bienvenidad")
    setTimeout(() => {
        bienvenidad.textContent="¡ Bienvenido/a Black y Black ! "
        setTimeout(() => {
            letra.textContent="H"
        },3000);
    }, 2000);

    const leer = document.getElementById("leer")
    const mas = document.getElementById("mas")
    
    leer.addEventListener("click",function () {
        
        
            mas.classList.toggle("mas")
            
        
    }) 
     
})()




