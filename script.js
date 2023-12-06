document.addEventListener("DOMContentLoaded", function () {
    const calculatorForm = document.getElementById("age-calculator-form");
    const dogAgeResult = document.getElementById("dog-age-result");

    calculatorForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const humanAgeInput = document.getElementById("human-age");
        const humanAge = parseFloat(humanAgeInput.value);
        
        if (!isNaN(humanAge)) {
            const dogAge = calculateDogAge(humanAge);
            dogAgeResult.textContent = `Your dog's age in dog years is approximately ${dogAge} years.`;
        } else {
            dogAgeResult.textContent = "Please enter a valid age.";
        }
    });
    
    function calculateDogAge(humanAge) {
        // The common rule for dog years calculation is the first year counts as 15 human years,
        // the second year is 9 human years, and each year after that is 5 human years.
        if (humanAge === 1) {
            return 15;
        } else if (humanAge === 2) {
            return 24;
        } else {
            return 24 + (humanAge - 2) * 5;
        }
    }
});
