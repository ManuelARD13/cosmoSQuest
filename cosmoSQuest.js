/*Constructores*/
class Character {
    constructor(playerId, name, gender, raze, dualClass=false, characterClasses, stats, razeSkills, skills) {
        this.playerId = playerId,
        this.name = name,
        this.gender = gender,
        this.raze = raze,
        this.dualClass = dualClass,
        this.characterClasses = characterClasses,
        this.stats = stats,
        this.razeSkills = razeSkills,
        this.skills = skills,

        this.characterImg = new Image()
        this.characterImg.src = "img/" + raze.razeName + "" + gender + "" + characterClasses.className + ".png"
        }
    }

class Razes {
    constructor(razeName, razeImg, razeSkills, razeLore, razeMusicBK, razeBKImg, dualRaze=false) {
        this.razeName = razeName,
        this.razeImg = razeImg,
        this.razeSkills = razeSkills,
        this.razeLore = razeLore,
        this.razeMusicBK = razeMusicBK,
        this.razeBKImg = razeBKImg,
        this.dualRaze = dualRaze
    }
}

class characterClass {
    constructor(className, classImg, classSkills, classLore, dualClass=false) {
        this.className = className,
        this.classImg = classImg,
        this.classSkills = classSkills,
        this.classLore = classLore,
        this.dualClass = dualClass
    }
}

class Stats {
    constructor(CON, STR, DEX, WIS, INT, CHA, characterHeight){
        this.CON = CON,
        this.STR = STR,
        this.DEX = DEX,
        this.WIS = WIS,
        this.INT = INT,
        this.CHA = CHA

        this.characterHeight = characterHeight + " feets"

        this.calculateHP = function() {
            /*calculo de HP*/
        }

        this.calculateHitDices = function() {
            /*calculo dados de golpe*/
        }

        /*Investigar demas factores del personaje calculados con sus stats*/
    }
}

/*HTML Elementos*/
const returnButton = Array.from(document.getElementsByClassName("returnButton"))
const continueButton = Array.from(document.getElementsByClassName("continueButton"))
const gameSections = Array.from(document.getElementsByTagName("section"))
const branding = document.getElementById("branding")
const mainMenu = document.getElementById("mainMenu")
    const loadGameButton = document.getElementById("loadGame")
const loadingGameScreen = document.getElementById("loadingGameScreen")
const createCharacter1 = document.getElementById("createCharacter1")
const createCharacter2 = document.getElementById("createCharacter2")
const createCharacter3 = document.getElementById("createCharacter3")
const characterProfile = document.getElementById("characterProfile")
const greetings = document.getElementById("greetings")

/*Pistas de audio*/
const mainMenuAudio = new Audio("audio/mainMenu.mp3")
const humansAudio = new Audio("audio/humans.mp3")
const elfsAudio = new Audio("audio/elfs.mp3")
const orcsAudio = new Audio("audio/orcs.mp3")
const dwarfsAudio = new Audio("audio/dwarfs.mp3")

/*Razas seleccionables*/
const elf = new Razes ("Elf", new Image().src="img/elf.png", ["Mystical Perception", "Blood Linage Wisdom"], "Lorem Ipsumx100", elfsAudio, new Image().src="img/elvenGarden.jpg", true)

const orc = new Razes ("Orc", new Image().src="img/orc.png", ["Brutal Intimidation", "Beast's Authority"], "Lorem Ipsum", orcsAudio, new Image().src="img/orcgrimmBastion.jpg", true)

const human = ("Human", new Image().src="img/human.png", ["Weapon Proficiency", "General's Leadership"], "Lorem ipsum", humansAudio, new Image().src="img/elluKiaDowntowns.jpg", true)

const dwarf = new Razes ("Dwarf", new Image().src="img/dwarf.png", [], "lorem ipsum", dwarfsAudio, new Image().src="fareastIronFederation.jpg")

/*Clases Seleccionables*/
const dragonSlayer = new characterClass ("dragonSlayer", new Image().src="img/dualRaze/orcelfmaledragonSlayer.png", ["Dragon Killer", "Scales Skin", "Fire's Breath"], "lorem impsum x 100")

function playMusic() {
    mainMenuAudio.play()
}

function init(){
    
    continueButton.forEach((button) => {
        button.addEventListener("click", continueToScreen)
        /*button.addEventListener("click", playMusic)*/
    })

    loadGameButton.addEventListener("click", toLoadGameScreen)

    returnButton.forEach((button) => {
        button.addEventListener("click", returnScreen)
    })
}

function continueToScreen(e) {
    if(e.target.id == "startScreenButton"){
        hideSections(branding)
    } else if(e.target.id == "brandingButton"){
        hideSections(mainMenu)
    } else if(e.target.id == "buttonMainMenu"){
        hideSections(createCharacter1)
    } else if(e.target.id == "continueCharacter1"){
        hideSections(createCharacter2)
    } else if(e.target.id == "continueLoadGame"){
        hideSections(characterProfile)
    } else if(e.target.id == "continueCharacter2"){
        hideSections(createCharacter3)
    } else if(e.target.id == "continueCharacter3"){
        hideSections(characterProfile)
    } else if(e.target.id == "continueProfile"){
        hideSections(greetings)
    }
}

function returnScreen(e) {
    let button = e.target
    let buttonClass = button.getAttribute("class")
    /*Debe haber una forma de filtrar los elementos por solo UNA de LAS CLASES que posea,
    .getAttribute retorna un "string" por lo que no funciona*/
    if(buttonClass == "returnButton returnMainMenu"){
        hideSections(mainMenu)
    } else if(button.id == "buttonCharacter2") {
        hideSections(createCharacter1)
    } else if(button.id == "buttonCharacter3") {
        hideSections(createCharacter2)
    }
}

function toLoadGameScreen(){
    hideSections(loadingGameScreen)
}

function hideSections(selectedSection){
    gameSections.forEach((section) => {
        section.style.display = "none"
        selectedSection.style.display = "flex"
    })
}

window.addEventListener("load", init)

let stats1 = new Stats(20, 20, 20, 20, 20, 20, 6)

let xerthion = new Character("001", "xerthion", "male", elf, false, dragonSlayer, stats1, elf.razeSkills, dragonSlayer.classSkills)

console.log(xerthion)

/*
let screenDisplay {
    characterImg: 
}
*/