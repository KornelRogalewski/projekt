document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.getElementById("themeToggle");
    const savedTheme = localStorage.getItem("theme") || "light-mode";
    document.body.classList.add(savedTheme);
    themeToggle.textContent = savedTheme === "dark-mode" ? "Tryb Jasny" : "Tryb Ciemny";

    themeToggle.addEventListener("click", function () {
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.replace("dark-mode", "light-mode");
            localStorage.setItem("theme", "light-mode");
            this.textContent = "Tryb Ciemny";
        } else {
            document.body.classList.replace("light-mode", "dark-mode");
            localStorage.setItem("theme", "dark-mode");
            this.textContent = "Tryb Jasny";
        }
    });

    const quizForm = document.getElementById("quizForm");
    quizForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const correctAnswers = {
            q1: "A", q2: "B", q3: "A", q4: "B", q5: "A",
            q6: "A", q7: "A", q8: "A", q9: "A", q10: "A",
            q11: "A", q12: "B", q13: "B", q14: "C", q15: "C"
        };

        let score = 0;

        for (let key in correctAnswers) {
            const selectedAnswer = document.querySelector(`input[name="${key}"]:checked`);
            if (selectedAnswer && selectedAnswer.value === correctAnswers[key]) {
                score++;
            }
        }

        alert(`Twój wynik: ${score} / 15`);
    });

    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let errorMessage = document.getElementById("errorMessage");

        if (name === "" || email === "" || message === "") {
            errorMessage.textContent = "Wszystkie pola są wymagane!";
            return;
        }

        if (!validateEmail(email)) {
            errorMessage.textContent = "Podaj poprawny adres e-mail!";
            return;
        }

        errorMessage.textContent = ""; 
        alert("Formularz został poprawnie wysłany!");
    });

    function validateEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});

document.querySelectorAll(".akordeon-btn").forEach(button => {
    button.addEventListener("click", function () {
        let content = this.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});

document.querySelectorAll('.thumbnail').forEach(image => {
  image.addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = image.src;
  });
});

document.getElementById('close').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none';
});
