#! /usr/bin/env node
// IF ELSE STATEMENT USING ROCK PAPER SCISSORS GAME

let player1: string = "Rock"
let player2:string = "paper"

if (player1 === player2) {
    console.log("its a tie!")
} else if ((player1 === "Rock" && player2 ==="Scissors") ||
(player1 === "Scissors" && player2 === "Paper") ||
 (player1 === "Paper" && player2 === "Rock")) {
    console.log("player 1 wins this match")
 } else {
    console.log("player 2 wins this math sucessfully")
 
 } 
