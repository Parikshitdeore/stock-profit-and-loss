var initial = document.querySelector("#initial")
var quantity = document.querySelector("#quantity")
var current = document.querySelector("#current")
var button = document.querySelector("#button")
var output=document.querySelector("#output")

button.addEventListener("click",clickHandler)

function clickHandler(){
   var ip = Number(initial.value)
   var qty=Number(quantity.value)
   var curr=Number(current.value)

   calculateProfilOrLoss(ip,qty,curr)
}

function calculateProfilOrLoss(initial,quantity,current){

if(initial>current){
   var loss = (initial-current)*quantity
   var lossPercentage=(loss/initial)*100
   showText("Noooo, the loss is "+loss+" and the loss percentage is "+ lossPercentage.toFixed(2)+"%")
}
else if(initial<current){
    var profit = (current-initial)*quantity
    var profitPercentage=(profit/initial)*100
    console.log(profitPercentage)
    showText("Yayy, the profit is "+profit+" and the profit percentage is "+ profitPercentage.toFixed(2)+"%")
}
else{
    showText("No gain = No pain")
}

}
function showText(msg){
    output.innerText=msg
}