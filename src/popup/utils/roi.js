export default function calculateROI(
    loanTerm,
    homeValue,
    downpaymentPercent,
    interestRatePercent,
    rentPerMonth,
    propertyTaxPerMonth,
    hoaPerMonth,
    homeInsurancePerMonth,
    renovationClosing
) {
    const downpayment = downpaymentPercent / 100
    const interestRate = interestRatePercent / 100
    const downpaymentValue = downpayment * homeValue
    const outOfPocketExpense = parseFloat(downpaymentValue) + parseFloat(renovationClosing)
    
    const principal = homeValue - downpaymentValue
    var PMT = (principal*(interestRate / 12))/(1 - Math.pow((1 + (interestRate / 12)), (-12 * loanTerm)))
    var waterTaxInsurance = parseFloat((propertyTaxPerMonth)) + parseFloat(homeInsurancePerMonth) + parseFloat(hoaPerMonth);

    const monthlyCashFlow = rentPerMonth - PMT - waterTaxInsurance
    const annualReturn = monthlyCashFlow * 12
    
    const ROI = 100 * annualReturn / outOfPocketExpense
    return round(ROI, 2)
}

const round = (value, decimals) => Number(Math.round(value+'e'+decimals)+'e-'+decimals);
