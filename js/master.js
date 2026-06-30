//
const navItem = document.querySelectorAll('.navItem')
const numberGuesserBox = document.querySelector('.numberGuesserBox')
const gameBox = document.querySelectorAll('.gamebox')

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


///number guesser game
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
//clicking on the menu items and displaying the game chosen//
