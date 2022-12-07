const inputValues = document.querySelectorAll('.input-value');
const calculateBtn = document.querySelector('#calculate-btn');
const outputDiv = document.querySelector('#output-div');

function calculateProfitAndLoss(initialPrice, quantity, currentPrice){
    if(initialPrice>0&&quantity>0&&currentPrice>0){
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
        showOutput("input values can not be empty and should be greater than 0.");
    } 
}

function clickHandler(){
    var initialPrice = Number(inputValues[0].value);
    var quantity =  Number(inputValues[1].value) ;
    var currentPrice = Number(inputValues[2].value); 
    calculateProfitAndLoss(initialPrice,quantity, currentPrice);
}

function showOutput(msg){
    outputDiv.innerText = msg;
}
calculateBtn.addEventListener('click', clickHandler);