alert('здравствуйте это игра на подобие тамагочи ))')
const breed = prompt('какая порода вашегшо животного ?')
const name = prompt('как вы назовете своего питомца ?')
alert('для взаемодействия со своим питомцем используйте такие команды')
alert('pet.eat,    pet.game,    pet.sleep,    speak')

let pet = {
    breed: (breed),
    name: (name),
    energi: 5,
    hunger: 5,
    sleepiness: 5,
    mood: 5,
}

console.log(pet)

pet.eat = function () { 
    this.hunger++
    this.mood++
    this.sleepiness--
}

pet.game = function () {
    this.mood++
    this.energi--
    this.sleepiness--
    this.hunger--
}

pet.sleep = function () {
    this.sleepiness++
    this.energi++
    this.hunger--
}

speak = function () {
    alert('привет меня зовут ' + pet.name)
    prompt('а как зовут тебя ?')
}
