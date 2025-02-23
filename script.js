// Tableau contenant les bonnes réponses

var correctAnswers = ["Tunis", "Toutes les réponses", "20 mars 1956", "Toutes les réponses", "Sahara"];


// Fonction pour ajouter un gestionnaire d'événements à chaque bouton
function setupQuiz() {
    var questionContainers = document.getElementsByClassName("question");

    for (var i = 0; i < questionContainers.length; i++) {
        var buttons = questionContainers[i].getElementsByClassName("answer-btn");

        for (var j = 0; j < buttons.length; j++) {
            buttons[j].addEventListener("click", function () {
                selectAnswer(this);
            });
        }
    }

    // Ajouter un événement au bouton de validation
    var submitButton = document.getElementById("submitQuiz");
    submitButton.addEventListener("click", validateQuiz);
}

// Fonction pour sélectionner une réponse
function selectAnswer(button) {
    // Désélectionner toutes les autres réponses dans la même question
    var parent = button.parentElement;
    var buttons = parent.getElementsByClassName("answer-btn");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("selected");
    }

    // Marquer le bouton actuel comme sélectionné
    button.classList.add("selected");
}

// Fonction pour valider le quiz
function validateQuiz() {
    var questionContainers = document.getElementsByClassName("question");
    var score = 0;

    for (var i = 0; i < questionContainers.length; i++) {
        var selectedButton = questionContainers[i].getElementsByClassName("selected");

        if (selectedButton.length > 0) {
            var selectedAnswer = selectedButton[0].innerText;

            if (selectedAnswer === correctAnswers[i]) {
                score++;
                selectedButton[0].style.backgroundColor = "#6fcf97"; // Vert pour les bonnes réponses
            } else {
                selectedButton[0].style.backgroundColor = "#e76f51"; // Rouge pour les mauvaises réponses
            }
        }
    }

    // Afficher un message final avec le score
    alert("Vous avez obtenu " + score + " sur " + correctAnswers.length + " !");
}

// Appel de la fonction principale après le chargement de la page
window.onload = setupQuiz;




