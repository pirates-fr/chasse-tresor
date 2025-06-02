const enigmes = [
    {
        question: "Énigme 1 :",
        reponse: "gryffondor",
        indice: "Indice : Va là où les Moldus rangent les objets bruyants et à roues."
    }, {
        question: "Énigme 2 : Quelle potion choisis-tu pour pour survivre à Rogue ?",
        reponse: "bleu",
        indice: "Indice : Où l'eau danse comme un hippocampe enchanté ?"
    }, {
        question: "Énigme 3 :",
        reponse: "vert",
        indice: "Indice : Fouille la verdure où un elfe pourrait se cacher."
    }, {
        question: "Énigme 4 :",
        reponse: "londres",
        indice: "Indice : Là où l'on regarde les aventures de Harry, Ron et Hermione à l'écran."
    }, {
        question: "Énigme 5 :",
        reponse: "incendio",
        indice: "Indice : Là où les mots reposent dans des rangées bien alignées."
    }, {
        question: "Énigme 6 :",
        reponse: "creuser",
        indice: "Indice : Un dernier sort, et le trésor apparaîtra dans le monde réel là où la magie à commencer."
    }, {
        question: "Énigme 7 :",
        reponse: "394",
        indice: "La clé est là où ce cache ton reflet."
    }
];

let current = 0;

function checkAnswer() {

    const input = document.getElementById("answer").value.trim().toLowerCase();
    const resultDiv = document.getElementById("result");

    if(input === enigmes[current].reponse.toLowerCase()) {

        resultDiv.textContent = enigmes[current].indice;
        current++;
        if(current < enigmes.length) {

            document.getElementById("question").textContent = enigmes[current].question;
            document.getElementById("answer").value = "";
        } else {

            document.getElementById("question").textContent = "Félicitations ! Tu as terminé la chasse au trésor.";
            document.getElementById("answer").style.display = "none";
            document.querySelector("button").style.display = "none";
        }
    } else {

        let correctLetters = 0;
        for(let i = 0; i < Math.min(input.length, enigmes[current].reponse.length); i++) {

            if(input[i] === enigmes[current].reponse[i]) {

                correctLetters++;
            }
        }

        const accuracy = (correctLetters / enigmes[current].reponse.length) * 100;

        if(accuracy >= 50) {

            resultDiv.textContent = "Faute d'orthographe. Réessaye !";
        } else {

            resultDiv.textContent = "Mauvaise réponse. Réessaye !";
        }
    }
}
