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
        indice: "Indice : Un dernier sort, et le trésor apparaîtra dans le monde réel là où la magie à commencé."
    }, {
        question: "Énigme 7 :",
        reponse: "394",
        indice: "La clé est là où ce cache ton reflet."
    }
];

let players = {};
let current = 0;

function checkAnswer() {

    const input = document.getElementById("answer").value.trim().toLowerCase();
    const resultDiv = document.getElementById("result");
    const playerName = prompt("Quel est ton prénom pour suivre la progression ?");

    if(!players[playerName]) players[playerName] = { current: 0, hintsGiven: [] };

    if(input === enigmes[players[playerName].current].reponse.toLowerCase()) {

        resultDiv.textContent = enigmes[players[playerName].current].indice;
        players[playerName].current++;
        
        updateAdminDashboard(playerName);

        if(players[playerName].current < enigmes.length) {

            document.getElementById("question").textContent = enigmes[players[playerName].current].question;
            document.getElementById("answer").value = "";
        } else {

            document.getElementById("question").textContent = "Félicitations ! Tu as terminé la chasse au trésor.";
            document.getElementById("answer").style.display = "none";
            document.querySelector("button").style.display = "none";
        }
    } else {

        let correctLetters = 0;
        for(let i = 0; i < Math.min(input.length, enigmes[players[playerName].current].reponse.length); i++) {

            if(input[i] === enigmes[players[playerName].current].reponse[i]) correctLetters++;
        }

        const accuracy = (correctLetters / enigmes[players[playerName].current].reponse.length) * 100;
        if(accuracy >= 50) {

            resultDiv.textContent = "Faute d'orthographe. Réessaye !";
        } else {

            resultDiv.textContent = "Mauvaise réponse. Réessaye !";
        }
    }
}

function updateAdminDashboard(playerName) {

    const adminSection = document.getElementById("admin-section");
    const playerProgress = players[playerName].current;
    const progressText = `Énigme ${playerProgress + 1}/${enigmes.length}`;

    document.getElementById("admin-player").textContent = `Joueur : ${playerName}`;
    document.getElementById("admin-progress").textContent = progressText;
    
    adminSection.style.display = "block";
}

function toggleAdminSection() {

    const adminSection = document.getElementById("admin-section");
    adminSection.style.display = adminSection.style.display === "none" ? "block" : "none";
}

function giveAdminHint() {

    const adminHint = document.getElementById("admin-hint").value.trim().toLowerCase();

    if(adminHint) {

        const hintList = document.getElementById("hints-list");
        const newHint = document.createElement("li");
        newHint.textContent = adminHint;
        hintList.appendChild(newHint);

        document.getElementById("admin-hint").value = "";
        
        alert(`Indice donné : ${adminHint}`);
    }
}
