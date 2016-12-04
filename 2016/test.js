const assert = require('assert')

describe('advent of code', () => {
    const run = require('../run')

    function test(day, part, expected) {
        const actual = run(2016, day, part)
        return assert.equal(expected, actual)
    }

    it('day 01, part 1', () => test(1, 1, 161))
    it('day 01, part 2', () => test(1, 2, 110))
    it('day 02, part 1', () => test(2, 1, 56855))
    it('day 02, part 2', () => test(2, 2, 'B3C27'))
    it('day 03, part 1', () => test(3, 1, 982))
    it('day 03, part 2', () => test(3, 2, 1826))
    it('day 04, part 1', () => test(4, 1, 409147))
    it('day 04, part 2', () => test(4, 2, 991))
})