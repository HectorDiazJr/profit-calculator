
  var paid = prompt("How much did you pay for this?");
  var paidInt = parseInt(paid);

  var salePrice = prompt("How much do you plan on selling this for?");
  var salePriceInt = parseInt(salePrice);

  var shippingFee = prompt("How much will it cost to ship?");
  var shippingFeeInt = parseInt(shippingFee);

  var totalCost = salePriceInt + shippingFeeInt;
  var ebayFee = totalCost * 0.13 + 0.3;

  var totalCostwithFee = paidInt + shippingFeeInt + ebayFee;
  var profit = totalCostwithFee - paidInt;

  alert("Your profit is $" + profit);
