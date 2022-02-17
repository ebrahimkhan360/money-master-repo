function getValue(input) {
    const inputField = document.getElementById(input)
    const inputValue = parseInt(inputField.value)
    inputField.value = ''
    return inputValue
}
document.getElementById('calculate').addEventListener('click', function () {
    const income = getValue('income')
    const meal = getValue('meal')
    const pay = getValue('pay')
    const clothing = getValue('clothing')
    const cost = meal + pay + clothing
    document.getElementById('expenses').innerText = cost
    document.getElementById('total-amount').innerText = income - cost


});