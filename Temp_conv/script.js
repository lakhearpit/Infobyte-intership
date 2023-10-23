function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const conversionType = document.querySelector('input[name="conversionType"]:checked').value;
    let result;

    if (conversionType === "toCelsius") {
        // Convert to Celsius
        if (inputUnit === "fahrenheit") {
            result = (temperature - 32) * 5/9;
        } else if (inputUnit === "kelvin") {
            result = temperature - 273.15;
        } else {
            result = temperature; // Already in Celsius
        }
    } else if (conversionType === "toFahrenheit") {
        // Convert to Fahrenheit
        if (inputUnit === "celsius") {
            result = (temperature * 9/5) + 32;
        } else if (inputUnit === "kelvin") {
            result = (temperature * 9/5) - 459.67;
        } else {
            result = temperature; // Already in Fahrenheit
        }
    } else {
        // Convert to Kelvin
        if (inputUnit === "celsius") {
            result = temperature + 273.15;
        } else if (inputUnit === "fahrenheit") {
            result = (temperature + 459.67) * 5/9;
        } else {
            result = temperature; // Already in Kelvin
        }
    }

    document.getElementById("result").innerHTML = `Result: ${result.toFixed(2)}`;
}