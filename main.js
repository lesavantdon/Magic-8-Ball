var userName = 'mike jones';
if (userName === 'Jane') {
    console.log(`Hello, ${userName}!`);
} else {
    console.log('Hello!');
}

var userQuestion = 'mirror, mirror on the wall whose the sexiest of them all?';
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);
let eightBall = '';
switch (randomNumber) {
    case 0:
    eightBall = 'anit sahota';
    break;
    case 1:
    eightBall = 'bella hadid';
    break;
    case 2:
    eightBall = 'reply hazy try agian';
    break;
    case 3:
    eightBall = 'cannot predict now';
    break;
    case 4: 
    eightBall = 'my sources say noone';
    break;
    case 5: 
    eightBall = 'signs point to ryan gosling';
    break;
    case 6:
    eightBall = 'the sweet melody you create';
    break;
    case 7: eightBall = 'the chosen one';
    break;
    case 8: 
    eightBall = 'keauna reeves';
    }

    console.log(`the eight ball answered: ${eightBall}`); 
