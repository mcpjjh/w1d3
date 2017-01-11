var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

// function calculateSalesTax(province, totalSales, salesData, taxRates) {
//   return(totalSales*taxRates[province]);
// }

function calculateSalesTax(salesData, taxRates) {
  var myOb = {};
  for (var m = 0; m < salesData.length; m++) {
    if (myOb[salesData[m].name] === undefined) {
      myOb[salesData[m].name] = {};
      var count = 0;
      for (var k = 0; k < salesData[m].sales.length; k++) {
        count += salesData[m].sales[k];
      }
      myOb[salesData[m].name].totalSales = count;
      myOb[salesData[m].name].totalTaxes = myOb[salesData[m].name].totalSales*taxRates[salesData[m].province];


// function salesTaxReport(salesData, taxRates) {
//   var myOb = {};
//   for (var m = 0; m < salesData.length; m++) {
//     if (myOb[salesData[m].name] === undefined) {
//       myOb[salesData[m].name] = {};
//       var count = 0;
//       for (var k = 0; k < salesData[m].sales.length; k++) {
//         count += salesData[m].sales[k];
//       }
//       myOb[salesData[m].name].totalSales = count;
//       myOb[salesData[m].name].totalTaxes = calculateSalesTax(salesData[m].province, myOb[salesData[m].name].totalSales, salesData, taxRates);


    } else {
      var preTax = 0;
      for (var i = 0; i < salesData[m].sales.length; i++) {
        preTax += salesData[m].sales[i];
      }
      individTax = preTax*taxRates[salesData[m].province];
      myOb[salesData[m].name].totalSales += preTax;
      myOb[salesData[m].name].totalTaxes += individTax;
    }
  }
return(myOb);
}

console.log(calculateSalesTax(companySalesData, salesTaxRates));

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/