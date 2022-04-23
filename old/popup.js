document.getElementById('downpayment').addEventListener('change', update)
document.getElementById('interest').addEventListener('change', update)
document.getElementById('loan-form').addEventListener('change', update)
document.getElementById('reno').addEventListener('change', update)
document.getElementById('propertyTax').addEventListener('change', update)
document.getElementById('hoa').addEventListener('change', update)
document.getElementById('homeInsurance').addEventListener('change', update)
document.getElementById('rent').addEventListener('change', update)
document.getElementById('home-value').addEventListener('change', update)

function update() {
  var downpayment = document.getElementById('downpayment')
  var interest = document.getElementById('interest')
  var renovations = document.getElementById('reno')
  var ptax = document.getElementById('propertyTax')
  var hoa = document.getElementById('hoa')
  var homeInsurance = document.getElementById('homeInsurance')
  var rent = document.getElementById('rent')
  var homeValue = document.getElementById('home-value')
  var loan = document.getElementById("30year").checked

    if (loan == false) {
        loan = 15
    } else {
        loan = 30
    } 

    // Error handeling
    if (homeValue.value <= 0) {
      homeValue.style.border = "2px solid red"
    } else {
      homeValue.style.border = "1px solid #707070"
    }

    if (rent.value <= 0) {
      rent.style.border = "2px solid red"
    } else {
      rent.style.border = "1px solid #707070"
    }

    if (renovations.value < 0) {
      renovations.style.border = "2px solid red"
    } else {
      renovations.style.border = "1px solid #707070"
    }    

    if (downpayment.value < 0 || downpayment.value > 100) {
      downpayment.style.border = "2px solid red"
    } else {
      downpayment.style.border = "1px solid #707070"
    }

    if (interest.value < 0 || interest.value > 100) {
      interest.style.border = "2px solid red"
    } else {
      interest.style.border = "1px solid #707070"
    }

    if (ptax.value < 0) {
      ptax.style.border = "2px solid red"
    } else {
      ptax.style.border = "1px solid #707070"
    }

    if (hoa.value < 0) {
      hoa.style.border = "2px solid red"
    } else {
      hoa.style.border = "1px solid #707070"
    }
    var downpaymentPercent = downpayment.value / 100
    var interestRate = interest.value / 100

    var downpaymentValue = downpaymentPercent * homeValue.value;
    var closingCost = 0
    var outOfPocketExpense = parseFloat(downpaymentValue) + parseFloat(renovations.value) + parseFloat(closingCost)

    var principal = homeValue.value - downpaymentValue;
    var PMT = (principal*(interestRate / 12))/(1 - Math.pow((1 + (interestRate / 12)), (-12 * loan)))

    // Havent included insurance, water, hoa
    var waterTaxInsurance = parseFloat((ptax.value / 12)) + parseFloat(homeInsurance.value) + parseFloat(hoa.value);
    
    //var yearlyRentalIncome = adjRent * 12

    var monthlyCashFlow = rent.value - PMT - waterTaxInsurance
    var annualReturn = monthlyCashFlow * 12
    
    var ROI = 100 * annualReturn / outOfPocketExpense

    function round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }
      
    ROI = round(ROI, 2);
    console.log(ROI)
    if (isNaN(ROI) == true) {
      ROI = 'N/A'
      var ROIlabel = document.getElementById('roi-value')
      ROIlabel.innerHTML = ""
      ROIlabel.innerHTML = `${ROI}`
    } else {
      var ROIlabel = document.getElementById('roi-value')
      ROIlabel.innerHTML = ""
      ROIlabel.innerHTML = `${ROI}%`
      if (ROI < 5) {
        ROIlabel.style.color = '#C94E4E'
      } else if (ROI > 10) {
        ROIlabel.style.color = 'green'
      } else {
        ROIlabel.style.color = "#AE8F14"//'#707070'
      }
    }
}