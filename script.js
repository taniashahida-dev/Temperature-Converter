
const temperatureInput = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const converterForm = document.getElementById("converterForm");
const result = document.getElementById("result");

// Check all fields
function checkFields() {

    if (
        temperatureInput.value !== "" &&
        fromUnit.value !== "" &&
        toUnit.value !== ""
    ) {
        convertBtn.disabled = false;
    } else {
        convertBtn.disabled = true;
    }

}

// Listen for input changes
temperatureInput.addEventListener("input", checkFields);
fromUnit.addEventListener("change", checkFields);
toUnit.addEventListener("change", checkFields);


// Convert temperature
converterForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const temperature = Number(temperatureInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    let celsius;
    let convertedTemperature;

    // First convert to Celsius
    if (from === "Celsius") {
        celsius = temperature;
    } 
    else if (from === "Fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    } 
    else if (from === "Kelvin") {
        celsius = temperature - 273.15;
    }

    // Then convert Celsius to selected unit
    if (to === "Celsius") {
        convertedTemperature = celsius;
    } 
    else if (to === "Fahrenheit") {
        convertedTemperature = (celsius * 9 / 5) + 32;
    } 
    else if (to === "Kelvin") {
        convertedTemperature = celsius + 273.15;
    }

    // Show result
    convertedTemperature = Number(convertedTemperature.toFixed(2));

    result.innerText = `${temperature} ${from} is ${convertedTemperature} ${to}`;

});
