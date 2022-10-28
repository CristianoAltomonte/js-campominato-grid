const griglia = document.getElementById('griglia');
console.log(griglia);


// CREAZIONE DI UN DIV DI FORMA QUADRATA DENTRO LA GRIGLIA

function play(){

    function creazioneQuadrato() {

        const div = document.createElement('div');
        div.classList.add('quadrato');
        
        return div;
    }
    console.log(creazioneQuadrato());
    
    // inseriamo il quadrato creato dalla funzione nella griglia
    // griglia.append(creazioneQuadrato());
    
    // creazione dei 64 quadratini 
    
    for (let i = 1; i <= 100; i++) {
    
        let elementoCorrente = creazioneQuadrato(i);
        console.log(elementoCorrente);
        elementoCorrente.innerText += (i)
        elementoCorrente.addEventListener('click', function () { 
            console.log(this);
            this.classList.toggle ('active');
       
        })
        
        griglia.append(elementoCorrente);
    
    
    }

}


