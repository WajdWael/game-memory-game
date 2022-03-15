// Adding all functions after loading the document
document.addEventListener("DOMContentLoaded", () => {
    // start creating an array carries all the cards "imgs"
    const cardArray = [

        {
            name: "fries",
            img: "img/fries.png"
        },

        {
            name: "cheeseburger",
            img: "img/cheeseburger.png"
        },

        {
            name: "ice-cream",
            img: "img/ice-cream.png"
        },

        {
            name: "pizza",
            img: "img/pizza.png"
        },

        {
            name: "milkshakes",
            img: "img/milkshake.png"
        },

        {
            name: "hotdog",
            img: "img/hotdog.png"
        },

        {
            name: "fries",
            img: "img/fries.png"
        },

        {
            name: "cheeseburger",
            img: "img/cheeseburger.png"
        },

        {
            name: "ice-cream",
            img: "img/ice-cream.png"
        },

        {
            name: "pizza",
            img: "img/pizza.png"
        },

        {
            name: "milkshakes",
            img: "img/milkshake.png"
        },

        {
            name: "hotdog",
            img: "img/hotdog.png"
        },

    ]

    // Random cards
    cardArray.sort(() => 0.5 - Math.random());

    // set the vars
    const gird = document.querySelector('.grid'),
        resultDisplay = document.querySelector("#result");
    let cardsChosen = [],
        cardsChosenId = [],
        cardsWon = [];
    
    // create board card
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement("img")
            card.setAttribute('src', 'img/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            gird.appendChild(card)
        }
    }

    // check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll("img"),
            optionOneId = cardsChosenId[0],
        optionTowId = cardsChosenId[1]
        
        if (optionOneId == optionTowId) {
            cards[optionOneId].setAttribute('src', 'img/blank.png')
            cards[optionTowId].setAttribute('src', 'img/blank.png')
            alert('You have clciked the same image!')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute("src", "img/white.png")
            cards[optionTowId].setAttribute("src", "img/white.png")
            cards[optionOneId].removeEventListener("click", flipCard)
            cards[optionTowId].removeEventListener("click", flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/blank.png')
            cards[optionTowId].setAttribute('src', 'img/blank.png')
            alert('sorry, try again!')
        }

        cardsChosen = []
        cardsChosenId = []

        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = "Congratulations! You found them all!";
        }
    }

    // create flip card function
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard();
})