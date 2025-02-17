/*******************************************

        Step 1

********************************************/

// Characters
let mrGreen = {
    first_name: "Jacob",
    last_name: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
};

let drOrchid = {
    first_name: "Doctor",
    last_name: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation: "Scientist"
}

let profPlum = {
    first_name: "Victor",
    last_name: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
}

let missScarlet = {
    first_name: "Kasandra",
    last_name: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor"
}

let mrsPeacock = {

    first_name: "Eleanor",
    last_name: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"

}

let mrMustard = {

    first_name: "Jack",
    last_name: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player"

}

// Weapons
let rope = {
  name: "rope",
  weight: 10
}

let knife = {
    name: "knife",
    weight: 8
}

let candlestick = {
    name: "candlestick",
    weight: 2
}

let dumbbell = {
    name: "dumbbell",
    weight: 30
}
let poison = {
    name: "poison",
    weight: 2
}
let axe = {
    name: "axe",
    weight: 15
}
let bat = {
    name: "bat",
    weight: 13
}
let trophy = {
    name: "trophy",
    weight: 25
}
let pistol = {
    name: "pistol",
    weight: 20
}

// // Rooms
let diningRoom = {
    name: "diningRoom"
}
let Conservatory = {
    name: "Conservatory"
}
let Kitchen = {
    name: "Kitchen"
}
let Study = {
    name: "Study"
}
let Library = {
    name: "Library"
}
let BilliardRoom = {
    name: "BilliardRoom"
}
let Lounge = {
    name: "Lounge"
}
let Ballroom = {
    name: "Lounge"
}
let Hall = {
    name: "Hall"
}
let Spa = {
    name: "Spa"
}
let LivingRoom = {
    name: "LivingRoom"
}
let Observatory = {
    name: "Observatory"
}
let Theater = {
    name: "Theater"
}
let GuestHouse = {
    name: "GuestHouse"
}
let Patio = {
    name: "Patio"
}


// Characters Collection
var charactersArray = [
    mrGreen,
    drOrchid,
    profPlum,
    missScarlet,
    mrsPeacock,
    mrMustard
];

//Rooms Array
var roomsArray = [
    diningRoom,
    Conservatory,
    Kitchen,
    Study,
    Library,
    BilliardRoom,
    Lounge,
    Ballroom,
    Hall,
    Spa,
    LivingRoom,
    Observatory,
    Theater,
    GuestHouse,
    Patio
];

// Weapons Collection
var weaponsArray = [
    rope,
    knife,
    candlestick,
    dumbbell,
    poison,
    axe,
    bat,
    trophy,
    pistol
];

/*******************************************

        Step 2 

********************************************/

//Selects a random card (index) from a deck (array)
function randomSelector(aDeck) {
    // get size of deck so we can determine what our range for our random number should be (Ex/ 1 - 20)
    let deckSize = aDeck.length;

    // retruns random number between 0 and size of deck array so we can draw from [0] (Ex/10 cards)
    let randomIndex = Math.floor((Math.random() * deckSize))

    // Retrieve a card from the randomly chosen index
    let card = aDeck[randomIndex];

    return card;

}

function pickMistery(characterDeck, weaponsDeck, roomDeck) {

    // // Make sure each entered deck is unique
    // if (JSON.stringify(deck1) === JSON.stringify(deck2) || JSON.stringify(deck1) === JSON.stringify(deck3)) {
    //     return console.log("Can't have two of the same decks, please check inputs");

    // }
    // else if (JSON.stringify(deck2) === JSON.stringify(deck3)) {
    //     return console.log("Can't have two of the same decks, please check inputs");
    // }

    /// array to hold the cards from each deck
    let misteryEnvelope = [];

    let randomCharacter = randomSelector(characterDeck);
    misteryEnvelope.push(randomCharacter);

    let randomWeapon = randomSelector(weaponsDeck);
    misteryEnvelope.push(randomWeapon);

    let randomRoom = randomSelector(roomDeck);
    misteryEnvelope.push(randomRoom);

    return misteryEnvelope;

}

/*******************************************

        Step 3

********************************************/

function revealMistery() {

    let misteryEnvelope = pickMistery(charactersArray, weaponsArray, roomsArray);


let message = `${misteryEnvelope[0].first_name} ${misteryEnvelope[0].last_name} killed Mr.Boddy using the ${misteryEnvelope[1].name} in the ${misteryEnvelope[2].name} !`

    // console.log(`${misteryEnvelope[0].first_name} ${misteryEnvelope[0].last_name} killed Mr.Boddy using the ${misteryEnvelope[1].name} in the ${misteryEnvelope[2].name} !`);

return message;
}

revealMistery();