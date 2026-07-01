//number guessing selected queries
const navItem = document.querySelectorAll('.navItem')
const numberGuesserBox = document.querySelector('.numberGuesserBox')
const gameBox = document.querySelectorAll('.gamebox')
const inp = document.getElementById('inp')
const playBtn = document.querySelector('.play')
const againBtn = document.querySelector('.again')
const h3 = document.querySelector('.numberGuesserBox>h3')

//dice rolling selected queries///


//clicking on the menu items and displaying the game chosen//

//reset //
navItem.forEach((val,i)=>{
       val.addEventListener('click',()=>{
              navItem.forEach((item, index)=>{
                     if(index != i){
                            item.setAttribute('data-status','off')
                             }
              })
              val.setAttribute('data-status','on')
       })
})
gameBox.forEach((val)=>{
       val.style.display='none'
})

//reset //


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

let randNum = parseInt(Math.random()*100)
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
                            h3.innerText = 'the number is lesser than your guess, you have ' + (Math.abs(5-flag)) + 'guess left'
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
                     h3.innerText = 'You reached the number of guesses, yopu lost the game within 5 try(s)'
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
       randNum = parseInt(Math.random()*100)
       h3.innerText = 'fill in the blank with your guesses'
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

