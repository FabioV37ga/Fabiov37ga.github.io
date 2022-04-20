function blink(){
    const slider = document.querySelector(".slider")
    var intervalId = setInterval(function() {
        
        if (slider.style.opacity == 100){
            slider.style.opacity = 0
        }else{
            slider.style.opacity = 100

        }
      }, 630);
}

typeText("v37ga's repository")
function typeText(text){
    textUpper = text.toUpperCase();
    const titulo = document.querySelector(".titulo")
    const string = "> "+textUpper;
    const usingSplit = string.split('');

    var i = 0
    finalString = ""
    var intervalo = setInterval(function(){
        finalString = finalString + usingSplit[i]
        titulo.textContent = finalString
        i++;
        if (i == usingSplit.length){
            clearInterval(intervalo)      
        }
    }, 50)
}

blink();

function eraseText(text){
    const titulo = document.querySelector(".titulo")
    var currentText = titulo.textContent
    const usingSplit = currentText.split('');

    var tamanho = usingSplit.length
    var intervalo = setInterval(function(){ 
        var anterior = ""
        var texto = ""
        tamanho--
        for (let i = 0; i <= tamanho;i++){  
            
            titulo.textContent = usingSplit[i]
            texto = anterior+usingSplit[i]
            anterior = texto
    }
    titulo.textContent = anterior
        if (tamanho == 0){
            clearInterval(intervalo)
            typeText(text)
        }

    }, 25)
}
