import { getLargest, sumAll } from './utils'

describe('utils', () => {
  describe('add()', () => {
    test('should add two numbers', () => {
      expect(sumAll(10)).toEqual(55)
    })
  })

  describe('getLargest', () => {
    test('should getLargest', () => {
      expect(getLargest([])).toEqual(0)
      expect(getLargest([1, 3, 5, -3])).toEqual(5)
    })
  })
})
