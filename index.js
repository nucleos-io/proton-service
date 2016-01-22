'use strict'

/**
 * Base Service
 * Inherit of this class for create services
 */
module.exports = class ProtonService {

  constructor(app) {
    this.app = app
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
    this.app.services[this.name] = this
  }

}
