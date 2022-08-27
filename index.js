var selectedPlayerCount=0;
function playerSelection(player){
    let ol = document.getElementById('selectedPlayers');
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(player));
    ol.appendChild(li);
    selectedPlayerCount++;
}
function playerExpense(){
    var perPlayerExpense = document.getElementById('perPlayerExpense').value;
    // console.log(perPlayerExpense);
    var perPlayerAmount = document.getElementById('perPlayerAmount');
    totalPlayerExpense = perPlayerExpense*selectedPlayerCount;
    perPlayerAmount.innerHTML ='$'+ totalPlayerExpense;
}
function totalExpense(){
    let managerExpense = document.getElementById('managerExpense').value;
    let coachExpense = document.getElementById('coachExpense').value;
    console.log(managerExpense,'and..',coachExpense,'and..',totalPlayerExpense);
    let totalExpenses = parseInt(totalPlayerExpense) + parseInt(managerExpense) + parseInt(coachExpense);
    document.getElementById('totalExpenses').innerHTML = totalExpenses;

}