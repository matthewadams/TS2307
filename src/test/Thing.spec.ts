import { expect } from 'chai'
import Thing from '../main/Thing'

describe('Thing', () => {
  it('should be woven', () => {
    Thing.staticMethod()

    const it = Thing.new('hey', 1)
    it.method()
    it.s = 'farts'
    it.t += 1
  })
})
