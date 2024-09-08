// Coding Challenge #2

// Your tasks:

// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//      Odd of victory Bayern Munich: 1.33
//      Odd of draw: 3.25
//      Odd of victory Borrussia Dortmund: 6.5
//  Get the team names directly from the game object, don't hardcode them (except for "draw").
//  Hint: Note how the odds and the game objects have the same property names �

// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
//  {
//      Gnarby: 1,
//      Hummels: 1,
//      Lewandowski: 2
//  }


// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
    };

    game.scored.forEach((element, index) => {
        console.log(`Goal ${index + 1} : ${element}`);
    });

    // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
    let sum = 0;

    Object.values(game.odds).forEach((odd) => {
        sum += odd;
    })

    console.log(`\nAverage odd: ${sum / Object.values(game.odds).length}`);


// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//      Odd of victory Bayern Munich: 1.33
//      Odd of draw: 3.25
//      Odd of victory Borrussia Dortmund: 6.5
//  Get the team names directly from the game object, don't hardcode them (except for "draw").
//  Hint: Note how the odds and the game objects have the same property names 

const {team1, odds, team2} = game;

console.log(`\nOdd of victory ${game.team1}: ${odds.team1}`);
console.log(`Odd of draw  ${odds.x}`);
console.log(`Odd of victory ${game.team2}: ${odds.team2}`);

// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. 
// In this game, it will look like this:
//  {
//      Gnarby: 1,
//      Hummels: 1,
//      Lewandowski: 2
//  }

const scorers = {};
const count = 0;
game.scored.forEach((player) => {
   scorers[player] = (scorers[player] || 0) + 1;
})
console.log(scorers);


