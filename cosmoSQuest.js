/*Constructores*/
class Character {
    /*Inicializamos todas las propiedades desde el principio para tener guia de variables por asignar en el proceso de creacion de personaje*/
    constructor() {
        this.playerId,
        this.name = "",
        this.gender = "",
        this.raze, 
        this.dualClass = false,
        this.characterClasses,
        this.stats,

        this.characterImgSrc = "img/noCharacter.png"

        this.setImg = function () {
            if(!this.characterClasses){
                if(!this.raze) {
                    this.characterImgSrc = "img/noCharacter.png"
                } else if(this.raze) {
                    if(this.gender == "male") {
                        this.characterImgSrc = this.raze.razeImgMale
                    } else if(this.gender == "female") {
                        this.characterImgSrc = this.raze.razeImgFemale
                    } 
                }
            } else if(this.characterClasses) {
                if(this.raze.razeName == "human"){
                    if(this.gender == "male") {
                        this.characterImgSrc = this.characterClasses.classImg.human.male
                    } else if(this.gender == "female") {
                        this.characterImgSrc = this.characterClasses.classImg.human.female
                    }   
                } else if(this.raze.razeName == "elf"){
                    if(this.gender == "male") {
                        this.characterImgSrc = this.characterClasses.classImg.elf.male
                    } else if(this.gender == "female") {
                        this.characterImgSrc = this.characterClasses.classImg.elf.female
                    }
                } else if(this.raze.razeName == "orc") {
                    if(this.gender == "male") {
                        this.characterImgSrc = this.characterClasses.classImg.orc.male
                    } else if(this.gender == "female") {
                        this.characterImgSrc = this.characterClasses.classImg.orc.female
                    }
                } else if(this.raze.razeName == "dwarf") {
                    if(this.gender == "male") {
                        this.characterImgSrc = this.characterClasses.classImg.dwarf.male
                    } else if(this.gender == "female") {
                        this.characterImgSrc = this.characterClasses.classImg.dwarf.female
                    }
                }
            }
        }
    }
}

class Razes {
    constructor(razeName, razeSkills, razeLore, razeMusicBK, razeBKImg, razeImgFemale, razeImgMale, availableClassesObj, dualRaze=false) {
        this.razeName = razeName,
        this.razeSkills = razeSkills,
        this.razeLore = razeLore,
        this.razeMusicBK = razeMusicBK,
        this.razeBKImg = razeBKImg,
        this.dualRaze = dualRaze
        this.razeImgFemale = razeImgFemale
        this.razeImgMale = razeImgMale
        this.availableClasses = availableClassesObj
    }
}

class CharacterClass {
    constructor(className, classSkills, classLore, imgObj, dualClass=false){
        this.className = className
        this.classSkills = classSkills,
        this.classLore = classLore,
        this.dualClass = dualClass
        this.classIconSrc = "img/thumbnails/" + className + "Label.png"
        this.classImg = imgObj
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
const startScreen = document.getElementById("startScreen")
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
const taverAudio = new Audio("audio/tavern.mp3")
playlist.push(taverAudio)
const humansAudio = new Audio("audio/human.mp3")
playlist.push(humansAudio)
const elfsAudio = new Audio("audio/elf.mp3")
playlist.push(elfsAudio)
const orcsAudio = new Audio("audio/orc.mp3")
playlist.push(orcsAudio)
const dwarfsAudio = new Audio("audio/dwarf.mp3")
playlist.push(dwarfsAudio)

/*Clases Seleccionables*/
let playableClasses = []
/*dualClasses */
const dragonSlayer = new CharacterClass ("dragonSlayer", ["Dragon Killer", "Scales Skin", "Fire's Breath"], "lorem impsum x 100")
/*playableClasses.push(dragonSlayer)*/

/*standarClasses */
const assasin = new CharacterClass ("assasin", [], "lorem ipsum x 100", assasinImg)
playableClasses.push(assasin)

const barbarian = new CharacterClass ("barbarian", [], "lorem ipsum x 100", barbarianImg)
playableClasses.push(barbarian)

const berzerker = new CharacterClass ("berzerker", [], "lorem ipsum x 100", berzerkerImg)
playableClasses.push(berzerker)

const caster = new CharacterClass ("caster", [], "lorem ipsum x 100", casterImg)
playableClasses.push(caster)

const celestialDefender = new CharacterClass ("celestialDefender", [], "lorem ipsum x 100", celestialDefenderImg)
playableClasses.push(celestialDefender)

const crusader = new CharacterClass ("crusader", [], "lorem ipsum x 100", crusaderImg)
playableClasses.push(crusader)

const dragonTaimer = new CharacterClass ("dragonTaimer", [], "lorem ipsum x 100", dragonTaimerImg)
playableClasses.push(dragonTaimer)

const fighter = new CharacterClass ("fighter", [], "lorem ipsum x 100", fighterImg)
playableClasses.push(fighter)

const explorer = new CharacterClass ("explorer", [], "lorem ipsum x 100", explorerImg)
playableClasses.push(explorer)

const hunter = new CharacterClass ("hunter", [], "lorem ipsum x 100", hunterImg)
playableClasses.push(hunter)

const ironLord = new CharacterClass ("ironLord", [], "lorem ipsum x 100", ironLordImg)
playableClasses.push(ironLord)

const knight = new CharacterClass ("knight", [], "lorem ipsum x 100", knightImg)
playableClasses.push(knight)

const monk = new CharacterClass ("monk", [], "lorem ipsum x 100", monkImg)
playableClasses.push(monk)

const necromancer = new CharacterClass ("necromancer", [], "lorem ipsum x 100", necromancerImg)
playableClasses.push(necromancer)

const paladin = new CharacterClass ("paladin", [], "lorem ipsum x 100", paladinImg)
playableClasses.push(paladin)

const priest = new CharacterClass ("priest", [], "lorem ipsum x 100", priestImg)
playableClasses.push(priest)

const ranger = new CharacterClass ("ranger", [], "lorem ipsum x 100", rangerImg)
playableClasses.push(ranger)

const shaman = new CharacterClass ("shaman", [], "lorem ipsum x 100", shamanImg)
playableClasses.push(shaman)

const warchief = new CharacterClass ("warchief", [], "lorem ipsum x 100", warchiefImg)
playableClasses.push(warchief)

const warlock = new CharacterClass ("warlock", [], "lorem ipsum x 100", warlockImg)
playableClasses.push(warlock)

const warrior = new CharacterClass ("warrior", [], "lorem ipsum x 100", warriorImg)
playableClasses.push(warrior)

/*Razas seleccionables*/
const playableRazes = []

const elfAvailableClasses = {
    male: [
        assasin,
        /*bard,*/
        caster,
        celestialDefender,
        /*druid,*/
        hunter,
        paladin,
        ranger,
        /*samurai,*/
        warrior,
        warlock
    ],
    female: [
        assasin,
        caster,
        dragonTaimer,
        /*druid, */
        hunter,
        knight,
        paladin,
        priest,
        ranger,
        /*samurai,*/
        warrior,
        warlock
    ]
}
const elf = new Razes ("elf", ["Mystical Perception", "Blood Linage Wisdom"], "Lorem Ipsumx100", elfsAudio, new Image().src="https://i.imgur.com/SylK7Kb.png", "img/elffemale.png", "img/elfmale.png", elfAvailableClasses, true)
playableRazes.push(elf)

const orcAvailableClasses = {
    male: [
        barbarian,
        berzerker,
        /*bard,*/
        hunter,
        necromancer,
        ranger,
        /*rider,*/
        shaman,
        warchief,
        warrior,
        warlock
    ],
    female: [
        assasin,
        barbarian,
        fighter,
        hunter,
        priest,
        ranger,
        warrior,
        warlock
    ]
}

const orc = new Razes ("orc", ["Brutal Intimidation", "Beast's Authority"], "Lorem Ipsum", orcsAudio, new Image().src="img/orcgrimmBastion.png","img/orcfemale.png", "https://i.imgur.com/BHSVxDH.png", orcAvailableClasses, true)
playableRazes.push(orc)

const humanAvailableClasses = {
    male: [
        assasin,
        barbarian,
        berzerker,
        /*bard,*/
        caster,
        crusader,
        fighter,
        hunter,
        knight,
        paladin,
        /*raider,*/
        /*samurai,*/
        warrior
    ],
    female: [
        barbarian,
        /*bard,*/
        berzerker,
        caster,
        crusader,
        /*druid, */
        fighter,
        /*gunslinger, */
        knight,
        monk,
        priest,
        ranger,
        /*samurai*/
        shaman,
        warrior,
        warlock
    ]
}

const human = new Razes ("human", ["Weapon Proficiency", "General's Leadership"], "Lorem ipsum", humansAudio, new Image().src="img/ellukiaDowntowns.png", "img/humanfemale.png", "img/humanmale.png", humanAvailableClasses, true)
playableRazes.push(human)

const dwarfAvailableClasses = {
    male: [
        assasin,
        barbarian,
        caster,
        explorer,
        ironLord,
        paladin,
        priest,
        ranger,
        shaman,
        warrior,
        warlock
    ],
    female: [
        explorer,
        paladin,
        priest,
        ranger,
        warrior,
    ]
}

const dwarf = new Razes ("dwarf", [], "lorem ipsum", dwarfsAudio, new Image().src="img/fareastIronFederation.png", "img/dwarffemale.png", "img/dwarfmale.png", dwarfAvailableClasses, true)
playableRazes.push(dwarf)



function init(){
    hideSections(startScreen)
    
    continueButton.forEach((button) => {
        if(button.id == "newGame"){
            button.addEventListener("click", generateNewCharacter)
            button.addEventListener("click", () => setRazeBackground())
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
        displayClasses(character.raze)
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
        character.characterClasses = undefined
        character.raze = undefined
        setRazeBackground()
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

    if(!selectedRaze){
        document.body.style.backgroundImage = `url(https://i.imgur.com/svtJbZs.jpg)`
        taverAudio.play()
        return false
    }
    
    playableRazes.forEach((raze) => {
        if(raze.razeName == selectedRaze.razeName) {
            document.body.style.backgroundImage = `url(${raze.razeBKImg})`
            raze.razeMusicBK.play()
            return false

        }
    })
    
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
    enableRazeSelection()
}

function setCharacterName() {
    character.name = characterNameInput.value
}

function enableRazeSelection() {
    razes.forEach((raze) => {
        raze.disabled = false
    })
}

function showRazes(e) {
    let targetedImg = e.target
    /*let limit = 0

    razes.forEach((raze) => {
        if(raze.checked){
            limit++
        }
    })*/

    /*if(limit<=1){*/
       for(let i = 0; i < razes.length; i++){ 
        //Iteramos sobre el arreglo "razes" para verificar si "target:checked" y si hay otro elemento ":checked" ademas de "target"
        if (targetedImg.checked && razes[i].checked && targetedImg.id!=razes[i].id){
                let dualRazeSelection = targetedImg.id + "" + razes[i].id
                character.raze = razeSelection(dualRazeSelection)
                character.setImg()
                characterImgRazes.src = character.characterImgSrc
                return false
            } }

        for(let i = 0; i < razes.length; i++) {
            //Si no, iteramos sobre el arreglo "razes" de nuevo para mostrar solo el elemento "razes[x]:checked", o el elemento "target:checked" segun corresponda
            if(razes[i].checked) {
                razeSelection(razes[i])
                character.setImg()
                characterImgRazes.src = character.characterImgSrc
                return false
            }
            if (targetedImg.checked) {
                razeSelection(targetedImg)
                character.setImg()
                characterImgRazes.src = character.characterImgSrc
                return false
            } 
            characterImgRazes.src = character.characterImgSrc
            } 

        } 
        
function razeSelection(razeLabelChecked){
    playableRazes.forEach((raze) => {
        if(raze.razeName == razeLabelChecked.id){
            character.raze = raze
        }
    })
}

function showClasses(e) {
    let targetedImg= e.target

       for(let i = 0; i < playableClasses.length; i++){ 
        //Iteramos sobre el arreglo "razes" para verificar si "target:checked" y si hay otro elemento ":checked" ademas de "target"
        if (targetedImg.checked && playableClasses[i].checked && targetedImg.id!=playableClasses[i].id){

                let classLabelString = targetedImg.id + "" + playableClasses[i].id
               classSelection(classLabelString)

                character.setImg()
               
                characterImgClasses.src = character.characterImgSrc
                
                return false
            } }
        for(let i = 0; i < playableClasses.length; i++) {
            //Si no, iteramos sobre el arreglo "razes" de nuevo para mostrar, o el elemento "":checked", o el elemento "target:checked" segun corresponda
            if(playableClasses[i].checked) {
                classSelection(playableClasses[i].id)

                character.setImg()

                characterImgClasses.src = character.characterImgSrc
    
                return false
            }
            if (targetedImg.checked) {
                classSelection(targetedImg.id)
                character.setImg()
                
                characterImgClasses.src = character.characterImgSrc
    
                return false
            } 
            characterImgClasses.src = characterImgRazes.src} 
    } 

function classSelection(classLabelString){
    playableClasses.forEach((pClass) => {
        if(pClass.className == classLabelString){
            character.characterClasses = pClass
        }
    })
}

function displayClasses(characterRaze){
    characterClassesForm.innerHTML = ""
    if(character.gender == "male") {
        characterRaze.availableClasses.male.forEach((pClass) =>{
            createClassSelectors(pClass)
        })
    } else if(character.gender == "female") {
        characterRaze.availableClasses.female.forEach((pClass) =>{
            createClassSelectors(pClass)
        })
    }
}

function createClassSelectors(characterClass) {
    let input = document.createElement("input")
    input.setAttribute("type", "radio")
    input.setAttribute("class", "classes")
    input.setAttribute("name", "pClasses")
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
        if(selectedSection.id == "startScreen"){
            section.style.display = "none"
            selectedSection.style.display = "flex"
        } else if(selectedSection.id == "branding"){
            section.style.display = "none"
            selectedSection.style.display = "flex"
            setTimeout(() => hideSections(mainMenu), 14000)
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
        let reRollScore = statCalculator()
        statScore.innerHTML = reRollScore

        if(stat == "CON"){
            diceRolls.CONScore = reRollScore
        } else if(stat == "STR"){
            diceRolls.STRScore = reRollScore
        } else if(stat == "DEX"){
            diceRolls.DEXScore = reRollScore 
        } else if(stat == "INT"){
            diceRolls.INTScore = reRollScore
        } else if(stat == "WIS"){
            diceRolls.WISScore = reRollScore
        } else if(stat == "CHA"){
            diceRolls.CHAScore = reRollScore
        }

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
    setRazeBackground(character.raze)

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
                    }
                }
            })
        }
    })
}

window.addEventListener("load", init)