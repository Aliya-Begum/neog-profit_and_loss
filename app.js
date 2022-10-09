const inputValues = document.querySelectorAll('.input-value');
const calculateBtn = document.querySelector('#calculate-btn');
const outputDiv = document.querySelector('#output-div');

function calculateProfutAndLoss(initialPrice, quantity, currentPrice){
    if(currentPrice > initialPrice){
        const profit = (currentPrice - initialPrice)*quantity;
        const profitPercentage = (profit/initialPrice)*100;
        outputDiv.innerText = (`hey, the profit is ${profit} and the percetage is ${profitPercentage}%`);

    }else if(initialPrice > currentPrice){
        const loss = (initialPrice -currentPrice)*quantity;
        const lossPercentage = (loss/initialPrice)*100;
        outputDiv.innerText = (`Hey, the loss ${loss} and the percentage is ${lossPercentage}%`);

    }else{
        outputDiv.innerText = "no pain, no gain and no gain, no pain";
    }
}

function clickHandler(){
    calculateProfutAndLoss(Number(inputValues[0].value), Number(inputValues[1].value ), Number(inputValues[2].value));
}

calculateBtn.addEventListener('click', clickHandler);