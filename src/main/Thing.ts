import { Wove as Advised } from 'aspect.js'
import './aspects/Aspect'

@Advised()
export default class Thing {
  static new (s: string = '', t: number = 0) {
    return new Thing(...arguments)
  }

  static staticMethod () {
    return 'staticMethod'
  }

  _s: string = ''
  _t: number = 0

  constructor (s: string = '', t: number = 0) {
    this.s = s
    this.t = t
  }

  method () {
    return 'method'
  }

  get s () { return this._s }

  set s (value) { this._s = value }

  get t () { return this._t }

  set t (value) { this._t = value }
}
