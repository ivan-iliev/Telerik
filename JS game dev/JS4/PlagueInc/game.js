
fs = require("fs");

// Few Important assumptions that drive the outcome
//
// Number of times to run the simulation
var senarios = 1000;

// % chance of making big deal
var bigDealPerc   = 0.3;
// % chance of making a small deal
var smallDealPerc = 0.5;

// Amount of deal const. you can make in X days.
// We gave 'big' deal twice the effort of a small deal.
var amountOfDealsExecution = 50;
var amountBigDeals         = 25;
var amountSmallDeals       = 50;

// values per deal in $
var bigDeal   = 27000;
var smallDeal = 15000;

// This is the heart of the simulation
// We run X senarios and see what is the best 'blend' of deals
function findMaxAmount() {
  var outData = "Amount,Big wins, Big Losses\n";
  var maxAmount = 0;
  var maxDeals  = 0;
  for (var i=0; i < senarios; i++) {
    var maxSenario = runSenarioBlending();
    console.log(i + ") Amount: " + maxSenario.moneyWeMade +
           " Big Deals: " +
           (maxSenario.winsBig + maxSenario.lossBig)  );
    if (maxAmount < maxSenario.moneyWeMade) {
      maxAmount = maxSenario.moneyWeMade;
      maxDeals  = maxSenario.winsBig + maxSenario.lossBig;
    }
    outData += maxSenario.moneyWeMade + ","
            + maxSenario.winsBig + "," + maxSenario.lossBig + "\n";
  }
  console.log ("== max amount: " + maxAmount +
               " deals: "+ maxDeals);
  fs.writeFile("x-decisions-node-results.csv", outData);
}

// Running on all the deals' comninations and find the best blend
function runSenarioBlending() {
  var maxSenario = new Object();
  var maxAmount = 0;
  for (var i=0; i < amountBigDeals; i++) {
    var statsObj = runDealsBlending(i+3);
    if (statsObj.moneyWeMade > maxAmount) {
      maxSenario = statsObj;
      maxAmount = statsObj.moneyWeMade;
    }
  }
  return maxSenario;
}

//
//
//
function runDealsBlending(curLine) {
  var winsBig = 0;
  var lossBig = 0;
  var winSmall = 0;
  var lossSmall = 0;
  var curTrial = 0;
  var moneyWeMade = 0;
  var retObj = new Object();
  for (var b=0; b < curLine-2; b++) {
    if (winBigDeal()) {
      // We won this big deal
      moneyWeMade += bigDeal;
      winsBig++;
    }
    else {
      lossBig++;
    }
  }

  for (var s=0; s < amountSmallDeals &&
      ((b*2)+s) < amountOfDealsExecution; s++) {
      if (winSmallDeal()) {
        // won small deal
        moneyWeMade += smallDeal;
        winSmall++;
      }
      else {
        lossSmall++;
      }
  }
  retObj.winsBig = winsBig;
  retObj.winSmall = winSmall;
  retObj.lossBig = lossBig;
  retObj.lossSmall = lossSmall;
  retObj.moneyWeMade = moneyWeMade;
  //console.log(winsBig + " , " + winSmall + " , " + lossBig + " , " + lossSmall + " , "+ moneyWeMade + " \n");
  return retObj;
};


// determines if we win in a given trial when we aim for BIG deal
function winBigDeal() {
    if (Math.random() < bigDealPerc) {
      return true;
    }
    return false;
};

// determines if we win in a given trials when we aim for small deal
function winSmallDeal() {
    if (Math.random() < smallDealPerc) {
      return true;
    }
    return false;
};


/*****************************
*
* Start the Simulation
*
******************************/
var startTime = Date.now();
findMaxAmount();
var endTime = Date.now();
console.log("\n===== Took us: " + (endTime - startTime) + " milliseconds");
