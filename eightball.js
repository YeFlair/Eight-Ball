let userName = "Diego"; 

userName ? console.log(`Hello ${userName}\n`) 
  : console.log("Hello!")

let userQuestion = "Will I Get The Apartment?"
console.log(`${userName}:\n${userQuestion}`)

let randomNumber = Math.floor(Math.random() * 8)

let eightBall = ""

switch(randomNumber){
  case 1:
    eightBall = "It is certain"
    break;
  case 2:
    eightBall = "It is decidedly so"
    break; 
  case 3: 
    eightBall = "Reply hazy try again"
    break; 
  case 4: 
    eightBall = "Cannon predict now"
    break; 
  case 5: 
    eightBall = "Do not count on it"
    break; 
  case 6:
    eightBall = "My sources say no"
    break;
  case 7: 
    eightBall = "Outlook not so good"
    break; 
  case 8: 
    eightBall = "Signs point to yes"
}

console.log(`8-Ball Answer: ${eightBall}`)