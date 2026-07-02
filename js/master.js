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

//clicking on the menu items and displaying the game chosen//

//reset //
navItem.forEach((val,i)=>{
       val.addEventListener('click',()=>{
              gameBox.forEach((val)=>{
             val.style.display='none'
           })
              navItem.forEach((item, index)=>{
                     if(index != i){
                            item.setAttribute('data-status','off')
                     }
              })
              val.setAttribute('data-status','on')
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
      
       let temp = numberGuesserBox.getAttribute('data-status')
       if(temp == 'off'){
              numberGuesserBox.setAttribute('data-status','on')
              numberGuesserBox.style.display='flex'
       }else{
              numberGuesserBox.setAttribute('data-status','off')
              numberGuesserBox.style.display='none'
       }
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
       
       let temp = diceRollerBox.getAttribute('data-status')
       if(temp == 'off'){
              diceRollerBox.setAttribute('data-status','on')
              diceRollerBox.style.display='flex'
       }else{
              diceRollerBox.setAttribute('data-status','off')
              diceRollerBox.style.display='none'
       }
})

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
                                   player1 += 0
                                   rollButtons[1].removeAttribute('disabled','disabled')
                                   rollButtons[0].setAttribute('disabled','disabled')
                                   diceH3.innerText = 'Player2 may roll the dice'
                            }else if(diceNum == 6){
                                   player1 += 12
                                   rollButtons[0].removeAttribute('disabled','disabled')
                                   rollButtons[1].setAttribute('disabled','disabled')
                                   diceH3.innerText = 'Player1 may roll the dice'
                            }else{
                                   rollButtons[1].removeAttribute('disabled','disabled')
                                   rollButtons[0].setAttribute('disabled','disabled') 
                                   diceH3.innerText = 'Player2 may roll the dice'
                            }
                            if(diceNum != 1 && diceNum != 6){
                                   player1 += diceNum
                            }
                            diceSpans[0].innerText = diceNum
                            rollButtons[0].children[1].innerText = player1


                            if(player1 >= 50){
                                   diceH3.style.animationPlayState='paused'
                                   diceH3.innerText = 'player1 won the game'
                                   diceH3.style.color='rgb(129,166,95)'
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
                                    player2 += 0
                                    rollButtons[0].removeAttribute('disabled','disabled')
                                    rollButtons[1].setAttribute('disabled','disabled')
                                    diceH3.innerText = 'Player1 may roll the dice'
                                   }else if(diceNum == 6){
                                          player2 += 12
                                          rollButtons[1].removeAttribute('disabled','disabled')
                                          rollButtons[0].setAttribute('disabled','disabled')
                                          diceH3.innerText = 'Player2 may roll the dice'
                                   }else{
                                          rollButtons[0].removeAttribute('disabled','disabled')
                                          rollButtons[1].setAttribute('disabled','disabled') 
                                          diceH3.innerText = 'Player1 may roll the dice'
                                   }
                                   if(diceNum != 1 && diceNum != 6){
                                          player2 += diceNum
                                   }
                                   diceSpans[0].innerText = diceNum
                                  rollButtons[1].children[1].innerText = player2
                                   
                                  if(player2 >= 50){
                                   diceH3.style.animationPlayState='paused'
                                   diceH3.innerText = 'player2 won the game'
                                   diceH3.style.color='rgb(129,166,95)'
                                   rollButtons.forEach((val)=>{
                                          val.setAttribute('inert','inert')
                                   })
                            }
                    
                    
                    
                            }, 1500);
              }
       })
})


// ///////////clicking on the navitem to disaply the rolling dice box