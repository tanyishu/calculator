function calBasic() {
    var basicNum1 = Number(document.getElementById('basic-num-1').value);
    var basicNum2 = Number(document.getElementById('basic-num-2').value);
    var basicOps = document.getElementById('basic-operation').value;
    var answer = evaluate(basicOps)(basicNum1, basicNum2);
    var basicAns = document.getElementById('basic-answer-alert');
      basicAns.innerHTML = answer;
    function evaluate(operation) {
      return function(num1, num2) {
          if (operation == "+") {
            return num1 + num2;
          }
          else if (operation == "-") {
            return num1 - num2;
          }
          else if (operation == "*") {
            return num1 * num2;
          }
          else {
          return num1 / num2;
        }
      };
    }
}

function calTrip(){
  var tripDistance = Number(document.getElementById('trip-distance').value);
  var tripMpg = Number(document.getElementById('trip-mpg').value);
  var tripCost = Number(document.getElementById('trip-cost').value);
  var tripSpeed = Number(document.getElementById('trip-speed').value);
  var answer = evaluate(tripCost)(tripDistance, tripMpg, tripSpeed);
  var tripAns = document.getElementById('trip-answer-alert');
    tripAns.innerHTML = answer;
    function evaluate(operation) {
      return function(tripDistance, tripMpg, tripSpeed) {
        if (tripSpeed <= 60 ) {
          return tripDistance / tripMpg * tripCost;
        }
        else if (tripSpeed > 60) {
          return tripDistance / (tripMpg - (tripSpeed - 60) * 2) * tripCost;
        }
      };
    }

}


function calBMI() {
  var bmiMass = Number(document.getElementById('bmi-mass').value);
  var bmiHeight = Number(document.getElementById('bmi-height').value);
  document.getElementById('bmi-answer-alert').innerHTML = (bmiMass/(bmiHeight * bmiHeight));
}




function calMortgage() {
  var Loan = Number(document.getElementById('mortgage-loan').value);
  var Apr = Number(document.getElementById('mortgage-apr').value);
  var Term = Number(document.getElementById('mortgage-term').value);
  document.getElementById('mortgage-answer-alert').innerHTML =
  Loan * Apr/100 * Math.pow(1+(Apr/100/12), Term) / (Math.pow(1+(Apr/100/12), Term) -1)/12;

 // var Loan = Number(document.getElementById('mortgage-loan').value);
 // var Apr = Number(document.getElementById('mortgage-apr').value);
 // var Term = Number(document.getElementById('mortgage-term').value);
 // return Loan * Apr/100 * Math.pow((1+(Apr/100)/12), Term) / (Math.pow((1+(Apr/100/12), Term) -1)/12;
 // document.getElementById('mortgage-answer-alert').innerHTML = (calMortgage)
}
 

function addClickListener(element,i) {
  element.addEventListener('click', function(){
  if (element.id == "basic-calc") {
    calBasic();
}
  else if (element.id == "trip-calc") {

  calTrip();
}
  else if (element.id == "bmi-calc") {

  calBMI();
}
  else if (element.id == "mortgage-calc") {

  calMortgage();
}
  }, false);
}
function ready() {
  // alert("ready");
  elements = document.getElementsByTagName('button');
  // alert(elements.length + " elements found");
  for ( var i = 0; i < elements.length; i++ ){
      addClickListener(elements[i], i);
    }
}
window.addEventListener('load', ready, false);
