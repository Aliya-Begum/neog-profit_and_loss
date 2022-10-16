const inputValues = document.querySelectorAll('.input-value');
const calculateBtn = document.querySelector('#calculate-btn');
const outputDiv = document.querySelector('#output-div');

function calculateProfutAndLoss(initialPrice, quantity, currentPrice){
    if(initialPrice&&quantity&&currentPrice){
        if(currentPrice > initialPrice){
            const profit = (currentPrice - initialPrice)*quantity;
            const profitPercentage = ((currentPrice-initialPrice)/initialPrice)*100;
            showOutput(`Hey, the profit is ${profit} and the percetage is ${profitPercentage.toFixed(2)}%`);
    
        }else if(initialPrice > currentPrice){
            const loss = (initialPrice -currentPrice)*quantity;
            const lossPercentage = ((initialPrice-currentPrice)/initialPrice)*100;
            showOutput(`Hey, the loss is ${loss} and the percentage is ${lossPercentage.toFixed(2)}%`);
    
        }else{
            showOutput("no pain, no gain and no gain, no pain");
        }
    }else{
        showOutput("Please Enter all the fields");
    }
    
}

function clickHandler(){
    calculateProfutAndLoss(Number(inputValues[0].value), Number(inputValues[1].value ), Number(inputValues[2].value));
}

function showOutput(msg){
    outputDiv.innerText = msg;
}
calculateBtn.addEventListener('click', clickHandler);