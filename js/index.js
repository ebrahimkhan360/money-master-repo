// Earning amound//

function getValue(input) {
    const inputField = document.getElementById(input);
    const inputValue = parseInt(inputField.value);
    inputField.value = '';
    return inputValue;
}
document.getElementById('calculate').addEventListener('click', function () {
    const income = getValue('income');
    const meal = getValue('meal');
    const pay = getValue('pay');
    const clothing = getValue('clothing');
    // erorr minech number
    if (income < 0 || meal < 0 || pay < 0 || clothing < 0) {
        alert('Please enter valeit Number!!!')
    }
    else {
        const cost = meal + pay + clothing;
        document.getElementById('expenses').innerText = cost;
        document.getElementById('total-amount').innerText = income - cost;
    }


});
////////// blank erorr
// calculate.addEventListener('click', function () {
//     if (income.value == '' || meal.value == '' || pay.value == '' || clothing.value == '') {
//         alert('pleass Enter number!!!');
//     }
//     else {
//         const cost = meal + pay + clothing;
//         document.getElementById('pocket-money').innerText = cost;
//         document.getElementById('total-balance').innerText = income - cost;
//     }
// });