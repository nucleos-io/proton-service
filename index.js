'use strict'


const Gluon = require('proton-gluon')


/**
 * @class
 * @classdesc this class define a proton service
 * @author Luis Hernandez
 */
class ProtonService extends Gluon {

  constructor(proton) {
    this.proton = proton
  }

  expose(service) {
    global[this.name] = service
  }

  get name() {
    return this.constructor.name
  }

  set fileName(fileName) {
    this.fileName = fileName
  }


}

module.exports = ProtonService
