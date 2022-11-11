
// -DOM elements
const firstCountryCurrency = document.getElementById('currency-one');
const firstCountryAmount = document.getElementById('amount-one');
const swapButton = document.getElementById('swap');
const rateValue = document.getElementById('rate');
const secondCountryCurrency = document.getElementById('currency-two');
const secondCountryAmount = document.getElementById('amount-two');

// -calculate & fetch 
function calculate(){
    const cur1 = firstCountryCurrency.value;
    const cur2 = secondCountryCurrency.value; 
    // fetch data from api 
    // api.com/v6/${APIKey}/latest/${currency}
    // https://v6.exchangerate-api.com/v6/3abbe86e0449b2cb2c22/latest/USD

    fetch(`https://v6.exchangerate-api.com/v6/3abbe86e0449b2cb2c22/latest/${cur1}`)
        .then(res => res.json())
        .then(data =>{
            const rates = data.conversion_rates[cur2];
            rateValue.innerText = `1${cur1} = ${rates} ${cur2}`
            secondCountryAmount.value = (firstCountryAmount.value *rates).toFixed(2);

            // console.log(data);
            // console.log(rates);
            // console.log(secondCountryAmount.value);
        })
}

// -Event Listner
firstCountryCurrency.addEventListener('change', calculate);
firstCountryAmount.addEventListener('input', calculate);
secondCountryCurrency.addEventListener('change', calculate);
secondCountryAmount.addEventListener('input', calculate);

// - swap button
swapButton.addEventListener('click',()=>{
    const temp = firstCountryCurrency.value;
    firstCountryCurrency.value = secondCountryCurrency.value;
    secondCountryCurrency.value = temp;
    calculate()
})
// function call
calculate();

// @mondalCodeHub | November-2022