var qwerty = document.getElementById('qwerty');
var phrase = document.getElementById('phrase');
var btnreset = document.getElementsByClassName('btn__reset');
var title = document.getElementById('overlay')
var missed = 0;

let phrases = ['l', 'Do you think love can bloom even on a battlefield', 'Infinite Ammo', 'War has changed', 'Revolver Ocelot', 'Nanomachines Son' ];


function displayOff(){
    
  overlay.style.display = 'none';
}

displayOff();

function getphrasefromarray(phrases) {
    return phrases[Math.floor ( Math.random() * phrases.length)]

  }
  
  
  var dphrase = getphrasefromarray(phrases);
  var splitphrase = dphrase.split('')
  console.log(dphrase)
function addPhraseToArray(){
    
    let o = splitphrase;
    
    for(var i = 0; i <= o.length -1; i++){
        if (o[i] == ' '){
        $('#phrase ul').append('<li class = "space"> </li>');  
        }
        else{
            $('#phrase ul').append('<li class = "letter">' + o[i].toString().toLowerCase() + '</li>')
        }
    }



}

addPhraseToArray();

letters = document.querySelectorAll(".letter");
console.log(letters)


$('#qwerty button').click(function(event){
    console.log($(this).text());
    checkLetter($(this).text());
    winchecker();
    let clicked = event.target
    clicked.disabled = true;
  });

  let hearts = document.querySelectorAll(".tries img" )
checkLetter = (playerLetter) => {
    letterFound = false;
    for (let i = 0; i < letters.length; i++) {
      if(letters[i].innerHTML == playerLetter){
          letterFound = true; letters[i].classList.add("show");}
    } 

    if (letterFound == false)
     { console.log('no')
     missed +=1;
     hearts[missed-1].src = "images/lostHeart.png";
    console.log(missed);
    return missed;
     
     
   
}
    return letterFound;
}
   
winchecker = () => {
    let wins = 0;
    
    let matchfound = document.querySelectorAll(".letter.show");
    if(matchfound.length == letters.length){
        $('.title').text('Win!');
          overlay.style.display = 'flex';
          overlay.style.backgroundColor = 'green';
          
        
    }
    else if (missed == 5){
        win = 'lost';
        $('.title').text('Lose!');

        overlay.style.display = 'flex';
        overlay.style.backgroundColor = 'Red';
      

    }
    else{
        win = null
    }



  }

  