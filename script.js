function getComputerChoice(){
    let c = Math.floor(Math.random()*10 +1);
    c = c/3;
    if(c===0){
        return "Rock";
    }
    else if(c===1){
        return "Scissors";
    }
    else{
        return "Paper";
    }
}