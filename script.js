
// Questions du quiz
const easyQuestions = [
    {
        question: "Que signifie HTML?",
        options: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hyper Text Markup List", correct: false },
            { text: "Hyper Text Marketing Language", correct: false },
            { text: "High Tech Markup Language", correct: false }
        ],
        hint: "C'est l'acronyme pour le langage de balisage utilisé pour créer des pages web."
    },
    {
        question: "Quelle balise est utilisée pour créer un paragraphe en HTML?",
        options: [
            { text: "<paragraph>", correct: false },
            { text: "<p>", correct: true },
            { text: "<para>", correct: false },
            { text: "<text>", correct: false }
        ],
        hint: "C'est une balise très courte, juste une lettre."
    },
    {
        question: "Quelle balise est utilisée pour insérer une image en HTML?",
        options: [
            { text: "<img>", correct: true },
            { text: "<image>", correct: false },
            { text: "<picture>", correct: false },
            { text: "<photo>", correct: false }
        ],
        hint: "C'est une abréviation du mot 'image'."
    },
    {
        question: "Quelle balise est utilisée pour les titres de niveau 1?",
        options: [
            { text: "<heading>", correct: false },
            { text: "<h1>", correct: true },
            { text: "<title>", correct: false },
            { text: "<header>", correct: false }
        ],
        hint: "C'est une combinaison d'une lettre et d'un chiffre."
    },
    {
        question: "Quel attribut est utilisé pour spécifier l'URL d'un lien?",
        options: [
            { text: "src", correct: false },
            { text: "link", correct: false },
            { text: "href", correct: true },
            { text: "url", correct: false }
        ],
        hint: "C'est une abréviation de 'hypertext reference'."
    }
];

const mediumQuestions = [
    {
        question: "Quelle propriété CSS est utilisée pour changer la couleur de fond?",
        options: [
            { text: "color", correct: false },
            { text: "background-color", correct: true },
            { text: "bgcolor", correct: false },
            { text: "background", correct: false }
        ],
        hint: "Cette propriété contient spécifiquement le mot 'color'."
    },
    {
        question: "Comment définir une bordure en CSS?",
        options: [
            { text: "border: 1px solid black;", correct: true },
            { text: "border-line: 1px solid black;", correct: false },
            { text: "border-style: 1px solid black;", correct: false },
            { text: "border-width: 1px solid black;", correct: false }
        ],
        hint: "La propriété principale est simplement 'border'."
    },
    {
        question: "Quelle balise est utilisée pour créer une liste non ordonnée?",
        options: [
            { text: "<ol>", correct: false },
            { text: "<list>", correct: false },
            { text: "<ul>", correct: true },
            { text: "<unlist>", correct: false }
        ],
        hint: "C'est une abréviation de 'unordered list'."
    },
    {
        question: "Quelle balise HTML5 est utilisée pour définir un pied de page?",
        options: [
            { text: "<bottom>", correct: false },
            { text: "<footer>", correct: true },
            { text: "<end>", correct: false },
            { text: "<section>", correct: false }
        ],
        hint: "C'est littéralement le mot anglais pour 'pied de page'."
    },
    {
        question: "Quelle propriété CSS est utilisée pour créer de l'espace entre les éléments?",
        options: [
            { text: "spacing", correct: false },
            { text: "margin", correct: true },
            { text: "padding", correct: false },
            { text: "border", correct: false }
        ],
        hint: "Cette propriété crée de l'espace à l'extérieur des éléments."
    }
];

const hardQuestions = [
    {
        question: "Quelle méthode JavaScript est utilisée pour sélectionner un élément par son ID?",
        options: [
            { text: "document.query()", correct: false },
            { text: "document.getElement()", correct: false },
            { text: "document.getElementById()", correct: true },
            { text: "document.querySelector('#id')", correct: false }
        ],
        hint: "Cette méthode contient les mots 'get', 'Element' et 'ById'."
    },
    {
        question: "Quelle propriété CSS est utilisée pour créer une disposition flexible?",
        options: [
            { text: "display: flex;", correct: true },
            { text: "position: flexible;", correct: false },
            { text: "display: flexbox;", correct: false },
            { text: "layout: flex;", correct: false }
        ],
        hint: "Il s'agit d'une valeur de la propriété 'display'."
    },
    {
        question: "Quelle est la balise HTML pour intégrer une vidéo?",
        options: [
            { text: "<media>", correct: false },
            { text: "<video>", correct: true },
            { text: "<movie>", correct: false },
            { text: "<play>", correct: false }
        ],
        hint: "C'est le mot exact pour 'vidéo' en anglais."
    },
    {
        question: "Quelle pseudo-classe CSS est utilisée pour sélectionner un élément lorsqu'un utilisateur passe la souris dessus?",
        options: [
            { text: ":over", correct: false },
            { text: ":focus", correct: false },
            { text: ":hover", correct: true },
            { text: ":mouse", correct: false }
        ],
        hint: "C'est un mot qui signifie 'planer' ou 'survoler' en anglais."
    },
    {
        question: "Quelle propriété CSS permet de contrôler l'espacement entre les lettres?",
        options: [
            { text: "text-spacing", correct: false },
            { text: "character-spacing", correct: false },
            { text: "letter-spacing", correct: true },
            { text: "font-spacing", correct: false }
        ],
        hint: "Cette propriété contient littéralement le mot 'letter'."
    }
];

// Initialisation des variables
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let timerInterval;
let timeLeft = 30;
let answeredQuestions = {};
let maxScore = 0;
let difficulty = 'medium'; // Par défaut
let hintsUsed = 0;
let leaderboard = JSON.parse(localStorage.getItem('quizLeaderboard')) || [];
let timePerQuestion = {};

// Éléments DOM
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const optionsContainer = document.getElementById('options-container');
const questionText = document.getElementById('question-text');
const questionNumber = document.getElementById('question-number');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const scoreEl = document.getElementById('score');
const progressBar = document.getElementById('progress-bar');
const nextBtn = document.getElementById('next-btn');
const previousBtn = document.getElementById('previous-btn');
const timerEl = document.getElementById('timer');
const finalScoreEl = document.getElementById('final-score');
const maxScoreEl = document.getElementById('max-score');
const scoreMessageEl = document.getElementById('score-message');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');
const leaderboardList = document.getElementById('leaderboard-list');
const nameModal = document.getElementById('name-modal');
const modalClose = document.getElementById('modal-close');
const nameInput = document.getElementById('name-input');
const saveScoreBtn = document.getElementById('save-score-btn');
const feedbackEl = document.getElementById('feedback');
const hintBtn = document.getElementById('hint-btn');
const hintContainer = document.getElementById('hint-container');
const hintText = document.getElementById('hint-text');
const difficultyIndicator = document.getElementById('difficulty-indicator');
const speedBadge = document.getElementById('speed-badge');
const accuracyBadge = document.getElementById('accuracy-badge');
const knowledgeBadge = document.getElementById('knowledge-badge');
const easyBtn = document.getElementById('easy-btn');
const mediumBtn = document.getElementById('medium-btn');
const hardBtn = document.getElementById('hard-btn');

// Sélection de la difficulté
easyBtn.addEventListener('click', () => {
    difficulty = 'easy';
    easyBtn.style.transform = 'scale(1.1)';
    mediumBtn.style.transform = 'scale(1)';
    hardBtn.style.transform = 'scale(1)';
    timeLeft = 45; // Plus de temps pour les questions faciles
});

mediumBtn.addEventListener('click', () => {
    difficulty = 'medium';
    mediumBtn.style.transform = 'scale(1.1)';
    easyBtn.style.transform = 'scale(1)';
    hardBtn.style.transform = 'scale(1)';
    timeLeft = 30; // Temps standard pour les questions moyennes
});

hardBtn.addEventListener('click', () => {
    difficulty = 'hard';
    hardBtn.style.transform = 'scale(1.1)';
    easyBtn.style.transform = 'scale(1)';
    mediumBtn.style.transform = 'scale(1)';
    timeLeft = 20; // Moins de temps pour les questions difficiles
});

// Démarrer le quiz
startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    
    // Sélectionner les questions selon la difficulté
    switch(difficulty) {
        case 'easy':
            currentQuestions = [...easyQuestions];
            difficultyIndicator.textContent = 'Facile';
            difficultyIndicator.className = 'difficulty-badge easy';
            break;
        case 'hard':
            currentQuestions = [...hardQuestions];
            difficultyIndicator.textContent = 'Difficile';
            difficultyIndicator.className = 'difficulty-badge hard';
            break;
        default:
            currentQuestions = [...mediumQuestions];
            difficultyIndicator.textContent = 'Moyen';
            difficultyIndicator.className = 'difficulty-badge medium';
    }
    
    // Debug: vérifier que les questions sont bien chargées
    console.log("Questions chargées:", currentQuestions);
    
    // Mélanger les questions
    shuffleArray(currentQuestions);
    
    // Initialiser le quiz
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = {};
    hintsUsed = 0;
    timePerQuestion = {};
    maxScore = currentQuestions.length * 10; // 20 points max par question
    
    // Mettre à jour l'interface
    totalQuestionsEl.textContent = currentQuestions.length;
    scoreEl.textContent = score;
    
    // Charger la première question
    loadQuestion();
}

// Charger une question
function loadQuestion() {
    // Réinitialiser l'état
    selectedOption = null;
    nextBtn.disabled = true;
    
    // Activer/désactiver le bouton précédent selon la position
    previousBtn.disabled = currentQuestionIndex === 0;
    
    // Mettre à jour les éléments de l'interface
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    questionNumber.textContent = `Question ${currentQuestionIndex + 1}`;
    questionText.textContent = currentQuestions[currentQuestionIndex].question;
    
    // Mettre à jour la barre de progression
    const progressPercent = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    
    // Générer les options
    generateOptions();
    
    // Réinitialiser le feedback
    feedbackEl.style.display = 'none';
    
    // Réinitialiser l'indice
    hintContainer.style.display = 'none';
    hintBtn.disabled = false;
    hintBtn.style.display = 'block';
    
    // Si la question a déjà été répondue, restaurer l'état
    if (answeredQuestions[currentQuestionIndex] !== undefined) {
        restoreQuestionState();
        nextBtn.disabled = false;
    } else {
        // Sinon, démarrer le minuteur
        resetTimer();
        startTimer();
    }
    
    // Ajouter la classe d'animation
    document.querySelector('.content').classList.remove('fade-in');
    void document.querySelector('.content').offsetWidth; // Force reflow
    document.querySelector('.content').classList.add('fade-in');
}

// Générer les options de réponse - VERSION MODIFIÉE POUR CORRIGER LE PROBLÈME D'AFFICHAGE
// function generateOptions() {
//     optionsContainer.innerHTML = '';
    
//     const currentOptions = currentQuestions[currentQuestionIndex].options;
//     const optionLabels = ['A', 'B', 'C', 'D'];
    
//     // Vérifier si les options sont chargées correctement
//     console.log("Options de la question:", currentOptions);
    
//     currentOptions.forEach((option, index) => {
//         const optionElement = document.createElement('div');
//         optionElement.className = 'option';
        
//         // Structure simplifiée pour garantir l'affichage du texte
//         optionElement.innerHTML = `
//             <div class="option-prefix">${optionLabels[index]}</div>
//             <strong style="margin-left: 15px; flex: 1; display: block;">${option.text}</strong>
//         `;
        
//         optionElement.dataset.index = index;
        
//         // Debug: vérifier l'option créée
//         console.log(`Option ${optionLabels[index]} créée:`, option.text);
        
//         optionElement.addEventListener('click', () => selectOption(optionElement, index));
//         optionsContainer.appendChild(optionElement);
//     });
// }

function generateOptions() {
    optionsContainer.innerHTML = '';
    
    const currentOptions = currentQuestions[currentQuestionIndex].options;
    const optionLabels = ['A', 'B', 'C', 'D'];
    
    // Vérifier si les options sont chargées correctement
    console.log("Options de la question:", currentOptions);
    
    currentOptions.forEach((option, index) => {
        // Créer un élément div pour l'option avec une classe
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        
        // Créer l'élément pour le préfixe (A, B, C, D)
        const prefixElement = document.createElement('div');
        prefixElement.className = 'option-prefix';
        prefixElement.textContent = optionLabels[index];
        
        // Créer l'élément pour le texte de l'option
        const textElement = document.createElement('div');
        textElement.style.flex = '1';
        textElement.style.marginLeft = '15px';
        textElement.style.display = 'block';
        textElement.style.fontWeight = 'bold';
        textElement.textContent = option.text;
        
        // Ajouter les éléments au conteneur d'option
        optionElement.appendChild(prefixElement);
        optionElement.appendChild(textElement);
        
        // Ajouter l'attribut data-index
        optionElement.dataset.index = index;
        
        // Debug: vérifier l'option créée
        console.log(`Option ${optionLabels[index]} créée:`, option.text);
        
        // Ajouter l'écouteur d'événements
        optionElement.addEventListener('click', () => selectOption(optionElement, index));
        
        // Ajouter l'option au conteneur
        optionsContainer.appendChild(optionElement);
    });
}
// Sélectionner une option
function selectOption(optionElement, index) {
    // Si la question a déjà été répondue, ne rien faire
    if (answeredQuestions[currentQuestionIndex] !== undefined) return;
    
    // Désélectionner toutes les options
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Sélectionner l'option cliquée
    optionElement.classList.add('selected');
    selectedOption = index;
    
    // Activer le bouton suivant
    nextBtn.disabled = false;
}

// Vérifier la réponse
// function checkAnswer() {
//     if (selectedOption === null) return;
    
//     // Arrêter le minuteur
//     clearInterval(timerInterval);
    
//     const isCorrect = currentQuestions[currentQuestionIndex].options[selectedOption].correct;
//     const timeTaken = 30 - timeLeft; // Temps pris pour répondre
    
//     // Enregistrer le temps pris
//     timePerQuestion[currentQuestionIndex] = timeTaken;
    
//     // Calculer les points (plus rapide = plus de points)
//     let questionScore = 0;
//     if (isCorrect) {
//         // Base: 10 points pour une réponse correcte + jusqu'à 10 points de bonus pour la rapidité
//         const timeBonus = Math.max(0, 10 - Math.floor(timeTaken / 3));
//         // Pénalité pour l'utilisation d'indices
//         const hintPenalty = hintBtn.disabled ? 5 : 0;
//         questionScore = 10 + timeBonus - hintPenalty;
//     }
    
//     // Mettre à jour le score
//     score += questionScore;
//     scoreEl.textContent = score;
    
//     // Mettre à jour l'état de la question
//     answeredQuestions[currentQuestionIndex] = {
//         selectedOption: selectedOption,
//         isCorrect: isCorrect,
//         score: questionScore
//     };
    
//     // Montrer le feedback
//     feedbackEl.style.display = 'block';
//     feedbackEl.textContent = isCorrect 
//         ? `Correct! +${questionScore} points` 
//         : `Incorrect! La bonne réponse était: ${getCorrectAnswer()}`;
//     feedbackEl.className = isCorrect ? 'feedback correct' : 'feedback wrong';
    
//     // Mettre à jour l'apparence des options
//     updateOptionsAppearance();
    
//     // Désactiver le bouton d'indice
//     hintBtn.style.display = 'none';
// }

// وظيفة التحقق من الإجابة - النسخة المعدلة
function checkAnswer() {
    if (selectedOption === null) return;
    
    // إيقاف المؤقت
    clearInterval(timerInterval);
    
    const isCorrect = currentQuestions[currentQuestionIndex].options[selectedOption].correct;
    
    // حساب النقاط الجديد: 10 نقاط لكل إجابة صحيحة فقط، بدون مراعاة الوقت
    let questionScore = 0;
    if (isCorrect) {
        // 10 نقاط ثابتة لكل إجابة صحيحة
        questionScore = 10;
    }
    
    // تحديث النقاط الإجمالية
    score += questionScore;
    scoreEl.textContent = score;
    
    // تحديث حالة السؤال
    answeredQuestions[currentQuestionIndex] = {
        selectedOption: selectedOption,
        isCorrect: isCorrect,
        score: questionScore
    };
    
    // إظهار التغذية الراجعة
    feedbackEl.style.display = 'block';
    feedbackEl.textContent = isCorrect 
        ? `صحيح! +10 نقاط` 
        : `غير صحيح! الإجابة الصحيحة هي: ${getCorrectAnswer()}`;
    feedbackEl.className = isCorrect ? 'feedback correct' : 'feedback wrong';
    
    // تحديث مظهر الخيارات
    updateOptionsAppearance();
    
    // تعطيل زر المساعدة
    hintBtn.style.display = 'none';
}

// Obtenir la réponse correcte
function getCorrectAnswer() {
    const options = currentQuestions[currentQuestionIndex].options;
    for (let i = 0; i < options.length; i++) {
        if (options[i].correct) {
            return options[i].text;
        }
    }
    return "";
}

// Mettre à jour l'apparence des options après vérification
function updateOptionsAppearance() {
    const options = document.querySelectorAll('.option');
    
    options.forEach((option, index) => {
        const isCorrect = currentQuestions[currentQuestionIndex].options[index].correct;
        
        if (index === selectedOption) {
            option.classList.add(isCorrect ? 'correct' : 'wrong');
        } else if (isCorrect) {
            option.classList.add('correct');
        }
    });
}

// Restaurer l'état d'une question déjà répondue
function restoreQuestionState() {
    const questionState = answeredQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    
    // Restaurer l'option sélectionnée
    selectedOption = questionState.selectedOption;
    options[selectedOption].classList.add('selected');
    
    // Mettre à jour l'apparence des options
    updateOptionsAppearance();
    
    // Afficher le feedback
    feedbackEl.style.display = 'block';
    feedbackEl.textContent = questionState.isCorrect 
        ? `Correct! +${questionState.score} points` 
        : `Incorrect! La bonne réponse était: ${getCorrectAnswer()}`;
    feedbackEl.className = questionState.isCorrect ? 'feedback correct' : 'feedback wrong';
    
    // Désactiver le bouton d'indice
    hintBtn.style.display = 'none';
}

// Passer à la question suivante
function nextQuestion() {
    // Si la question actuelle n'a pas été répondue, vérifier la réponse
    if (answeredQuestions[currentQuestionIndex] === undefined) {
        checkAnswer();
    }
    
    // Passer à la question suivante
    currentQuestionIndex++;
    
    // Si c'est la dernière question, terminer le quiz
    if (currentQuestionIndex >= currentQuestions.length) {
        endQuiz();
        return;
    }
    
    // Charger la question suivante
    loadQuestion();
}

// Revenir à la question précédente
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        // Arrêter le minuteur
        clearInterval(timerInterval);
        
        // Revenir à la question précédente
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Terminer le quiz
function endQuiz() {
    quizScreen.style.display = 'none';
    resultsScreen.style.display = 'block';
    
    // Mettre à jour le score final
    finalScoreEl.textContent = score;
    maxScoreEl.textContent = maxScore;
    
    // Calculer les statistiques
    const correctAnswers = Object.values(answeredQuestions).filter(a => a.isCorrect).length;
    const accuracy = (correctAnswers / currentQuestions.length) * 100;
    const averageTime = Object.values(timePerQuestion).reduce((sum, time) => sum + time, 0) / currentQuestions.length;
    
    // Attribuer des badges
    // Badge de rapidité
    if (averageTime < 10) {
        speedBadge.textContent = "🥇";
    } else if (averageTime < 15) {
        speedBadge.textContent = "🥈";
    } else {
        speedBadge.textContent = "🥉";
    }
    
    // Badge de précision
    if (accuracy >= 90) {
        accuracyBadge.textContent = "🥇";
    } else if (accuracy >= 70) {
        accuracyBadge.textContent = "🥈";
    } else {
        accuracyBadge.textContent = "🥉";
    }
    
    // Badge de connaissances
    const scorePercentage = (score / maxScore) * 100;
    if (scorePercentage >= 85) {
        knowledgeBadge.textContent = "🥇";
        scoreMessageEl.textContent = "Excellent! Vous maîtrisez très bien le HTML.";
    } else if (scorePercentage >= 65) {
        knowledgeBadge.textContent = "🥈";
        scoreMessageEl.textContent = "Bien joué! Vous avez de bonnes connaissances en HTML.";
    } else {
        knowledgeBadge.textContent = "🥉";
        scoreMessageEl.textContent = "Pas mal! Continuez à pratiquer pour améliorer vos connaissances en HTML.";
    }
    
    // Animer les confettis si le score est bon
    if (scorePercentage >= 70) {
        createConfetti();
    }
    
    // Mettre à jour le classement
    updateLeaderboard();
    
    // Ouvrir la modale pour enregistrer le score
    setTimeout(() => {
        nameModal.style.display = 'flex';
    }, 1500);
}

// Mettre à jour le classement
function updateLeaderboard() {
    leaderboardList.innerHTML = '';
    
    // Trier le classement par score
    const sortedLeaderboard = [...leaderboard].sort((a, b) => b.score - a.score);
    
    // Limiter à 5 meilleurs scores
    const topScores = sortedLeaderboard.slice(0, 5);
    
    // Afficher les scores
    topScores.forEach((entry, index) => {
        const leaderboardItem = document.createElement('div');
        leaderboardItem.className = 'leaderboard-item';
        leaderboardItem.innerHTML = `
            <div class="leaderboard-rank">${index + 1}</div>
            <div class="leaderboard-name">${entry.name}</div>
            <div class="leaderboard-score">${entry.score}pts</div>
        `;
        leaderboardList.appendChild(leaderboardItem);
    });
}

// Enregistrer le score dans le classement
function saveScore() {
    const name = nameInput.value.trim();
    if (name) {
        const newScore = {
            name: name,
            score: score,
            date: new Date().toISOString(),
            difficulty: difficulty
        };
        
        leaderboard.push(newScore);
        localStorage.setItem('quizLeaderboard', JSON.stringify(leaderboard));
        
        updateLeaderboard();
        nameModal.style.display = 'none';
    }
}

// Partager le score
function shareScore() {
    const text = `J'ai obtenu ${score}/${maxScore} points au Quiz HTML! Pouvez-vous faire mieux? #HTMLQuiz #WebDev`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Mon score au Quiz HTML',
            text: text,
            url: window.location.href
        }).catch(error => {
            console.error('Erreur lors du partage:', error);
            fallbackShare();
        });
    } else {
        fallbackShare();
    }
    
    function fallbackShare() {
        // Copier le texte dans le presse-papier
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        
        alert('Texte copié dans le presse-papier: ' + text);
    }
}

// Démarrer le minuteur
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        
        // Ajouter un avertissement visuel quand il reste peu de temps
        if (timeLeft <= 5) {
            timerEl.classList.add('timer-warning');
        }
        
        // Si le temps est écoulé
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            
            // Si aucune option n'est sélectionnée, en sélectionner une au hasard
            if (selectedOption === null) {
                const randomOption = Math.floor(Math.random() * 4);
                const options = document.querySelectorAll('.option');
                options[randomOption].classList.add('selected');
                selectedOption = randomOption;
            }
            
            checkAnswer();
            nextBtn.disabled = false;
        }
    }, 1000);
}

// Réinitialiser le minuteur
function resetTimer() {
    clearInterval(timerInterval);
    switch(difficulty) {
        case 'easy':
            timeLeft = 45;
            break;
        case 'hard':
            timeLeft = 20;
            break;
        default:
            timeLeft = 30;
    }
    timerEl.textContent = timeLeft;
    timerEl.classList.remove('timer-warning');
}

// Afficher un indice
function showHint() {
    hintContainer.style.display = 'block';
    hintText.textContent = "Indice: " + currentQuestions[currentQuestionIndex].hint;
    hintBtn.disabled = true;
    hintsUsed++;
}

// Créer des confettis
function createConfetti() {
    const confettiCount = 150;
    const colors = ['#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d', '#43aa8b', '#577590'];
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.body.appendChild(confetti);
            
            // Supprimer les confettis après l'animation
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 20);
    }
}

// Fonction pour mélanger un tableau
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Event listeners
nextBtn.addEventListener('click', nextQuestion);
previousBtn.addEventListener('click', previousQuestion);
restartBtn.addEventListener('click', () => {
    resultsScreen.style.display = 'none';
    startScreen.style.display = 'block';
});
shareBtn.addEventListener('click', shareScore);
modalClose.addEventListener('click', () => {
    nameModal.style.display = 'none';
});
saveScoreBtn.addEventListener('click', saveScore);
hintBtn.addEventListener('click', showHint);

// Fermer la modale si on clique en dehors
window.addEventListener('click', (e) => {
    if (e.target === nameModal) {
        nameModal.style.display = 'none';
    }
});

// Initialiser le classement au chargement
updateLeaderboard();


// Stocker les réponses de l'utilisateur pour chaque partie
let quizHistoryMap = {};

// Mettre à jour l'historique après chaque quiz
function saveQuizHistory(playerName) {
    // Récupérer les détails des questions et réponses
    const quizDetails = [];
    
    currentQuestions.forEach((question, index) => {
        const userAnswer = answeredQuestions[index];
        
        // Trouver l'option choisie et la bonne réponse
        let userChoice = null;
        let correctAnswer = null;
        
        if (userAnswer) {
            userChoice = question.options[userAnswer.selectedOption];
        }
        
        // Trouver la bonne réponse
        question.options.forEach(option => {
            if (option.correct) {
                correctAnswer = option;
            }
        });
        
        // Ajouter à l'historique
        quizDetails.push({
            question: question.question,
            options: question.options,
            userAnswer: userChoice,
            correctAnswer: correctAnswer,
            isCorrect: userAnswer ? userAnswer.isCorrect : false,
            score: userAnswer ? userAnswer.score : 0
        });
    });
    
    // Statistiques globales
    const correctAnswers = Object.values(answeredQuestions).filter(a => a.isCorrect).length;
    const accuracy = (correctAnswers / currentQuestions.length) * 100;
    const averageTime = Object.values(timePerQuestion).reduce((sum, time) => sum + time, 0) / currentQuestions.length;
    
    // Créer l'objet d'historique
    const historyEntry = {
        playerName: playerName,
        date: new Date().toISOString(),
        difficulty: difficulty,
        score: score,
        maxScore: maxScore,
        correctAnswers: correctAnswers,
        totalQuestions: currentQuestions.length,
        accuracy: accuracy,
        averageTime: averageTime,
        details: quizDetails
    };
    
    // Stocker dans la map
    quizHistoryMap[playerName + '-' + new Date().getTime()] = historyEntry;
    
    // Sauvegarder dans le localStorage
    try {
        localStorage.setItem('quizHistoryMap', JSON.stringify(quizHistoryMap));
    } catch (e) {
        console.error("Erreur lors de la sauvegarde de l'historique:", e);
    }
}

// Charger l'historique au démarrage
// function loadQuizHistory() {
//     try {
//         const savedHistory = localStorage.getItem('quizHistoryMap');
//         if (savedHistory) {
//             quizHistoryMap = JSON.parse(savedHistory);
//         }
//     } catch (e) {
//         console.error("Erreur lors du chargement de l'historique:", e);
//         quizHistoryMap = {};
//     }
// }

function loadQuizHistory() {
    // إفراغ التاريخ من التخزين المحلي
    localStorage.removeItem('quizHistoryMap');
    quizHistoryMap = {};
    
    // إفراغ الترتيب أيضًا إذا كنت ترغب في ذلك
    localStorage.removeItem('quizLeaderboard');
    leaderboard = [];
}

// Afficher le récapitulatif pour un joueur
function showQuizReview(playerName) {
    // Chercher l'historique du joueur
    let playerHistory = null;
    
    // Parcourir les entrées pour trouver celle du joueur
    for (const key in quizHistoryMap) {
        if (quizHistoryMap[key].playerName === playerName) {
            playerHistory = quizHistoryMap[key];
            break;
        }
    }
    
    if (!playerHistory) {
        alert("Aucun historique disponible pour ce joueur.");
        return;
    }
    
    // Mettre à jour les informations du joueur
    document.getElementById('review-player-info').innerHTML = `
        <p>Joueur: <strong>${playerHistory.playerName}</strong> | 
        Difficulté: <strong>${playerHistory.difficulty}</strong> | 
        Date: <strong>${new Date(playerHistory.date).toLocaleString()}</strong></p>
    `;
    
    // Mettre à jour le résumé
    document.getElementById('review-score').textContent = `${playerHistory.score}/${playerHistory.maxScore}`;
    document.getElementById('review-correct').textContent = `${playerHistory.correctAnswers}/${playerHistory.totalQuestions}`;
    document.getElementById('review-time').textContent = `${Math.round(playerHistory.averageTime)}s`;
    
    // Générer la liste des questions
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
    
    playerHistory.details.forEach((detail, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        
        reviewItem.innerHTML = `
            <div class="review-question">${index + 1}. ${detail.question}</div>
            <div class="review-options"></div>
        `;
        
        const optionsContainer = reviewItem.querySelector('.review-options');
        
        // Ajouter les options
        detail.options.forEach((option, optIndex) => {
            const optionElement = document.createElement('div');
            
            // Déterminer la classe à appliquer
            let optionClass = 'review-option';
            
            if (detail.userAnswer && detail.userAnswer.text === option.text) {
                optionClass += detail.isCorrect ? ' review-correct-answer' : ' review-user-answer';
            } else if (option.correct) {
                optionClass += ' review-correct-answer';
            }
            
            optionElement.className = optionClass;
            optionElement.innerHTML = `
                <span>${String.fromCharCode(65 + optIndex)}.</span>
                <span class="review-option-text">${option.text}</span>
            `;
            
            optionsContainer.appendChild(optionElement);
        });
        
        // Ajouter l'élément à la liste
        reviewList.appendChild(reviewItem);
    });
    
    // Afficher la modale
    document.getElementById('review-modal').style.display = 'flex';
}

// Modifier la fonction saveScore pour sauvegarder l'historique
function saveScore() {
    const name = nameInput.value.trim();
    if (name) {
        const newScore = {
            name: name,
            score: score,
            date: new Date().toISOString(),
            difficulty: difficulty
        };
        
        leaderboard.push(newScore);
        localStorage.setItem('quizLeaderboard', JSON.stringify(leaderboard));
        
        // Sauvegarder l'historique des questions et réponses
        saveQuizHistory(name);
        
        updateLeaderboard();
        nameModal.style.display = 'none';
    }
}

// Modifier la fonction updateLeaderboard pour ajouter l'interactivité
function updateLeaderboard() {
    leaderboardList.innerHTML = '';
    
    // Trier le classement par score
    const sortedLeaderboard = [...leaderboard].sort((a, b) => b.score - a.score);
    
    // Limiter à 5 meilleurs scores
    const topScores = sortedLeaderboard.slice(0, 5);
    
    // Afficher les scores
    topScores.forEach((entry, index) => {
        const leaderboardItem = document.createElement('div');
        leaderboardItem.className = 'leaderboard-item';
        leaderboardItem.innerHTML = `
            <div class="leaderboard-rank">${index + 1}</div>
            <div class="leaderboard-name" style="cursor: pointer;">${entry.name}</div>
            <div class="leaderboard-score">${entry.score}pts</div>
        `;
        
        // Ajouter l'événement de clic pour afficher le récapitulatif
        const nameElement = leaderboardItem.querySelector('.leaderboard-name');
        nameElement.addEventListener('click', () => {
            showQuizReview(entry.name);
        });
        
        leaderboardList.appendChild(leaderboardItem);
    });
}

// Event listeners pour la modale de récapitulatif
document.getElementById('review-close').addEventListener('click', () => {
    document.getElementById('review-modal').style.display = 'none';
});

document.getElementById('review-close-btn').addEventListener('click', () => {
    document.getElementById('review-modal').style.display = 'none';
});

// Fermer la modale si on clique en dehors
window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('review-modal')) {
        document.getElementById('review-modal').style.display = 'none';
    }
});

// Charger l'historique au démarrage
loadQuizHistory();
