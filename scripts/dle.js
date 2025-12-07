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


function result(){
    loadV2().then(data => {
        const place = document.getElementById('soluce');
        var name = -2;
        gameSoluce.then(
            soluce =>{
                name = soluce;
                const dasKeys = Object.keys(data);
                const keyGet = 'Salazartuss';
                const keyData = data[dasKeys[name]];
                if(!keyData){return;}

                let htmlContent = '<p>' + keyData[0]  + " " + name + " " + keyData[1]+ " " + keyData[2] +'</p>';
                place.innerHTML = htmlContent;
            }
        )
    })
}