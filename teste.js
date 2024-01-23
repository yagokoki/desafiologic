let nomeHeroi = "Kratos";
let xp = 7500;
let nivel;


    if(xp < 1001){
        nivel = "ferro";
    }
    else if(xp < 2001){
        nivel = "bronze";
    }
    else if(xp < 5001){
        nivel = "prata";
    }
    else if(xp < 7001){
        nivel = "ouro";
    }
    else if(xp < 8001){
        nivel = "platina";
    }
    else if(xp < 9001){
        nivel = "ascendente";
    }
    else if(xp < 10001){
        nivel = "imortal";
    }
    else if(xp >= 10001){
        nivel = "radiante";
    }

console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel);