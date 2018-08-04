Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acum = valorInicial || this[0]
    for (let i = 1; i < this.length; i++) {
        acum = callback(acum, this[i], i, this)
    }
    return acum
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma))