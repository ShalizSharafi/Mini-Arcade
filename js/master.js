//number guessing selected queries
const navItem = document.querySelectorAll('.navItem')
const numberGuesserBox = document.querySelector('.numberGuesserBox')
const gameBox = document.querySelectorAll('.gameBox')
const inp = document.getElementById('inp')
const playBtn = document.querySelector('.play')
const againBtn = document.querySelector('.again')
const h3 = document.querySelector('.numberGuesserBox>h3')

//dice rolling selected queries///
const diceRollerBox = document.querySelector('.diceRollerBox')
const diceSpans = document.querySelectorAll('.diceSpans')
const rollButtons= document.querySelectorAll('.rollButtons')
const holdButtons= document.querySelectorAll('.holdButtons')
const diceH3 = document.querySelector('.diceRollerBox>div>h3')
const dice = document.querySelector('.dice')
//dice rolling selected queries///
// wordScrambleBox selected queries
const wordScrambleBox = document.querySelector('.wordScrambleBox')
const lettersRow = document.querySelector('.lettersRow')
const h3Word = document.querySelector('.wordScrambleBox>div>h3')
const guess = document.querySelector('.guess')
const wordInp = document.getElementById('wordInp')
const newWord = document.querySelector('.newWord')
//clicking on the menu items and displaying the game chosen//
//banner
const banner = document.querySelector('.banner')
//banner
// ticTacToeBox selected queries
const ticTacToeBox = document.querySelector('.ticTacToeBox')
const div = document.querySelectorAll('.box>div>span')
const xoH3 = document.querySelector('.ticTacToeBox>.row>h3')
const xoTurn = document.querySelector('.xoTurn')
const box = document.querySelector('.box')
const overlayBox = document.querySelector('.overlayBox')
const roundCount = document.querySelectorAll('.roundCount')
const overlayCircles = document.querySelectorAll('.overlayCircles')
const exit = document.querySelector('.exit')
const newMatch = document.querySelector('.newMatch')
// ticTacToeBox selected queries


//reset //
banner.children[0].children[3].children[0].innerText="no game's being selected yet"
navItem.forEach((val,i)=>{
       val.addEventListener('click',()=>{
              gameBox.forEach((val)=>{
             val.style.display='none'
           })
              navItem.forEach((item, index)=>{
                     if(index != i){
                            item.setAttribute('data-status','off')
                            item.classList.remove('itemBg')
                     }
              })
              if(val.getAttribute('data-status') == 'off'){
                     val.setAttribute('data-status','on')
                     val.classList.add('itemBg')
                     banner.children[0].children[3].children[0].innerText=val.innerText
                     
              }else{
                     val.setAttribute('data-status','off')
                     val.classList.remove('itemBg')
                     
              }
              if(i == 0){
                     banner.children[0].children[3].children[0].innerText=''
                     gameBox[0].style.display='flex'
                     gameBox[0].setAttribute('data-status','on')
              }
       })
})
// gameBox.forEach((val)=>{
//        val.style.display='none'
// })

//reset //

///random number function
function rand(i){
             return Number(Math.floor(Math.random()*i))
      }
///random number function

///number guesser game /////////////////////////******************************************************************************************************************************************
//clicking on the menu items and displaying the game chosen//
navItem[1].addEventListener('click',()=>{
              numberGuesserBox.style.display='flex'  
})

let randNum = rand(100)
console.log(randNum)
inp.setAttribute('disabled','disabled')

let flag = 0
let userGuess = 0
playBtn.addEventListener('click',()=>{
       inp.removeAttribute('disabled')
       h3.style.animationPlayState='paused'
       numberGame()
       
})
function numberGame(){
       h3.innerText = 'guess remained: ' + Math.abs((flag-5))
       if(inp.value != ''){
              inp.style.border='none'
              if(flag < 5){
                     userGuess = inp.value
                     if(userGuess < randNum){
                            h3.innerText = 'the number is greater than your guess, you have ' + (Math.abs(5-flag)) + ' guess left'
                     }else if(userGuess > randNum){
                            h3.innerText = 'the number is lesser than your guess, you have ' + (Math.abs(5-flag)) + ' guess left'
                     }else{
                            h3.innerText = 'You won the game within  ' + (flag+1) +' try(s)! congratulations!!'
                            h3.style.color ='rgb(129,166,95)'
                            playBtn.style.backgroundColor ='#e8da9c'
                            playBtn.style.color ='#1a1a2e'
                            playBtn.innerText = 'You Won'
                            playBtn.setAttribute('disabled','disabled')
                     }
                     flag++
              }else{
                     h3.innerText = 'You reached the number of guesses, you lost the game within 5 try(s)'
                     inp.setAttribute('inert','inert')
                     playBtn.style.backgroundColor ='#993c1d'
                     playBtn.style.color= 'whitesmoke'
                     playBtn.setAttribute('disabled','disabled')
                     playBtn.innerText = 'You lost'
              }
       }else{
              h3.innerText = 'fill in the blank with your guesses'
              inp.style.border='3px solid #993c1d'
       }
}

//try again
againBtn.addEventListener('click',()=>{
       randNum = rand(100)
       console.log(randNum)
       h3.innerText = 'fill in the blank with your guesses'
       h3.style.classList.add('text-white/70')
       inp.value = ''
       inp.removeAttribute('inert')
       flag = 0
        playBtn.style.backgroundColor ='#534ab7'
                     playBtn.style.color= 'whitesmoke'
                     playBtn.removeAttribute('disabled')
                     playBtn.innerText = 'play'
})
//try again


///number guesser ///////////////game******************************************************************************************************************************************

///dice roller game ///////////////game******************************************************************************************************************************************


// ///////////clicking on the navitem to disaply the rolling dice box
navItem[2].addEventListener('click',()=>{
              diceRollerBox.style.display='flex'
})

// ///////////clicking on the navitem to disaply the rolling dice box

let player1 =0 
let player2 =0

let turn = rand(2)
console.log(turn)

if(turn){
       rollButtons[0].setAttribute('disabled','disabled')
       diceH3.innerText = 'Player2 may roll the dice'
}else{
       rollButtons[1].setAttribute('disabled','disabled')
       diceH3.innerText = 'Player1 may roll the dice'
}


rollButtons.forEach((val)=>{
       val.addEventListener('click',()=>{
              if(val == rollButtons[0]){
                     dice.classList.add('diceRolling')
                     setTimeout(() => {
                            let diceNum = rand(6)+1
                            dice.classList.remove('diceRolling')
                            console.log(diceNum)
                            if(diceNum == 1){
                                   player1 = 0
                                   rollButtons[1].removeAttribute('disabled')
                                   rollButtons[0].setAttribute('disabled','disabled')
                                   diceH3.innerText = 'Player2 may roll the dice'
                            }else if(diceNum == 6){
                                   player1 += 12
                                   rollButtons[0].removeAttribute('disabled')
                                   rollButtons[1].setAttribute('disabled','disabled')
                                   diceH3.innerText = 'Player1 may roll the dice'
                            }else{
                                   rollButtons[1].removeAttribute('disabled')
                                   rollButtons[0].setAttribute('disabled','disabled') 
                                   diceH3.innerText = 'Player2 may roll the dice'
                            }
                            if(diceNum != 1 && diceNum != 6){
                                   player1 += diceNum
                            }
                            diceSpans[0].innerText = diceNum
                            rollButtons[0].children[1].innerText = player1


                            if(player1 >= 25){
                                   diceH3.style.animationPlayState='paused'
                                   diceH3.innerText = 'player1 won the game'
                                   diceH3.style.color='rgb(129,166,95)'
                                   rollButtons[0].children[1].style.color='rgb(129,166,95)'
                                   rollButtons.forEach((val)=>{
                                          val.setAttribute('inert','inert')
                                   })
                            }
                     }, 1500);
              }else{
                     dice.classList.add('diceRolling')
                      setTimeout(() => {
                             let diceNum = rand(6)+1
                             dice.classList.remove('diceRolling')
                             console.log(diceNum)
                             if(diceNum == 1){
                                    player2 = 0
                                    rollButtons[0].removeAttribute('disabled')
                                    rollButtons[1].setAttribute('disabled','disabled')
                                    diceH3.innerText = 'Player1 may roll the dice'
                                   }else if(diceNum == 6){
                                          player2 += 12
                                          rollButtons[1].removeAttribute('disabled')
                                          rollButtons[0].setAttribute('disabled','disabled')
                                          diceH3.innerText = 'Player2 may roll the dice'
                                   }else{
                                          rollButtons[0].removeAttribute('disabled')
                                          rollButtons[1].setAttribute('disabled','disabled') 
                                          diceH3.innerText = 'Player1 may roll the dice'
                                   }
                                   if(diceNum != 1 && diceNum != 6){
                                          player2 += diceNum
                                   }
                                   diceSpans[0].innerText = diceNum
                                  rollButtons[1].children[1].innerText = player2
                                   
                                  if(player2 >= 25){
                                   diceH3.style.animationPlayState='paused'
                                   diceH3.innerText = 'player2 won the game'
                                   diceH3.style.color='rgb(129,166,95)'
                                   rollButtons[1].children[1].style.color='rgb(129,166,95)'
                                   rollButtons.forEach((val)=>{
                                          val.setAttribute('inert','inert')
                                   })
                            }
                    
                    
                    
                            }, 1500);
              }
       })
})

let player1Hold = 0
let player2Hold = 0
holdButtons.forEach((val)=>{
       val.addEventListener('click',()=>{
              if(val == holdButtons[0] ){
                     if(player1Hold < 2){
                            rollButtons[0].setAttribute('disabled','disabled')
                            rollButtons[1].removeAttribute('disabled')
                            diceH3.innerText = 'Player2 may roll the dice'
                            player1Hold++
                            return
                     }
                     diceH3.innerText = 'player1 no longer can hold the game'
                            rollButtons[1].setAttribute('disabled','disabled')
                            rollButtons[0].removeAttribute('disabled')
                          setTimeout(() => {
                              diceH3.innerText = 'player1 may now roll'
                          }, 1000);
                     
              }else{
                     if(player2Hold < 2){
                            rollButtons[1].setAttribute('disabled','disabled')
                            rollButtons[0].removeAttribute('disabled')
                            player2Hold ++
                            diceH3.innerText = 'Player1 may roll the dice'
                            return
                     }
                            diceH3.innerText = 'Player2 no longer can hold the game'
                            rollButtons[0].setAttribute('disabled','disabled')
                            rollButtons[1].removeAttribute('disabled')
                            setTimeout(() => {
                                   diceH3.innerText = 'Player2 may now roll'
                            }, 1000);
              }
       })
})



///dice roller game ///////////////game******************************************************************************************************************************************

///word scramble game ///////////////game******************************************************************************************************************************************

// //////////////////click on the navitem to display the word scramble box

navItem[3].addEventListener('click',()=>{
       wordScrambleBox.style.display='flex'
})

const words = ['pizza','pasta','cake','burger','tacco','burrito','pancake','sausage','cheese','butter']

///random word from the words array//
let randWord = words[rand(words.length)]
console.log(randWord)
///random word from the words array//

//convert the randomword into an array of letters//
let letterArray = Array.from(randWord)
console.log(letterArray)
//convert the randomword into an array of letters//
// creating a scramble word from the randomword, to do that we need to first find a random index from the letterarray and to prevent the repetition we have to empty the letter array and push the letters into scrambled array///

let randIndex = 0
let scrambledArray = []
let wordArray = letterArray.length
for(let i =0 ; i<wordArray ;i++){
       randIndex = rand(letterArray.length)
       scrambledArray.push(letterArray[randIndex])
       letterArray.splice(randIndex,1)
}

blankGenerator()
function blankGenerator (){
       for(let i = 0 ; i< scrambledArray.length ; i++){
              let letter = document.createElement('span')
              letter.classList.add('letter')
              letter.innerText = scrambledArray[i]
              lettersRow.appendChild(letter)
       }
}

let userguess =''
let guessCount = 0
function winner(){
        h3Word.style.animationPlayState='paused'
        userguess = wordInp.value
       if(guessCount < 4){
              if(userguess == '') return 
              if(userguess == randWord){
                     h3Word.innerText = 'You won the game within ' + (guessCount+1) + ' try(s)'
                     h3Word.style.color='#82A65F'
              }else{
                     h3Word.innerText = 'wrong! try again, you have ' + Math.abs(5-guessCount) + ' try(s)'
              }
              guessCount ++
       }else{
              h3Word.innerText = 'you are no longer able to guess. you ran out of your guesses!'
              guess.setAttribute('inert','inert')
       }
       console.log(guessCount)
}

guess.addEventListener('click',()=>{
       winner()
})


newWord.addEventListener('click',()=>{
       h3Word.innerText = 'try to guess the new word'
       h3Word.classList.add('text-white/70')
       wordInp.value = ''
       randWord = words[rand(words.length)]
       guessCount = 0
       letterArray = Array.from(randWord)
       wordArray = letterArray.length
       scrambledArray=[]
       lettersRow.innerHTML = ''
       guess.removeAttribute('disabled')
       guess.removeAttribute('inert')
       for(let i = 0; i<wordArray ; i++){
              randIndex = rand(letterArray.length)
              scrambledArray.push(letterArray[randIndex])
              letterArray.splice(randIndex, 1)
       }
       blankGenerator()
       console.log(randWord)
       console.log(scrambledArray)
})
///word scamble game ///////////////game******************************************************************************************************************************************


///tic tac toe game ///////////////game******************************************************************************************************************************************

navItem[4].addEventListener('click',()=>{
       ticTacToeBox.style.display='flex'
})




let num1 = ''
let num2 = ''
let xoCard = rand(2)
if(xoCard){
       num1 = 'X'
       num2 = 'O'
}else{
       num2 = 'X'
       num1 = 'O'
}
let turnFlag = 1
div.forEach((val)=>{
       val.addEventListener('click',()=>{
              let temp = val.getAttribute('data-status')
                    xoH3.style.animationPlayState='paused'
              if(temp == 'off'){

                     if(turnFlag %2){
                            val.innerText = num1
                            xoTurn.innerText = num1 +"'s turn"
                            if(num1 == 'X'){
                                   val.style.color='#534ab7'
                                   xoTurn.style.color='#534ab7'
                            }else{
                                   val.style.color='#993c1d'
                                    xoTurn.style.color='#993c1d'
                            }
                     }else{
                            val.innerText = num2
                            xoTurn.innerText= num2 +"'s turn"
                            if(num2 == 'O'){
                                   val.style.color='#993c1d'
                                   xoTurn.style.color='#993c1d'
                            }else{
                                   val.style.color='#534ab7'
                                   xoTurn.style.color='#534ab7'
                            }
                     }

                     turnFlag ++
                     val.setAttribute('data-status','on')
                     val.setAttribute('inert','inert')
                     xoWinner()
                     
              }

       })


})

let arr =[]
let roundCounter = 0
let xScore =0
        let oScore =0
        let roundWinner =''
function xoWinner(){
   switch (true) {
              case ((div[0].innerText==div[1].innerText)&&(div[0].innerText==div[2].innerText))&&(div[2].innerText!=''): arr=[0,1,2];break;
              case ((div[3].innerText==div[4].innerText)&&(div[3].innerText==div[5].innerText))&&(div[5].innerText!=''): arr=[3,4,5];break;
              case ((div[6].innerText==div[7].innerText)&&(div[6].innerText==div[8].innerText))&&(div[8].innerText!=''): arr=[6,7,8];break;
              case ((div[0].innerText==div[3].innerText)&&(div[0].innerText==div[6].innerText))&&(div[6].innerText!=''): arr=[0,3,6];break;
              case ((div[1].innerText==div[4].innerText)&&(div[1].innerText==div[7].innerText))&&(div[7].innerText!=''): arr=[1,4,7];break;
              case ((div[2].innerText==div[5].innerText)&&(div[2].innerText==div[8].innerText))&&(div[8].innerText!=''): arr=[2,5,8];break;
              case ((div[0].innerText==div[4].innerText)&&(div[0].innerText==div[8].innerText))&&(div[8].innerText!=''): arr=[0,4,8];break;
              case ((div[2].innerText==div[4].innerText)&&(div[2].innerText==div[6].innerText))&&(div[6].innerText!=''): arr=[2,4,6];break;
        }


        
       ///if win
        if(arr.length == 3){
                 console.log(roundCounter)
              arr.forEach((val)=>{
                     if(div[val].innerText == 'X'){
                            div[val].classList.add('xWins')
                            roundCount[roundCounter].classList.add('xWins')
                            overlayCircles[roundCounter].classList.add('xWins')
                            overlayCircles[roundCounter].innerText='X'
                            roundWinner = 'X'
                            
                            ticTacToeBox.children[0].children[2].innerText = (roundCounter+1) + ' /' + roundCount.length
                     
              
                     }else{
                            div[val].classList.add('oWins')
                            roundCount[roundCounter].classList.add('oWins')
                            overlayCircles[roundCounter].classList.add('oWins')
                            overlayCircles[roundCounter].innerText='O'
                            roundWinner = 'O'
                            ticTacToeBox.children[0].children[2].innerText = (roundCounter+1) + ' /' + roundCount.length

                     }
                  
              })
              roundCounter++

              //scores
              if(roundWinner == 'X'){
                     xScore++
                     ticTacToeBox.children[1].children[0].innerText ='X wins: '+ xScore       
              }else{
                      oScore++
                     ticTacToeBox.children[1].children[2].innerText ='O wins: '+ oScore
              }
              //scores

              if(roundCounter == 3){
                     setTimeout(()=>{
                            overlayBox.style.scale='1'
                            overlay()
                     },500)
                     return
              }

              box.setAttribute('inert','inert')
              xoReset()
        }else if(arr.length == 0 && turnFlag > 9){
              ticTacToeBox.children[0].children[2].innerText = (roundCounter+1) + ' /' + roundCount.length
              roundCount[roundCounter].style.backgroundColor='#c9825a'
              box.setAttribute('inert','inert')
              roundCounter++
              xoReset()
              if(roundCounter == 3){
                     setTimeout(()=>{
                            overlayBox.style.scale='1'
                            overlay()
                     },500)
                     return
              }

        }
                     }


/// xo reset function
                     function xoReset(){
                              setTimeout(() => {
                    box.removeAttribute('inert')
                    div.forEach((val)=>{
                     val.removeAttribute('inert')
                     arr =[]
                     turnFlag =1
                     val.style.backgroundColor =''
                     val.setAttribute('data-status','off')
                     if(val.innerText == 'X'){
                            val.classList.remove('xWins')
                            val.innerText = ''
                     }else{
                            val.classList.remove('oWins')
                            val.innerText = ''

                     }
                    }) 
              }, 500);
                     }
/// xo reset function              


function overlay(){
       if(xScore > oScore){
              overlayBox.children[0].children[0].innerText ='X'
              overlayBox.children[2].children[0].innerText = 'X wins this match'
              overlayBox.children[0].children[0].style.color='#534ab7'
       }else if(xScore < oScore){
              overlayBox.children[0].children[0].innerText ='O'
              overlayBox.children[2].children[0].innerText = 'O wins this match'
              overlayBox.children[0].children[0].style.color='#993c1d'
       }else{
              overlayBox.children[0].children[0].innerText ='No Winner'
       }
     
}

  exit.addEventListener('click',()=>{
              location.reload()
       })

       newMatch.addEventListener('click',()=>{
              xoReset()
              newMatchFunc()
       })

function newMatchFunc(){
              overlayBox.style.scale='0'
              roundCounter = 0 
              xScore =0 
              oScore = 0
              ticTacToeBox.children[1].children[0].innerText ='X wins: '    
              ticTacToeBox.children[1].children[2].innerText ='O wins: '  
              roundCount.forEach((val)=>{
                     val.classList.remove('xWins','oWins')
                     val.style.backgroundColor =''
              })   
              overlayCircles.forEach((val)=>{
                     val.style.backgroundColor=''
                     if(val.innerText == 'X'){
                            val.classList.remove('xWins')
                     }else{
                            val.classList.remove('oWins')
                     }
                     val.innerText = ''
              })

              overlayBox.children[0].children[0].innerText =''
              overlayBox.children[1].children[0].innerText =''
              xoTurn.style.color = ''
              xoTurn.innerText = ''
              ticTacToeBox.children[0].children[2].innerText = ''
}
///tic tac toe game ///////////////game******************************************************************************************************************************************
