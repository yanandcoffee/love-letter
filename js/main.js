var LoveLetter = function () {
    var cardFunctions = {
        guardFn: function () {
            console.log("guard function");
        },
        priestFn: function () {
            console.log("priest function");
        },
        baronFn: function () {
            console.log("baron function");
        },
        handmaidFn: function () {
            console.log("handmaid function");
        },
        princeFn: function () {
            console.log("prince function");
        },
        kingFn: function () {
            console.log("king function");
        },
        countessFn: function () {
            console.log("prince function");
        },
        princessFn: function () {
            console.log("prince function");
        }
    };

    var cardTypes = {
        "Guard": {
            point: "1",
            desc: "Name a non-Guard card and choose another player. If that player has that card, he or she is out of the round.",
            fn: cardFunctions.guardFn
        },
            "Priest": {
            point: "2",
            desc: "Look at another player's hand.",
            fn: cardFunctions.priestFn
        },
            "Baron": {
            point: "3",
            desc: "You and another player secretly compare hands. The player with the lower value is out of the round.",
            fn: cardFunctions.baronFn
        },
            "Handmaid": {
            point: "4",
            desc: "Until your next turn, ignore all effects from other players' cards.",
            fn: cardFunctions.handmaidFn
        },
            "Prince": {
            point: "5",
            desc: "Choose any player (including yourself) to discard his or her hand and draw a new card.",
            fn: cardFunctions.princeFn
        },
            "King": {
            point: "6",
            desc: "Trade hands with another player of your choice.",
            fn: cardFunctions.kingFn
        },
            "Countess": {
            point: "7",
            desc: "If you have this card and the King or Prince is in your hand, you must discard this card.",
            fn: cardFunctions.countessFn
        },
            "Princess": {
            point: "8",
            desc: "If you discard this card, you are out of the round.",
            fn: cardFunctions.princessFn
        }
    };

    var cards = ["Guard", "Guard", "Guard", "Guard", "Guard", "Priest", "Priest", "Baron", "Baron", "Handmaid", "Handmaid", "Prince", "Prince", "King", "Countess", "Princess"];

    var shuffledCards, playDeck, secludedCard, myHand;

    var shuffledCardsContainer = document.querySelector('.shuffled-cards'),
        hiddenElement = document.querySelector('#hidden'),
        myHandContainer = document.querySelector('.my-hand');

    function getCardInfo(card) {
        cardTypes[card].fn();

        return cardTypes[card].point + " " + cardTypes[card].desc;
    }

    function renderCardInfo() {
        return;
    }

    function bindButtons() {
        var drawCardButton = document.querySelector('#draw-card'),
            restartGameButton = document.querySelector('#restart-game');

        drawCardButton.addEventListener('click', draw, false);
        restartGameButton.addEventListener('click', init, false);
    }

    function draw() {
        if (!_.isEmpty(playDeck)) {
            drawToHand();
        }

        renderView();
    }

    function drawToHand() {
        console.log(getCardInfo(playDeck[0]));
        myHand.push(playDeck[0]);
        playDeck.shift();
    }

    function renderView() {
        shuffledCardsContainer.innerHTML = playDeck.join(", ");
        hidden.innerHTML = secludedCard;
        myHandContainer.innerHTML = myHand.join(", ");
    }

    function whichCard() {
        for (var i = 0; i < shuffledCards.length; i++) {
            if (shuffledCards[i] !== playDeck[i]) {
                return shuffledCards[i];
            }
        }
    }

    function init() {
        shuffledCards = _.shuffle(cards);
        playDeck = _.initial(shuffledCards);
        myHand = [];

        secludedCard = whichCard();

        renderView();
        bindButtons();
    }

    init();

}();