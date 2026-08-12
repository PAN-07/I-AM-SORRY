// ==============================
// APOLOGY CARD DATA
// ==============================

const cards = [

    {
        label: "WHAT I DID",

        title: "I lied to you.",

        text:
        "There isn't a better way for me to put it. " +
        "I wasn't honest with you, and I know that hurt you."
    },

    {
        label: "WHY I DID IT",

        title: "I was scared.",

        text:
        "I was scared of what would happen if I told you the truth. " +
        "But being scared doesn't make lying okay."
    },

    {
        label: "WHAT I SHOULD HAVE DONE",

        title: "I should have told you the truth.",

        text:
        "Even if it was uncomfortable. Even if I was afraid of your reaction. " +
        "You deserved the truth from me."
    },

    {
        label: "WHAT I REALIZED",

        title: "I understand what I actually damaged.",

        text:
        "It wasn't just one conversation. " +
        "It was your ability to trust what I say, and I understand why that hurts."
    },

    {
        label: "NO EXCUSES",

        title: "I'm not going to make excuses.",

        text:
        "I made the decision to lie. That was my mistake, " +
        "and I'm responsible for it. I won't try to put that responsibility anywhere else."
    },

    {
        label: "WHAT I WANT YOU TO KNOW",

        title: "I'm genuinely sorry.",

        text:
        "Not because I got caught. Not because you're upset. " +
        "I'm sorry because I hurt someone who means so much to me."
    }

];


// ==============================
// GET HTML ELEMENTS
// ==============================

const home = document.getElementById("home");

const apology = document.getElementById("apology");

const final = document.getElementById("final");

const explainBtn = document.getElementById("explainBtn");

const nextBtn = document.getElementById("nextBtn");

const restartBtn = document.getElementById("restartBtn");

const card = document.getElementById("card");

const cardLabel = document.getElementById("cardLabel");

const cardTitle = document.getElementById("cardTitle");

const cardText = document.getElementById("cardText");

const cardNumber = document.getElementById("cardNumber");

const progress = document.getElementById("progress");


// ==============================
// CURRENT CARD
// ==============================

let currentCard = 0;


// ==============================
// SHOW APOLOGY SECTION
// ==============================

explainBtn.addEventListener("click", function () {

    home.classList.remove("active");

    apology.classList.add("active");

    currentCard = 0;

    updateCard();

});


// ==============================
// UPDATE CARD
// ==============================

function updateCard() {

    const current = cards[currentCard];

    cardLabel.textContent = current.label;

    cardTitle.textContent = current.title;

    cardText.textContent = current.text;

    cardNumber.textContent = currentCard + 1;

    const percentage =
        ((currentCard + 1) / cards.length) * 100;

    progress.style.width = percentage + "%";

}


// ==============================
// NEXT BUTTON
// ==============================

nextBtn.addEventListener("click", function () {

    // Animate old card leaving

    card.classList.remove("card-enter");

    card.classList.add("card-exit");


    setTimeout(function () {

        currentCard++;


        // If there are still cards

        if (currentCard < cards.length) {

            card.classList.remove("card-exit");

            updateCard();

            card.classList.add("card-enter");

        }

        // Otherwise show final page

        else {

            apology.classList.remove("active");

            final.classList.add("active");

        }

    }, 400);

});


// ==============================
// RESTART
// ==============================

restartBtn.addEventListener("click", function () {

    final.classList.remove("active");

    home.classList.add("active");

    currentCard = 0;

    updateCard();

});


// ==============================
// FLOATING HEARTS
// ==============================

function createHeart() {

    const heartsContainer =
        document.querySelector(".hearts");

    const heart =
        document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = "♡";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (Math.random() * 15 + 10) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 6) + "s";

    heartsContainer.appendChild(heart);


    setTimeout(function () {

        heart.remove();

    }, 11000);

}


// Create a heart every 800ms

setInterval(createHeart, 800);