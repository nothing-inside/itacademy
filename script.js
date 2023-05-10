let buttonC = document.getElementById('tempC')
let buttonF = document.getElementById('tempF')
let result = document.getElementById('result')

function getTempCelsia(temp) {
let r = (temp * 9/5) + 32;
    result.innerHTML = temp+" \xB0F is " + r + " \xB0C"
}
function getTempFaregeit(temp) {
let r = (temp - 32) * 5/9;
    result.innerHTML = temp+" \xB0F is " + r + " \xB0C"
}
buttonC.addEventListener('click', function() {
  getTempCelsia(temp.value)
})
buttonF.addEventListener('click', function() {
  getTempFaregeit(temp.value)
})

