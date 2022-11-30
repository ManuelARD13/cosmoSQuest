/*Constructores*/
class Character {
    /*Inicializamos todas las propiedades desde el principio para tener guia de variables por asignar en el proceso de creacion de personaje*/
    constructor() {
        this.playerId, /*DONE*/
        this.name = "",/*DONE*/
        this.gender = "",/*DONE*/
        this.raze, /*DONE*/
        this.dualClass = false,
        this.characterClasses, /*DONE*/
        this.stats,

        this.characterImgSrc = "img/noCharacter.png"
    }
}

    /* class Character {
    Inicializamos todas las propiedades desde el principio para tener guia de variables por asignar en el proceso de creacion de personaje
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

        this.characterImgSrc = "img/" + raze.razeName + "/" + gender + raze.razeName + "/" + raze.razeName + "" + gender + "" + characterClasses.className + ".png"
        }
    } */

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
        this.classIconSrc = "img/thumbnails/" + className + "Label.png"
    }
}

class Stats {
    constructor(stats, characterHeight){
        this.CON = stats.CONScore,
        this.STR = stats.STRScore,
        this.DEX = stats.DEXScore,
        this.WIS = stats.WISScore,
        this.INT = stats.INTScore,
        this.CHA = stats.CHAScore

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
const body = document.getElementsByTagName("body")
const returnButton = Array.from(document.getElementsByClassName("returnButton"))
const continueButton = Array.from(document.getElementsByClassName("continueButton"))
const gameSections = Array.from(document.getElementsByTagName("section"))
const headerTitle = document.getElementById("headerTitle")
const branding = document.getElementById("branding")
const mainMenu = document.getElementById("mainMenu")
    let character
    const loadGameButton = document.getElementById("loadGame")
const loadingGameScreen = document.getElementById("loadingGameScreen")
    const localStorageCharacters = localStorage.getItem("savedCharacters_V1")
    let savedCharacters
    let selectionBoxesArray = []
const createCharacter1 = document.getElementById("createCharacter1")
    const characterNameInput = document.getElementById("characterName")
    characterNameInput.addEventListener("change", setCharacterName)
const createCharacter2 = document.getElementById("createCharacter2")
    const characterClassesForm = document.getElementById("formClasses")
const createCharacter3 = document.getElementById("createCharacter3")
    const buttonDice = document.getElementById("buttonDice")
    const reRollsDisplay = document.getElementById("reRollDisplay")
    const reRollMessage = document.getElementById("reRollMessage")
    const statsScores = Array.from(document.getElementsByClassName("statsScores"))
    const reRollButtons = Array.from(document.getElementsByClassName("reRollButtons"))
    let reRolls = 3
    let diceRolls = {}
const characterProfile = document.getElementById("characterProfile")
    const selectedCharacterName = document.getElementById("selectedCharacterName")
    const profileImg = document.getElementById("profileImg")
    const selectedClassName = document.getElementById("selectedClassName")
    const characterLore = document.getElementById("characterLore")
    const razeSkills = document.getElementById("razeSkills")
    const selectedCharacterGender = document.getElementById("selectedCharacterGender")
    const selectedCharacterRazeTittle = document.getElementById("selectedCharacterRazeTittle")
    const statsList = document.getElementById("statsList")
    let stats
const greetings = document.getElementById("greetings")
const characterImgRazes = document.getElementById("characterImgRazes")
const characterImgClasses = document.getElementById("characterImgClasses")
const genderSelection = Array.from(document.getElementsByClassName("genderRadioSelectors"))
const razes = Array.from(document.getElementsByClassName("razes"))

/*Pistas de audio*/
const playlist = []
const mainMenuAudio = new Audio("audio/mainMenu.mp3")
playlist.push(mainMenuAudio)
const humansAudio = new Audio("audio/human.mp3")
playlist.push(humansAudio)
const elfsAudio = new Audio("audio/elf.mp3")
playlist.push(elfsAudio)
const orcsAudio = new Audio("audio/orc.mp3")
playlist.push(orcsAudio)
const dwarfsAudio = new Audio("audio/dwarf.mp3")
playlist.push(dwarfsAudio)

/*Razas seleccionables*/
const playableRazes = []
const elf = new Razes ("elf", ["Mystical Perception", "Blood Linage Wisdom"], "Lorem Ipsumx100", elfsAudio, new Image().src="img/elvenGarden.png", true)
playableRazes.push(elf)

const orc = new Razes ("orc", ["Brutal Intimidation", "Beast's Authority"], "Lorem Ipsum", orcsAudio, new Image().src="img/orcgrimmBastion.png", true)
playableRazes.push(orc)

const human = new Razes ("human", ["Weapon Proficiency", "General's Leadership"], "Lorem ipsum", humansAudio, new Image().src="img/ellukiaDowntowns.png", true)
playableRazes.push(human)

const dwarf = new Razes ("dwarf", [], "lorem ipsum", dwarfsAudio, new Image().src="img/fareastIronFederation.png")
playableRazes.push(dwarf)

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



function init(){
    
    continueButton.forEach((button) => {
        if(button.id == "newGame"){
            button.addEventListener("click", generateNewCharacter)
        } else if(button.id == "continueCharacter1") {
            button.addEventListener("click", () => setRazeBackground(character.raze))
        } else if(button.id == "startScreenButton") {
            button.addEventListener("click", () => mainMenuAudio.play())
        } else if (button.id == "continueLoadGame"){
            button.addEventListener("click", loadCharacter)
        } else if(button.id == "continueCharacter3") {
            button.addEventListener("click", createStatsObject)
            button.addEventListener("click", () => displayCreatedCharacter(character))
        } else if(button.id == "continueProfile"){
            button.addEventListener("click", () => saveCharacter(character))
        }
        button.addEventListener("click", continueToScreen)
    })

    loadGameButton.addEventListener("click", toLoadGameScreen)
    loadGameButton.addEventListener("click", displaySavedCharacters)

    returnButton.forEach((button) => {
        if(button.id == "greetingsButton") {
            button.addEventListener("click", () => location.reload())
        } else {
            button.addEventListener("click", returnScreen)
        }
    })

    genderSelection.forEach((gender) => {
        gender.addEventListener("click", applyGenderSelection)
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
    if(!localStorageCharacters){
        localStorage.setItem("savedCharacters_V1", "[]")
        savedCharacters = []
    } else {
        savedCharacters = JSON.parse(localStorageCharacters)
    }
}

function continueToScreen(e) {
    if(e.target.id == "startScreenButton"){
        hideSections(branding)
    } else if(e.target.id == "brandingButton"){
        hideSections(mainMenu)
    } else if(e.target.id == "newGame"){
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

function setRazeBackground(selectedRaze) {
    playlist.forEach((song) => {
        song.pause()
        song.currentTime = 0
    })
    playableRazes.forEach((raze) => {
        if(raze.razeName == selectedRaze.razeName) {
            document.body.style.backgroundImage = `url(${raze.razeBKImg})`
            raze.razeMusicBK.play()
        }
    })
    
}

function mainTheme() {
    mainMenuAudio.play()
}

function generateRandomID (){
    let num = "00" + Math.floor(Math.random() * 100)
    return num
}

function applyGenderSelection(){
    for(let i=0; i < genderSelection.length; i++){
        if(genderSelection[i].checked){
            character.gender = genderSelection[i].value
        }
    }
}

function setCharacterName() {
    character.name = characterNameInput.value
}

function showRazes(e) {
    let targetedImg = e.target
    let limit = 0

    razes.forEach((raze) => {
        if(raze.checked){
            limit++
        }
    })

    if(limit<=1){
       for(let i = 0; i < razes.length; i++){ 
        //Iteramos sobre el arreglo "razes" para verificar si "target:checked" y si hay otro elemento ":checked" ademas de "target"
        if (targetedImg.checked && razes[i].checked && targetedImg.id!=razes[i].id){
                character.characterImgSrc = "img/" + targetedImg.id + razes[i].id + character.gender + ".png"
                characterImgRazes.src = character.characterImgSrc
                let dualRazeSelection = targetedImg.id + "" + razes[i].id
                character.raze = razeSelection(dualRazeSelection)
                console.log(character.raze)
                /*genderAndRazeSelection = targetedImg.id + "" + razes[i].id + "" + character.gender
                selectedRaze = targetedImg.id + razes[i].id*/
                return false
            } }

        for(let i = 0; i < razes.length; i++) {
            //Si no, iteramos sobre el arreglo "razes" de nuevo para mostrar solo el elemento "razes[x]:checked", o el elemento "target:checked" segun corresponda
            if(razes[i].checked) {
                character.characterImgSrc = "img/" + razes[i].id + character.gender + ".png"
                characterImgRazes.src = character.characterImgSrc
                razeSelection(razes[i])
                console.log(character.raze)
                /*genderAndRazeSelection = razes[i].id + "" + character.gender
                selectedRaze = razes[i].id*/
                return false
            }
            if (targetedImg.checked) {
                character.characterImgSrc = "img/" + targetedImg.id + character.gender + ".png"
                characterImgRazes.src = character.characterImgSrc
                razeSelection(targetedImg)
                console.log(character.raze)
                /*genderAndRazeSelection = targetedImg.id + "" + character.gender
                selectedRaze = targetedImg.id*/
                return false
            } 
            characterImgRazes.src = character.characterImgSrc
            } 

        } else {
            targetedImg.checked = false
    } 
} 

function razeSelection(razeLabelChecked){
    playableRazes.forEach((raze) => {
        if(raze.razeName == razeLabelChecked.id){
            console.log(raze)
            character.raze = raze
        }
    })
}

function showClasses(e) {
    let targetedImg= e.target
    let limit = 0

    playableClasses.forEach((pClass) => {
        if(pClass.checked){
            limit++
        }
    })

    if(limit<=1){
       for(let i = 0; i < playableClasses.length; i++){ 
        //Iteramos sobre el arreglo "razes" para verificar si "target:checked" y si hay otro elemento ":checked" ademas de "target"
        if (targetedImg.checked && playableClasses[i].checked && targetedImg.id!=playableClasses[i].id){

                let classLabelString = targetedImg.id + "" + playableClasses[i].id
               classSelection(classLabelString)

                character.characterImgSrc = "img/" + character.raze.razeName + "/" + character.gender + character.raze.razeName + "/" + character.raze.razeName + "" + character.gender + "" + character.characterClasses.className + ".png"
               
                characterImgClasses.src = character.characterImgSrc
                
                return false
            } }
        for(let i = 0; i < playableClasses.length; i++) {
            //Si no, iteramos sobre el arreglo "razes" de nuevo para mostrar, o el elemento "":checked", o el elemento "target:checked" segun corresponda
            if(playableClasses[i].checked) {
                classSelection(playableClasses[i].id)

                character.characterImgSrc = "img/" + character.raze.razeName + "/" + character.gender + character.raze.razeName + "/" + character.raze.razeName + "" + character.gender + "" + character.characterClasses.className + ".png"

                characterImgClasses.src = character.characterImgSrc
    
                return false
            }
            if (targetedImg.checked) {
                classSelection(targetedImg.id)

                character.characterImgSrc = "img/" + character.raze.razeName + "/" + character.gender + character.raze.razeName + "/" + character.raze.razeName + "" + character.gender + "" + character.characterClasses.className + ".png"
                
                characterImgClasses.src = character.characterImgSrc
    
                return false
            } 
            characterImgClasses.src = characterImgRazes.src} } 
      else {
     targetedImg.checked = false
    } 
} 

function classSelection(classLabelString){
    playableClasses.forEach((pClass) => {
        if(pClass.className == classLabelString){
            character.characterClasses = pClass
        }
    })
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
    label.style.backgroundImage = `url(${characterClass.classIconSrc})`
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
    statsScores.forEach((stat) => {
        let statScore = statCalculator()
        stat.innerHTML = statScore
        diceRolls[stat.id] = statScore
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

function generateNewCharacter(){
    character = new Character()

    let characterID = generateRandomID()
    character.playerId = characterID
    applyGenderSelection()
}

function createStatsObject(){
    character.stats = new Stats(diceRolls, 6)
}

function displayCreatedCharacter(character){
    selectedCharacterName.innerHTML = character.name
    profileImg.src = character.characterImgSrc
    selectedClassName.innerHTML = character.characterClasses.className
    characterLore.innerHTML = character.raze.razeLore
    razeSkills.innerHTML = character.raze.razeSkills
    selectedCharacterGender.innerHTML = character.gender
    selectedCharacterRazeTittle.innerHTML = character.raze.razeName

    displayStats(character, statsList)
}

function displayStats(character, HTMLElement) {
    let characterStats = []
    
    characterStats.push(character.stats.CON)
    characterStats.push(character.stats.STR)
    characterStats.push(character.stats.DEX)
    characterStats.push(character.stats.INT)
    characterStats.push(character.stats.WIS)
    characterStats.push(character.stats.CHA)

    characterStats.forEach((stat) => {
        let newLi = document.createElement("li")
        newLi.innerHTML = stat
        HTMLElement.appendChild(newLi)
    })
}

function saveCharacter (character) {
    savedCharacters.push(character)
    let parsedSavedCharacters = JSON.stringify(savedCharacters)
    localStorage.setItem("savedCharacters_V1", parsedSavedCharacters)
}

function displaySavedCharacters (){
    savedCharacters.forEach((character) => {
        if(character != null){
            let characterName = document.createElement("h4")
            characterName.innerHTML = character.name

            let characterThumbnail = document.createElement("div")
            characterThumbnail.setAttribute("class", "loadGameImgContainer")
            let thumbnail = new Image()
            thumbnail.src = character.characterImgSrc
            thumbnail.setAttribute("class", "charactersThumbnail")

            characterThumbnail.appendChild(characterName)
            characterThumbnail.appendChild(thumbnail)

            let statsUl = document.createElement("ul")
            displayStats(character, statsUl)
            
            let characterDescription = document.createElement("p")
            characterDescription.innerHTML = character.raze.razeLore

            let characterContainer = document.createElement("div")
            characterContainer.setAttribute("class", "loadedCharactersDiv")

            let selectionBox = document.createElement("input")
            selectionBox.setAttribute("type", "radio")
            selectionBox.setAttribute("id", `${character.name}`)
            selectionBox.setAttribute("class", "selectionBox")
            selectionBox.setAttribute("name", "savedCharacters")

            selectionBoxesArray.push(selectionBox)

            characterContainer.appendChild(characterThumbnail)
            characterContainer.appendChild(statsUl)
            characterContainer.appendChild(characterDescription)
            characterContainer.appendChild(selectionBox)

            loadingGameScreen.appendChild(characterContainer)
        }
    })
}

function loadCharacter(){
    selectionBoxesArray.forEach((selectionBox) => {
        if(selectionBox.checked){
            savedCharacters.forEach((character) => {
                if(character != null){
                    if(character.name == selectionBox.id){
                    displayCreatedCharacter(character)
                    console.log(character)
                    }
                }
            })
        }
    })
}

window.addEventListener("load", init)