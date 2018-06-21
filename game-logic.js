let playerOneMoveOneType;
console.log(`>>>>> the value of playerOneMoveOneType is ${playerOneMoveOneType}`);
let playerOneMoveTwoType;
console.log(`>>>>> the value of playerOneMoveTwoType is ${playerOneMoveTwoType}`);
let playerOneMoveThreeType;
console.log(`>>>>> the value of playerOneMoveThreeType is ${playerOneMoveThreeType}`);

let playerTwoMoveOneType;
console.log(`>>>>> the value of playerTwoMoveOneType is ${playerTwoMoveOneType}`);
let playerTwoMoveTwoType;
console.log(`>>>>> the value of playerTwoMoveTwoType is ${playerTwoMoveTwoType}`);
let playerTwoMoveThreeType;
console.log(`>>>>> the value of playerTwoMoveThreeType is ${playerTwoMoveThreeType}`);

let playerOneMoveOneValue;
console.log(`>>>>> the value of playerOneMoveOneValue is ${playerOneMoveOneValue}`);
let playerOneMoveTwoValue;
console.log(`>>>>> the value of playerOneMoveTwoValue is ${playerOneMoveTwoValue}`);
let playerOneMoveThreeValue;
console.log(`>>>>> the value of playerOneMoveThreeValue is ${playerOneMoveThreeValue}`);

let playerTwoMoveOneValue;
console.log(`>>>>> the value of playerTwoMoveOneValue is ${playerTwoMoveOneValue}`);
let playerTwoMoveTwoValue;
console.log(`>>>>> the value of playerTwoMoveTwoValue is ${playerTwoMoveTwoValue}`);
let playerTwoMoveThreeValue;
console.log(`>>>>> the value of playerTwoMoveThreeValue is ${playerTwoMoveThreeValue}`);

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const P1 = 'Player One';
const P2 = 'Player Two';
const TIE = 'Tie'

function setPlayerMoves(player, m1t, m1v, m2t, m2v, m3t, m3v) {
  if (!m1t || !m2t || !m3t || !m1v || !m2v || !m3v) {
    return;
  }
  if (!typesValid(m1t, m2t, m3t)) {
    return;
  }
  if (!valueValid(m1v, m2v, m3v)) {
    return;
  }
  switch (player) {
    case P1:
      playerOneMoveOneType = m1t;
      playerOneMoveOneValue = m1v;
      playerOneMoveTwoType = m2t;
      playerOneMoveTwoValue = m2v;
      playerOneMoveThreeType = m3t;
      playerOneMoveThreeValue = m3t;
      break;

    case P2:
      playerTwoMoveOneType = m1t;
      playerTwoMoveOneValue = m1v;
      playerTwoMoveTwoType = m2t;
      playerTwoMoveTwoValue = m2v;
      playerTwoMoveThreeType = m3t;
      playerTwoMoveThreeValue = m3t;
      break;

    default:
      return;
  }
};

const typesValid = (m1t, m2t, m3t) => typeValid(m1t) && typeValid(m2t) && typeValid(m3t);

const typeValid = (type) => type === ROCK || type === PAPER || type === SCISSORS;

const valueValid = (m1v, m2v, m3v) => m1v + m2v + m3v <= 99 && m1v >= 1 && m2v >= 1 && m3v >= 1;

const sameType = (t1, t2) => t1 === t2;

const compareValues = (p1v, p2v) => {
  if(p1v > p2v) {
    return P1;
  } else if(p1v < p2v) {
    return P2;
  } else {
    return TIE;
  }
};

function getRoundWinner(roundNumber) {
  switch (roundNumber) {
    case '1':
      if(sameType(playerOneMoveOneType, playerTwoMoveOneType)) {
        compareValues(playerOneMoveOneValue, playerTwoMoveOneValue);
      } else {
        switch (playerOneMoveOneType) {
          case ROCK:
            if(playerTwoMoveOneType === SCISSORS) {
              return P1;
            } else if (playerTwoMoveOneType === PAPER) {
              return P2;
            }
          case PAPER:
            if(playerTwoMoveOneType === SCISSORS) {
              return P2;
            } else if (playerTwoMoveOneType === ROCK) {
              return P1;
            }
          case SCISSORS:
            if(playerTwoMoveOneType === ROCK) {
              return P2;
            } else if(playerTwoMoveOneType === PAPER) {
              return P1;
            }
          }
        }
    case '2':
      if(playerOneMoveTwoType === playerTwoMoveTwoType) {
        compareValues(playerOneMoveTwoValue, playerTwoMoveTwoValue);
      } else {
        switch (playerOneMoveTwoType) {
          case ROCK:
            if(playerTwoMoveTwoType === SCISSORS) {
              return P1;
            } else if (playerTwoMoveTwoType === PAPER) {
              return P2;
            }
          case PAPER:
            if(playerTwoMoveTwoType === SCISSORS) {
              return P2;
            } else if (playerTwoMoveTwoType === ROCK) {
              return P1;
            }
          case SCISSORS:
            if(playerTwoMoveTwoType === ROCK) {
              return P2;
            } else if(playerTwoMoveTwoType === PAPER) {
              return P1;
            }
        }
      }
    case '3':
      if(playerOneMoveThreeType === playerTwoMoveThreeType) {
        compareValues(playerOneMoveThreeValue, playerTwoMoveThreeValue);
      } else {
        switch (playerOneMoveThreeType) {
          case ROCK:
            if(playerTwoMoveThreeType === SCISSORS) {
              return P1;
            } else if (playerTwoMoveThreeType === PAPER) {
              return P2;
            }
          case PAPER:
            if(playerTwoMoveThreeType === SCISSORS) {
              return P2;
            } else if (playerTwoMoveThreeType === ROCK) {
              return P1;
            }
          case SCISSORS:
            if(playerTwoMoveThreeType === ROCK) {
              return P2;
            } else if(playerTwoMoveThreeType === PAPER) {
              return P1;
            }
          }
        }
      }
      console.log(`>>>>> the value of playerOneMoveOneType is ${playerOneMoveOneType}`);
      console.log(`>>>>> the value of playerOneMoveTwoType is ${playerOneMoveTwoType}`);
      console.log(`>>>>> the value of playerOneMoveThreeType is ${playerOneMoveThreeType}`);

      console.log(`>>>>> the value of playerTwoMoveOneType is ${playerTwoMoveOneType}`);
      console.log(`>>>>> the value of playerTwoMoveTwoType is ${playerTwoMoveTwoType}`);
      console.log(`>>>>> the value of playerTwoMoveThreeType is ${playerTwoMoveThreeType}`);

      console.log(`>>>>> the value of playerOneMoveOneValue is ${playerOneMoveOneValue}`);
      console.log(`>>>>> the value of playerOneMoveTwoValue is ${playerOneMoveTwoValue}`);
      console.log(`>>>>> the value of playerOneMoveThreeValue is ${playerOneMoveThreeValue}`);

      console.log(`>>>>> the value of playerTwoMoveOneValue is ${playerTwoMoveOneValue}`);
      console.log(`>>>>> the value of playerTwoMoveTwoValue is ${playerTwoMoveTwoValue}`);
      console.log(`>>>>> the value of playerTwoMoveThreeValue is ${playerTwoMoveThreeValue}`);
      console.log(`>>>>> the function compareValues evaluates to ${compareValues()}`);
};
console.log(`>>>>> the function getRoundWinner evaluates to ${getRoundWinner()}`)
