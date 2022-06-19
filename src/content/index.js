chrome.runtime.onMessage.addListener(
    (request, _, sendResponse) => {
        if (request.type === "ZillowSync") {
            return extractZillowDetails(sendResponse)
        }
    }
);

const extractZillowDetails = (sendResponse) => {
    if (document.querySelector(".fzJCbY")) {
        const homeValue = parseFloat(removeComma(document.querySelector(".fzJCbY").firstElementChild.textContent.substring(1)))
        const monthlyCostContainer = document.querySelectorAll(".hcSMFo")
        const propertyTaxPerMonth = validateValue(monthlyCostContainer[2].getElementsByTagName('span')[0].textContent)
            ? parseFloat(removeComma(cleanValue(monthlyCostContainer[2].getElementsByTagName('span')[0].textContent)))
            : 0
        const homeInsurancePerMonth = validateValue(monthlyCostContainer[3].getElementsByTagName('span')[0].textContent)
            ? parseFloat(removeComma(cleanValue(monthlyCostContainer[3].getElementsByTagName('span')[0].textContent)))
            : 0
        const hoaPerMonth = validateValue(monthlyCostContainer[4].getElementsByTagName('span')[0].textContent)
            ? parseFloat(removeComma(cleanValue(monthlyCostContainer[4].getElementsByTagName('span')[0].textContent)))
            : 0
        sendResponse({ homeValue, propertyTaxPerMonth, homeInsurancePerMonth, hoaPerMonth });
    }
}

const validateValue = (string) => string[0] === '$'
const cleanValue = (string) => string.substring(1, string.length - 3)
const removeComma = (string) => string.replace(/\,/g, '')
