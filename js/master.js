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
navItem[0].addEventListener('click',()=>{
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
       h3.style.color='#1a1a2e'
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
navItem[1].addEventListener('click',()=>{
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

navItem[2].addEventListener('click',()=>{
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

///word scamble game ///////////////game******************************************************************************************************************************************