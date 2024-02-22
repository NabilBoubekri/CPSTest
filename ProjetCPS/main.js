
let cps = 0;
let temps = 10;
const duree = temps;
let timerValue = 0;
let cpsFin = 0;

const timerElement = document.querySelector("#timer");
const cpsFinElement = document.querySelector("#CPSFIN");
const btnCPS = document.querySelector("CPS");
const btnRestart = document.querySelector("RESTART");
let timerInterval;

document.querySelector('#CLICK').disabled = true;

function startTimer() {
    let minutes = parseInt(temps / 60, 10);
    let secondes = parseInt(temps % 60, 10);
    timerElement.innerText = "Temps restant : " + minutes + ":" + secondes;
    clearInterval(timerInterval);
    document.querySelector('#CLICK').disabled = false;
    document.querySelector('#CPS').disabled = true;
    timerInterval = setInterval(diminuerTemps, 1000);
}

function diminuerTemps() {
    let minutes = parseInt((temps-1) / 60, 10);
    let secondes = parseInt((temps-1) % 60, 10);

    timerElement.innerText = `Temps restant : ${minutes}:${secondes}`;
    temps--;

    if (temps <= 0){
        clearInterval(timerInterval);
        document.querySelector('#CLICK').disabled = true;
        cpsFin = cps/duree;
        cpsFinElement.innerText = "Votre CPS : " + cpsFin;
    }
}

function cpsFunction(){
    cps+=1;
    console.log(cps);
}

function restart(){
    clearInterval(timerInterval);
    document.querySelector('#CPS').disabled = false;
    document.querySelector('#CLICK').disabled = true;
    cps = 0;
    temps = 10;
    cpsFin = 0;
    timerElement.innerText = "";
    cpsFinElement.innerText = "";
}

btnCPS.addEventListener("click",(e)=>{
    e.preventDefault()
    startTimer()
})

btnRestart.addEventListener("click",(e)=>{
    e.preventDefault()
    restart()
})