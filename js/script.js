// script.js

// <!-- Ambil elemen DOM -->
const inputSuhu = document.getElementById("input-suhu");
const hasilSuhu = document.getElementById("hasil-suhu");
const detailSuhu = document.getElementById("detail-suhu");
const convertBtn = document.getElementById("convert-btn");
const resetBtn = document.getElementById("reset-btn");
const reverseBtn = document.getElementById("reverse-btn");

let isCelciusToFahrenheit = true;

// <!-- Fungsi konversi suhu -->
function convertTemperature() {
    const inputValue = parseFloat(inputSuhu.value);

    if (isNaN(inputValue)) {
        alert("Masukkan suhu yang valid!");
        return;
    }

    let result;
    let explanation;

    if (isCelciusToFahrenheit) {
        result = (inputValue * 9 / 5) + 32;
        explanation = `${inputValue}°C dikonversi ke Fahrenheit menggunakan rumus: (${inputValue} × 9/5) + 32 = ${result.toFixed(2)}°F`;
    } else {
        result = (inputValue - 32) * 5 / 9;
        explanation = `${inputValue}°F dikonversi ke Celcius menggunakan rumus: (${inputValue} - 32) × 5/9 = ${result.toFixed(2)}°C`;
    }

    hasilSuhu.value = result.toFixed(2);
    detailSuhu.value = explanation;
}

// <!-- Fungsi reset -->
function resetForm() {
    inputSuhu.value = "";
    hasilSuhu.value = "";
    detailSuhu.value = "";
}

// <!-- Fungsi reverse konversi -->
function reverseConversion() {
    isCelciusToFahrenheit = !isCelciusToFahrenheit;

    const label = document.querySelector("label[for='input-suhu']");
    const hasilLabel = document.querySelector("label[for='hasil-suhu']");

    if (isCelciusToFahrenheit) {
        label.innerHTML = "Celcius (°C):";
        hasilLabel.innerHTML = "Fahrenheit (°F)";
    } else {
        label.innerHTML = "Fahrenheit (°F):";
        hasilLabel.innerHTML = "Celcius (°C)";
    }

    // Reset input dan output saat mode berubah
    resetForm();
}

// <!-- Event listener untuk tombol -->
convertBtn.addEventListener("click", convertTemperature);
resetBtn.addEventListener("click", resetForm);
reverseBtn.addEventListener("click", reverseConversion);
