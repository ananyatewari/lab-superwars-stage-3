const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = []

    // Instead of forloop use Map method
    // Code here
    detailedPlayers = players.map((name, index) => {
        let type
        if (index%2 != 0)
        type = "villain"
        else
        type = "hero"
        
        return{
            name: name,
            strength: getRandomStrength(),
            image: `images/super-${index+1}.png`,
            type: type,
        }
    })
    // console.log("hello from init")
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100)
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = ""

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    let heroandvillains = players.filter((card) => 
        {return card.type == type})
        
    let data = heroandvillains.map((player) => {
        return `<div class="player">
        <img src="${player.image}" alt="">
        <div class="name">${player.name}</div>
        <div class="strength">${player.strength}</div>
        </div>`
    })
    fragment = data.join("")
    console.log(fragment)
    // console.log("hello from build")
    return fragment
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, "hero");
    document.getElementById('villains').innerHTML = buildPlayers(players, "villain")
    // console.log("hello from view")
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}