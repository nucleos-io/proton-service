'use strict'

/**
 *
 */
module.exports = class ProtonService {

  constructor(app) {
    if (!app.services) {
      app.services = {}
    }

    app.services[this.name] = this
    this.app = app

    if (this.isGlobal()) {
      global[this.name] = this
    }
  }

  isGlobal() {
    return true
  }

  get name() {
    return this.constructor.name
  }
}
