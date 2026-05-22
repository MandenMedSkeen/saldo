//Header / Nav//
const burgerButton = document.querySelector("#burgerButton");
const navLinks = document.querySelector("#navLinks");

if (burgerButton && navLinks) {
  burgerButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
      burgerButton.textContent = "×";
    } else {
      burgerButton.textContent = "☰";
    }
  });
}

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
const quizButtons = document.querySelectorAll(".quiz-toggle");

quizButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const quizId = button.dataset.quiz;
    const quizBox = document.querySelector("#" + quizId);

    quizBox.classList.toggle("active");

    if (quizBox.classList.contains("active")) {
      button.textContent = "Luk mini-quiz";
    } else {
      button.textContent = "Tag mini-quiz";
    }
  });
});

const quizSubmitButtons = document.querySelectorAll(".quiz-submit");

quizSubmitButtons.forEach(function (submitButton) {
  submitButton.addEventListener("click", function () {
    const quizBox = submitButton.parentElement;
    const questions = quizBox.querySelectorAll(".quiz-question");
    const result = quizBox.querySelector(".quiz-result");

    let score = 0;

    questions.forEach(function (question) {
      const correctAnswer = question.dataset.answer;
      const selectedAnswer = question.querySelector("input:checked");

      if (selectedAnswer && selectedAnswer.value === correctAnswer) {
        score++;
      }
    });

    result.textContent =
      "Du fik " + score + " ud af " + questions.length + " rigtige.";

    if (score === questions.length) {
      result.textContent +=
        " Sådan! Du har styr på alt, hvad denne lektion kan byde på.";
    } else if (score >= 3) {
      result.textContent +=
        " Flot resultat! Du har fanget det vigtigste i denne lektion.";
    } else {
      result.textContent +=
        " Prøv at se lektionen igen og tag quizzen bagefter.";
    }
  });
});

//om.html//

//kontakt.html//
const contactForm = document.querySelector("#form");
const contactOverlay = document.querySelector(".contact-overlay");
const closeOverlay = document.querySelector("#closeOverlay");

if (contactForm) {
  if (typeof emailjs !== "undefined") {
    emailjs.init("sfstn9MsoiG6ZhNp-");
  }

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    function showContactOverlay() {
      if (contactOverlay) {
        contactOverlay.classList.add("show");
      }
    }

    if (typeof emailjs !== "undefined") {
      emailjs.sendForm("service_1pfc1cz", "template_pd9ehyk", contactForm).then(
        function () {
          showContactOverlay();
          contactForm.reset();
        },
        function (error) {
          console.log("FAILED...", error);
          showContactOverlay();
        },
      );
    } else {
      showContactOverlay();
    }
  });
}

if (closeOverlay && contactOverlay) {
  closeOverlay.addEventListener("click", function () {
    contactOverlay.classList.remove("show");
  });
}

if (contactOverlay) {
  contactOverlay.addEventListener("click", function (event) {
    if (event.target === contactOverlay) {
      contactOverlay.classList.remove("show");
    }
  });
}
