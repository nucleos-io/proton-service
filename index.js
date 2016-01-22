'use strict'

/**
 * Base Service
 * Inherit of this class for create services
 */
module.exports = class ProtonService {

  constructor(proton) {
    this.proton = proton
    this._bindToApp()
    this.expose()
  }

  /**
   * @return class name
   */
  get name() {
    return this.constructor.name
  }

  /**
   * @description Expose this service globally,
   * Overwrite and return false for not expose the service
   *
   * @return true | false
   */
  expose() {
    global[this.name] = this
    return true
  }

  /**
   * @description Bind this service to the app.services objects
   */
  _bindToApp() {
    this.proton.app.services[this.name] = this
  }

}
