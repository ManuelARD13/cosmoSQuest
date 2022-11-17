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

        this.characterImgRazes = new Image()
        this.characterImgRazes.src = "img/" + raze.razeName + "" + gender + "" + characterClasses.className + ".png"
        }
    }

class Razes {
    constructor(razeName, razeSkills, razeLore, razeMusicBK, razeBKImg, dualRaze=false) {
        this.razeName = razeName,
        this.razeSkills = razeSkills,
        this.razeLore = razeLore,
        this.razeMusicBK = razeMusicBK,
        this.razeBKImg = razeBKImg,
        this.dualRaze = dualRaze
    }
}

class CharacterClass {
    constructor(className, classSkills, classLore, dualClass=false) {
        this.className = className,
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
const headerTitle = document.getElementById("headerTitle")
const branding = document.getElementById("branding")
const mainMenu = document.getElementById("mainMenu")
    const loadGameButton = document.getElementById("loadGame")
const loadingGameScreen = document.getElementById("loadingGameScreen")
const createCharacter1 = document.getElementById("createCharacter1")
const createCharacter2 = document.getElementById("createCharacter2")
    const characterClassesForm = document.getElementById("formClasses")
const createCharacter3 = document.getElementById("createCharacter3")
    const buttonDice = document.getElementById("buttonDice")
    const reRollsDisplay = document.getElementById("reRollDisplay")
    const reRollMessage = document.getElementById("reRollMessage")
    const statsScores = Array.from(document.getElementsByClassName("statsScores"))
    const reRollButtons = Array.from(document.getElementsByClassName("reRollButtons"))
    let reRolls = 3
const characterProfile = document.getElementById("characterProfile")
const greetings = document.getElementById("greetings")
const characterImgRazes = document.getElementById("characterImgRazes")
const characterImgClasses = document.getElementById("characterImgClasses")
let genderAndRazeSelection =""
const gender = Array.from(document.getElementsByClassName("genderRadioSelectors"))
const razes = Array.from(document.getElementsByClassName("razes"))

/*Pistas de audio*/
const mainMenuAudio = new Audio("audio/mainMenu.mp3")
const humansAudio = new Audio("audio/humans.mp3")
const elfsAudio = new Audio("audio/elfs.mp3")
const orcsAudio = new Audio("audio/orcs.mp3")
const dwarfsAudio = new Audio("audio/dwarfs.mp3")

/*Razas seleccionables*/
const elf = new Razes ("Elf", ["Mystical Perception", "Blood Linage Wisdom"], "Lorem Ipsumx100", elfsAudio, new Image().src="img/elvenGarden.jpg", true)

const orc = new Razes ("Orc", ["Brutal Intimidation", "Beast's Authority"], "Lorem Ipsum", orcsAudio, new Image().src="img/orcgrimmBastion.jpg", true)

const human = ("Human", ["Weapon Proficiency", "General's Leadership"], "Lorem ipsum", humansAudio, new Image().src="img/elluKiaDowntowns.jpg", true)

const dwarf = new Razes ("Dwarf", [], "lorem ipsum", dwarfsAudio, new Image().src="fareastIronFederation.jpg")

/*Clases Seleccionables*/
let playableClasses = []
const warrior = new CharacterClass ("warrior", [], "lorem ipsum x 100")
playableClasses.push(warrior)
const dragonSlayer = new CharacterClass ("dragonSlayer", ["Dragon Killer", "Scales Skin", "Fire's Breath"], "lorem impsum x 100")
/*playableClasses.push(dragonSlayer)*/
const warlock = new CharacterClass ("warlock", [], "lorem ipsum x 100")
playableClasses.push(warlock)
const caster = new CharacterClass ("caster", [], "lorem ipsum x 100")
playableClasses.push(caster)

function playMusic() {
    mainMenuAudio.play()
}

function applyGenderSelection(){
    for(let i=0; i < gender.length; i++){
        if(gender[i].checked){
            return gender[i].value
        }
    }
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

    characterImgRazes.src = "img/noCharacter.png"
    razes.forEach((raze) => { 
        raze.addEventListener("click", showRazes)

    })

    buttonDice.addEventListener("click", diceRoll)
    reRollButtons.forEach((button) =>{
        button.addEventListener("click", reRollStatDice)
    })

    displayClasses()
}

function continueToScreen(e) {
    if(e.target.id == "startScreenButton"){
        hideSections(branding)
    } else if(e.target.id == "brandingButton"){
        hideSections(mainMenu)
    } else if(e.target.id == "buttonMainMenu"){
        hideSections(createCharacter1)
    } else if(e.target.id == "continueCharacter1"){
        characterImgClasses.src = characterImgRazes.src
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

function toLoadGameScreen(){
    hideSections(loadingGameScreen)
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

function showRazes(e) {
    let selectedGender = applyGenderSelection()
    let targetedImg= e.target
    let limit = 0

    razes.forEach((raze) => {
        if(raze.checked){
            limit++
        }
    })

    if(limit<=2){
       for(let i = 0; i < razes.length; i++){ 
        //Iteramos sobre el arreglo "razes" para verificar si "target:checked" y si hay otro elemento ":checked" ademas de "target"
        if (targetedImg.checked && razes[i].checked && targetedImg.id!=razes[i].id){
                characterImgRazes.src = "img/" + targetedImg.id + razes[i].id + selectedGender + ".png"
                genderAndRazeSelection = targetedImg.id + "" + razes[i].id + "" + selectedGender
                return false
            } }
        for(let i = 0; i < razes.length; i++) {
            //Si no, iteramos sobre el arreglo "razes" de nuevo para mostrar, o el elemento "":checked", o el elemento "target:checked" segun corresponda
            if(razes[i].checked) {
                characterImgRazes.src = "img/" + razes[i].id + selectedGender + ".png"
                genderAndRazeSelection = razes[i].id + "" + selectedGender
                return false
            }
            if (targetedImg.checked) {
                characterImgRazes.src = "img/" + targetedImg.id + selectedGender + ".png"
                genderAndRazeSelection = targetedImg.id + "" + selectedGender
                return false
            } 
            characterImgRazes.src = "img/noCharacter.png" } } 
      else {
     targetedImg.checked = false
    } 
} 

function showClasses(e) {
    let targetedImg= e.target
    let limit = 0

    playableClasses.forEach((pClass) => {
        if(pClass.checked){
            limit++
        }
    })

    if(limit<=2){
       for(let i = 0; i < playableClasses.length; i++){ 
        //Iteramos sobre el arreglo "razes" para verificar si "target:checked" y si hay otro elemento ":checked" ademas de "target"
        if (targetedImg.checked && playableClasses[i].checked && targetedImg.id!=playableClasses[i].id){
                characterImgClasses.src = "imgclasses//" + genderAndRazeSelection + targetedImg.id + playableClasses[i].id + ".png"
                return false
            } }
        for(let i = 0; i < playableClasses.length; i++) {
            //Si no, iteramos sobre el arreglo "razes" de nuevo para mostrar, o el elemento "":checked", o el elemento "target:checked" segun corresponda
            if(playableClasses[i].checked) {
                characterImgClasses.src = "img/classes/" + genderAndRazeSelection + playableClasses[i].id + ".png"
                return false
            }
            if (targetedImg.checked) {
                characterImgClasses.src = "img/classes/" + genderAndRazeSelection + targetedImg.id + ".png"
                return false
            } 
            characterImgClasses.src = characterImgRazes.src} } 
      else {
     targetedImg.checked = false
    } 
} 

function displayClasses(){
    playableClasses.forEach((pClass) =>{
        createClassSelectors(pClass)
    })
}

function createClassSelectors(characterClass) {
    let input = document.createElement("input")
    input.setAttribute("type", "Checkbox")
    input.setAttribute("class", "classes")
    input.setAttribute("value", characterClass.className)
    input.setAttribute("id", characterClass.className)
    input.addEventListener("click", showClasses)
    characterClassesForm.appendChild(input)

    let label = document.createElement("label")
    let labelId = characterClass.className + "Label"
    label.setAttribute("class", "classesLabels")
    label.setAttribute("for", characterClass.className)
    label.setAttribute("id", labelId)
    let labelImg = "img/thumbnails/" + characterClass.className + "Label.png"
    label.style.backgroundImage = `url(${labelImg})`
    label.style.backgroundSize = "cover"
    characterClassesForm.appendChild(label)
}

function hideSections(selectedSection){
    gameSections.forEach((section) => {
        if(selectedSection.id == "branding"){
            section.style.display = "none"
            selectedSection.style.display = "flex"
        } else if(selectedSection.id == "mainMenu"){
            section.style.display = "none"
            selectedSection.style.display = "flex"
            headerTitle.style.display = "none"
        } else {
            section.style.display = "none"
            selectedSection.style.display = "flex"
            headerTitle.style.display = "flex"
        }
    })
}

function statCalculator(){
    let statScore = Math.floor(Math.random()* 14) + 7
    return statScore
}

function diceRoll(){
    console.log(statsScores)
    statsScores.forEach((stat) => {
        let statScore = statCalculator()
        stat.innerHTML = statScore
    })
    buttonDice.disabled = true
    showReRollButtons()
}

function showReRollButtons() {
    reRollButtons.forEach((button) =>{
        button.style.display = "flex"
    })
    reRollMessage.style.display = "inline-block"
}

function reRollStatDice(e){
    if(reRolls > 0){
       let stat = e.target.id
        let statScore = document.getElementById(stat + "Score")
        statScore.innerHTML = statCalculator()
        reRolls--
        updateReRolls() 
    } 
}

function updateReRolls() {
    reRollsDisplay.innerHTML = reRolls
    if(reRolls == 0){
        reRollMessage.innerHTML = "You have roll all your Re-Roll chances." + "<br>" + "Excellent! this are great stats to begin your epic journey. Congrats!"
        reRollButtons.forEach((button) => {
            button.disabled = true
        })
    }
}

window.addEventListener("load", init)

let stats1 = new Stats(20, 20, 20, 20, 20, 20, 6)

let xerthion = new Character("001", "xerthion", "male", elf, false, dragonSlayer, stats1, elf.razeSkills, dragonSlayer.classSkills)



/*
let screenDisplay {
    characterImgRazes: 
}
*/