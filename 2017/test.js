const assert = require('assert')

describe('advent of code 2017', () => {
    const run = require('../run')

    function test(day, part, expected) {
        const actual = run(2017, day, part, false)
        return assert.equal(expected, actual)
    }

    it('day 01, part 1', () => test(1, 1, 1343))
    it('day 01, part 2', () => test(1, 2, 1274))
    it('day 02, part 1', () => test(2, 1, 47136))
    it('day 02, part 2', () => test(2, 2, 250))
    it('day 03, part 1', () => test(3, 1, 430))
    it('day 03, part 2', () => test(3, 2, 312453))
    it('day 04, part 1', () => test(4, 1, 451))
    it('day 04, part 2', () => test(4, 2, 223))
    it('day 05, part 1', () => test(5, 1, 355965))
    it('day 05, part 2', () => test(5, 2, 26948068))
    it('day 06, part 1', () => test(6, 1, 12841))
    it('day 06, part 2', () => test(6, 2, 8038))
    it('day 07, part 1', () => test(7, 1, null))
    it('day 07, part 2', () => test(7, 2, null))

})
