/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasCompass = false;
let playerhasCompass = hasCompass;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  console.log("Upon exiting the mountains, you see a troll");
  const troll = readline.question("Do you 'fight' or 'run'?").toLowerCase();
  if (troll === "fight" &&hasSword){
    console.log("You slay the troll and earn 100 points!");
    } else if (troll==="fight" && !hasSword) {
    console.log("You have no weapon: GAME OVER");
   }
    else if (troll==="run") {
    console.log("You've gotten away safely.. for now");
    }
}
else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
  secret = readline.question("Do you want to 'explore' or 'rest'?").toLowerCase();
  if (secret === "rest"){
    console.log("You fall asleep");
  }
  else if (secret === "explore") {
    console.log("You meet a wizard, he offers you a Compass.");
    wizard = readline.question("Do you accept?").toLowerCase();
    if (wizard === "yes" && !playerhasCompass){
      playerhasCompass = true;
      console.log("You have gained a compass and 100 points!");
    }
    else if (wizard === "no" && !playerhasCompass) {
      console.log("Too bad, he SMITES you!");
    }
    else {
      console.log("Still thinking...");
    }
  
  }

 else {
  console.log("You get lost and wander aimlessly.");
 }
} 