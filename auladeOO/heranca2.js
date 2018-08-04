// Cadei de protótipos (prototype chain)
Object.prototype.atr0 = '0' // <- deve-se evitar esse tipo de situação!
const avo = { atr1: 'A' }
const pai = { __proto__: avo, atr2: 'B' }
const filho = { __proto__: pai, atr3: 'C' }
console.log(filho.atr0, filho.atr1, filho.atr2, filho.atr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari ={
    modelo: 'M40',
    velMax: 324, // shadowing
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())
ferrari.acelerarMais(300)
console.log(ferrari.status())