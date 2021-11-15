$("#start").click(function () {

  var paid = prompt("How much did you pay for this?");
  var paidInt = Number(paid);
  console.log("you paid $" + paidInt);

  var salePrice = prompt("How much do you plan on selling this for?");
  var salePriceInt = Number(salePrice);
  console.log("You want to sell it for $" + salePriceInt);

  var shippingCharge = prompt("How much will you charge to ship?");
  var shippingChargeInt = Number(shippingCharge);
  console.log("You will charge $" + shippingChargeInt + " to ship");

  var shippingCost = prompt("How much will it cost you to ship?");
  var shippingCostInt = Number(shippingCost);
  console.log("Your cost to ship is $" + shippingCostInt);

  var totalCost = salePriceInt + shippingChargeInt;
  var ebayFee = totalCost * 0.12 + 0.3;

  var totalCostwithFee = paidInt + shippingCostInt + ebayFee;
  console.log("Your total cost will be $" + totalCostwithFee);
  var profit = salePriceInt + shippingChargeInt - totalCostwithFee;

  console.log("Your profit is $" + profit);
  console.log("ebay fee is $" + ebayFee);

  alert("Your profit is $" + profit.toFixed(2));

  alert(
    "Your ebay fees are $" +
      ebayFee.toFixed(2) +
      " and your shipping fees are $" +
      shippingCost
  );

  var profitDisplayed = "$" + profit.toFixed(2);
  console.log(profitDisplayed);

  $("h1").text("Your profit is: " + profitDisplayed);

  $("#onePercent").click(function() {
    var profitDisplayed1 = profit - (salePriceInt * 0.01);
    $("h1").text("$" + profitDisplayed1.toFixed(2) + " With a 1% promotion")
  })
  $("#twoPercent").click(function() {
    var profitDisplayed1 = profit - (salePriceInt * 0.02);
    $("h1").text("$" + profitDisplayed1.toFixed(2) + " With a 2% promotion")
  })
  $("#threePercent").click(function() {
    var profitDisplayed1 = profit - (salePriceInt * 0.03);
    $("h1").text("$" + profitDisplayed1.toFixed(2) + " With a 3% promotion")
  })
  $("#fourPercent").click(function() {
    var profitDisplayed1 = profit - (salePriceInt * 0.04);
    $("h1").text("$" + profitDisplayed1.toFixed(2) + " With a 4% promotion")
  })
  $("#fivePercent").click(function() {
    var profitDisplayed1 = profit - (salePriceInt * 0.05);
    $("h1").text("$" + profitDisplayed1.toFixed(2) + " With a 5% promotion")
  })
  $("#sixPercent").click(function() {
    var profitDisplayed1 = profit - (salePriceInt * 0.06);
    $("h1").text("$" + profitDisplayed1.toFixed(2) + " With a 6% promotion")
  })
  $("#sevenPercent").click(function() {
    var profitDisplayed1 = profit - (salePriceInt * 0.07);
    $("h1").text("$" + profitDisplayed1.toFixed(2) + " With a 7% promotion")
  })
  $("#eightPercent").click(function() {
    var profitDisplayed1 = profit - (salePriceInt * 0.08);
    $("h1").text("$" + profitDisplayed1.toFixed(2) + " With a 8% promotion")
  })
  $("#ninePercent").click(function() {
    var profitDisplayed1 = profit - (salePriceInt * 0.09);
    $("h1").text("$" + profitDisplayed1.toFixed(2) + " With a 9% promotion")
  })
  $("#tenPercent").click(function() {
    var profitDisplayed1 = profit - (salePriceInt * 0.10);
    $("h1").text("$" + profitDisplayed1.toFixed(2) + " With a 10% promotion")
  })
  $("#noProm").click(function() {
    $("h1").text("Your profit is: " + profitDisplayed)
  })
  
});


