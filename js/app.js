document.getElementById("clickThisBtn").addEventListener('click', function () {
    alert("Hey You Can Add Only 5 Players ");
})

function playerSelect(element) {

    element.style.backgroundColor = "red"
    element.style.border = "none"
    element.style.color = "white"
    element.innerText = 'SELECTED'
    element.setAttribute('disabled', true)

    const playerName = element.parentNode.parentNode.children[1].innerText;
    console.log(playerName)
    const showPlayerName = document.getElementById('add-name');

    const link = document.createElement('li');
    link.style.color = 'white';
    link.style.marginLeft = 'white';
    link.innerText = playerName;

    showPlayerName.appendChild(link)

    const playerObj = {
        playerName: playerName,
    }

    // cartArray.push(playerObj);

    console.log(cartArray.length);

    display(cartArray);
}




document.getElementById("per-player-calculate-ammount").addEventListener('click', function () {


    const selectedPlayers = cartArray.length


    const ammountField = document.getElementById('player-ammount');
    const newPerPlayerAmount = ammountField.value;

    const PlayerAmount = parseFloat(newPerPlayerAmount);

    const currentMoney = selectedPlayers * PlayerAmount;

    const ammountTotalElement = document.getElementById("per-player-total");
    const ammountTotal = ammountTotalElement.innerText;
    ammountTotalElement.innerText = currentMoney;

})


document.getElementById("calculate-total-cost").addEventListener('click', function () {

    const ammountTotalElement = document.getElementById("per-player-total");
    const costTotal = ammountTotalElement.innerText;
    const perCost = parseFloat(costTotal);


    const ammountField = document.getElementById('manager-cost');
    const previousPerManagerCost = ammountField.value;
    const managerCost = parseFloat(previousPerManagerCost);

    const coachCostField = document.getElementById('coach-cost');
    const perPlayerCost = coachCostField.value;
    const coachCost = parseFloat(perPlayerCost);

    const fullTotalCost = perCost + managerCost + coachCost;


    const coachCostTotalElement = document.getElementById('per-total-cost');
    coachCostTotalElement.innerText = fullTotalCost;

    // console.log(fullTotalCost);


})
