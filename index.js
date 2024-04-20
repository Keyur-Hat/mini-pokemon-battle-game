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
  oppHp.innerHTML = `<p>${parseInt(opponentHP)}</p>`;

  console.log("Opponent HP:", opponentPokemon.hp);


  // Check if opponent has fainted
  if (opponentPokemon.hp <= 0) {
    console.log(`${opponentPokemon.Name} fainted! ${playerPokemon.Name} wins!`);
    // You can add additional actions here, like displaying a message or ending the battle
  } else {
    console.log(`${playerPokemon.Name} attacked ${opponentPokemon.Name} and dealt ${damageDealt} damage.`);
  }
    console.log("attack")
})

document.getElementById('defend').addEventListener('click',function defend(){
    console.log("defend")
})

document.getElementById('power-up').addEventListener('click',function powerUp(){
    console.log("power-up")
})
