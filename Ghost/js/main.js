let judge = false;
document.getElementById("trap").addEventListener("click",() => {
    switch(judge){
        case false:
            let ghost = new Audio("../audio/ghost.mp3");
            setTimeout(() => {
                ghost.play();
            }, 1000);
            judge = true;
            break;
        default:
            location.href="https://douyin.com";
            break;
    }
});