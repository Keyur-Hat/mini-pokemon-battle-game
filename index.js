let playerPokemon;
let opponentPokemon;

let oppSprite=document.getElementById("opp-sprite")
let playerSprite=document.getElementById("player-sprite")

let oppName=document.getElementById("opp-name")
let playerName=document.getElementById("player-name")

let oppHp=document.getElementById("opp-Hp")
let playerHp=document.getElementById("player-Hp")

let playerBar=document.getElementById("player-bar-fill")
let oppBar=document.getElementById("opp-bar-fill")

const charmander = {
    Name :"Charmander",
    hp:100,
    attack:20,
    defence:0,



}

const bulbasaur = {
    Name :"Bulbasaur",
    hp:100,
    attack:15,
    defence:0,


}

function startBattle() {
  
  const playerRandom = Math.random();
  if (playerRandom < 0.5) {
    playerPokemon = charmander;
    opponentPokemon = bulbasaur;
    console.log("hello")
    playerSprite.innerHTML=`<img src="Sprites/charmander-back.png">`
    oppSprite.innerHTML=`<img src="Sprites/bulbasaur-front.png">`
    playerName.innerHTML=`<p>${charmander.Name}</p>`
    oppName.innerHTML=`<p>${bulbasaur.Name}</p>`
    playerHp.innerHTML=`<p>${charmander.hp}</p>`
    oppHp.innerHTML=`<p>${bulbasaur.hp}</p>`

    
  } else {
    playerPokemon = bulbasaur;
    opponentPokemon = charmander;
    playerSprite.innerHTML=`<img src="Sprites/bulbasaur-back.png">`
    oppSprite.innerHTML=`<img src="Sprites/charmander-front.png">`
    playerName.innerHTML=`<p>${bulbasaur.Name}</p>`
    oppName.innerHTML=`<p>${charmander.Name}</p>`
    oppHp.innerHTML=`<p>${charmander.hp}</p>`
    playerHp.innerHTML=`<p>${bulbasaur.hp}</p>`


  }
}

document.getElementById('start-battle').addEventListener('click', startBattle);

document.getElementById('attack').addEventListener('click',function attack(){
    const damageDealt = playerPokemon.attack;

  
  opponentPokemon.hp = (opponentPokemon.hp + opponentPokemon.defence)-damageDealt;
  console.log("Opponent HP:", opponentPokemon.hp);

  
  const opponentHP = Number(opponentPokemon.hp);
  oppHp.innerHTML = `<p>${parseInt(opponentHP)}</p>`
  oppBar.style.width=`${opponentPokemon.hp}%`

  console.log("Opponent HP:", opponentPokemon.hp)



  
  logToConsole(`PLAYER : ${playerPokemon.Name} attacked ${opponentPokemon.Name} and dealt ${damageDealt} damage.`)
  
    console.log("attack")
    oppTurn()
})

document.getElementById('defend').addEventListener('click',function defend(){
  playerPokemon.defence+=10
  logToConsole(`PLAYER : ${playerPokemon.Name} defended.`)
    oppTurn()
})

document.getElementById('power-up').addEventListener('click',function powerUp(){
  playerPokemon.attack+=10
  logToConsole(`PLAYER : ${playerPokemon.Name} Powered-up`)
    oppTurn()
})

function oppTurn() {
  let action;

  if (opponentPokemon.hp >= 70) {
      
      const randomChance = Math.random()
      if (randomChance < 0.7) {
          action = "power-up"
      } else {
        
          action = "attack"
      }
  } else if (opponentPokemon.hp < 30) {
      const randomChance=Math.random()
      if(randomChance < 0.5){
      
      action = "defend"
      }
  } else {
      
      action = "attack"
  }

  
  switch (action) {
      case "power-up":
          opponentPokemon.attack+=10
          logToConsole(`AI : ${opponentPokemon.Name} Powered-up`)
          break;
      case "defend":
          opponentPokemon.defence+=5
          logToConsole(`AI : ${opponentPokemon.Name} Defended`)
          break;
      case "attack":
          
          const damageDealt = opponentPokemon.attack

          

          
          playerPokemon.hp = (playerPokemon.hp+playerPokemon.defence)-damageDealt

          
          playerHp.innerHTML = `<p>${playerPokemon.hp}</p>`
          playerBar.style.width=`${playerPokemon.hp}%`

          
          logToConsole(`AI : ${opponentPokemon.Name} attacked ${playerPokemon.Name} and dealt ${damageDealt} damage.`)
          console.log("Player HP:", playerPokemon.hp)
          break;
  }
}

function logToConsole(message) {
  const consoleBox = document.getElementById('info');
  consoleBox.innerHTML += `<p>${message}</p>`;
  consoleBox.scrollTop = consoleBox.scrollHeight; // Automatically scroll to the bottom
}