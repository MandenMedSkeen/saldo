//index.html//

//budgetberegner.html//

const calculateBtn = document.querySelector("#calculateBtn");

if (calculateBtn) {
  calculateBtn.addEventListener("click", function () {
    const income = Number(document.querySelector("#income").value);
    const rent = Number(document.querySelector("#rent").value);
    const food = Number(document.querySelector("#food").value);
    const transport = Number(document.querySelector("#transport").value);
    const subscriptions = Number(
      document.querySelector("#subscriptions").value,
    );
    const other = Number(document.querySelector("#other").value);

    const expenses = rent + food + transport + subscriptions + other;
    const leftover = income - expenses;

    const resultBox = document.querySelector(".budget-result");
    const resultIcon = document.querySelector(".result-icon");
    const resultText = document.querySelector("#resultText");
    const resultMessage = document.querySelector("#resultMessage");

    resultBox.classList.remove("negative", "neutral", "positive");

    if (leftover < 0) {
      resultText.textContent = "Du mangler " + Math.abs(leftover) + " kr";
    } else {
      resultText.textContent = "Du har " + leftover + " kr tilbage";
    }

    if (leftover < 0) {
      resultBox.classList.add("negative");
      resultIcon.textContent = "!";
      resultMessage.textContent =
        "Pas på! Dine udgifter er højere end din indkomst.";
    } else if (leftover <= 1000) {
      resultBox.classList.add("neutral");
      resultIcon.textContent = "✓";
      resultMessage.textContent =
        "Du holder dig inden for budgettet, men der er ikke meget luft.";
    } else {
      resultBox.classList.add("positive");
      resultIcon.textContent = "✓";
      resultMessage.textContent =
        "Stærkt! Du har god luft i budgettet denne måned.";
    }
  });
}
//raadgivning.html//

//om.html//

//kontakt.html//
