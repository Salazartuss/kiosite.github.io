async function loadV2() {
    const brut =  await fetch('../ressources/data/peoples.json');
    return await brut.json();
}


async function startGame(){
    const data = await loadV2()
    const keys = await Object.keys(data);
    const defKey = await [Math.floor(Math.random() * keys.length)];
    return defKey;

}

const gameSoluce = startGame();




function verif(receivedValue, soluceValue){
    return receivedValue.toLowerCase() === soluceValue.toLowerCase();
};




function mainGameLoop(){

    var win = false;
    const tryButton = document.getElementById('tryButton');
    const guessText = document.getElementById('guess');
    const answerText = document.getElementById('soluce');
    loadV2().then(data => {
        gameSoluce.then(
            soluces =>{
                const soluceValue = Object.keys(data)[soluces];
                tryButton.addEventListener("click", function() {
                    document.getElementById('gameStart').innerHTML = "";

                    var textValidity = "";
                    var guessC = guessText.value.toLowerCase();
                    guessText.value = "";
                    if(Object.keys(data).includes(guessC)){


                        if(verif(guessC, soluceValue)){
                            textValidity = "good";
                        }
                        else{
                            textValidity = "bad";
                        }


                        var name = "bad";
                        var age = "bad";
                        var gender = "bad";

                        if(data[guessC][0] === data[soluceValue][0]){name = "good";}

                        if(data[guessC][1] === data[soluceValue][1]){age = "good";}

                        if(data[guessC][2]=== data[soluceValue][2]){gender = "good";}

                        const neoText = '<p> <span class="' + name +'">' + data[guessC][0] + '</span> <span class="' + age +'">' + data[guessC][1] + '</span> <span class="' + gender +'">' + data[guessC][2] + '</span></p>';

                        answerText.innerHTML =  neoText + "<br>" + answerText.innerHTML;




                        if(verif(guessC, soluceValue)){document.getElementById("gameCore").innerHTML = "<p>Vous avez gagné, la réponse était " + soluceValue+ "</p>";}

                    }
                })
            }
        )
    });
}
