let Person = require('./02. Inheriting toString');
function extendClass(classToExtend) {
   classToExtend.prototype.species = 'Human';
   classToExtend.prototype.toSpeciesString = function () {
       return `I am a ${this.species}. ${this.toString()}`;
   }
}

extendClass(Person)

let p = new Person('Pesho', 'mail');
console.log(p.species)
console.log(p.toSpeciesString())
console.log(p.toString())

