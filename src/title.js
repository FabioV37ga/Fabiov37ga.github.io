function blink(){
    const slider = document.querySelector(".slider")
    var intervalId = setInterval(function() {
        if (slider.classList.contains("show")){
            slider.classList.remove("show")
            slider.classList.add("hidden")
        }else{
            slider.classList.remove("hidden")
            slider.classList.add("show")

        }

      }, 630);
}

(function(){
    const titulo = document.querySelector(".titulo")
    const string = "> V37GA'S REPOSITORY"
    const usingSplit = string.split('');
    var i = 0
    finalString = ""

    var intervalo = setInterval(function(){
        finalString = finalString + usingSplit[i]
        titulo.textContent = finalString
        i++;
        if (i == usingSplit.length){
            clearInterval(intervalo)
            blink()
        }
    }, 50)
})()
