function calculateTip() {
    const bill = parseFloat(document.getElementById("bill").value);
    const tipPercentage = parseFloat(document.getElementById("tip").value);
    const people = parseInt(document.getElementById("people").value);
    const result = document.getElementById("result");

    if (isNaN(bill) || isNaN(tipPercentage) || isNaN(people) || bill <= 0 || tipPercentage < 0 || people <= 0) {
        result.innerHTML = "Please enter valid values!";
        result.style.color = "yellow";
        return;
    }

    const tipAmount = (bill * tipPercentage) / 100;
    const totalAmount = bill + tipAmount;
    const perPerson = totalAmount / people;

    result.innerHTML = `
        Tip: $${tipAmount.toFixed(2)} <br>
        Total Bill: $${totalAmount.toFixed(2)} <br>
        Amount Per Person: $${perPerson.toFixed(2)}
    `;
    result.style.color = "white";
}
