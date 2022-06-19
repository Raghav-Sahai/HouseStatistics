export default function calculate(
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

    const downpaymentDecimal = downpaymentPercent / 100
    const interestRateDecimal = interestRatePercent / 100

    const downpaymentValue = downpaymentDecimal * homeValue
    const outOfPocketExpense = downpaymentValue + renovationClosing
    const principal = homeValue - downpaymentValue

    const PMT = (principal * (interestRateDecimal / 12)) / (1 - Math.pow((1 + (interestRateDecimal / 12)), (-12 * loanTerm)))
    const waterTaxInsurance = propertyTaxPerMonth + homeInsurancePerMonth + hoaPerMonth;

    const monthlyCashFlow = rentPerMonth - PMT - waterTaxInsurance
    const annualReturn = monthlyCashFlow * 12
    const ROI = 100 * annualReturn / outOfPocketExpense

    return {
        roi: round(ROI, 2),
        downpaymentValue: round(downpaymentValue, 2),
        monthlyCashFlow: round(monthlyCashFlow, 2),
        payment: round(PMT, 2)
    }
}

const round = (value, decimals) => Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
