const convertBtn = document.getElementById("convert")
let inputEl = document.getElementById("input-el")
let mtrToFeet = document.getElementById("meter-feet")
let ltrToGallon = document.getElementById("liter-gallon")
let kgToPound = document.getElementById("kilo-pound")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value
    
    mtrToFeet.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet  | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`
    ltrToGallon.textContent = `${baseValue} liter = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} liters`
    kgToPound.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(3)} kilos`
})