const assert = require('assert')

describe('advent of code 2016', () => {
    const run = require('../run')

    function test(day, part, expected) {
        const actual = run(2016, day, part, false)
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
    it('day 05, part 1', () => test(5, 1, 'c6697b55'))
    it('day 05, part 2', () => test(5, 2, '8c35d1ab'))
    it('day 06, part 1', () => test(6, 1, 'bjosfbce'))
    it('day 06, part 2', () => test(6, 2, 'veqfxzfx'))
    it('day 07, part 1', () => test(7, 1, 118))
    it('day 07, part 2', () => test(7, 2, 260))
    it('day 08, part 1', () => test(8, 1, 123))
    it('day 08, part 2', () => test(8, 2, 'AFBUPZBJPS'))
    it('day 09, part 1', () => test(9, 1, 123908))
    it('day 09, part 2', () => test(9, 2, 10755693147))
    it('day 10, part 1', () => test(10, 1, 47))
    it('day 10, part 2', () => test(10, 2, 2666))
    it('day 11, part 1', () => test(11, 1, 37))
    it('day 11, part 2', () => test(11, 2, 61))
    it('day 12, part 1', () => test(12, 1, 318083))
    it('day 12, part 2', () => test(12, 2, 9227737))
    it('day 13, part 1', () => test(13, 1, 90))
    it('day 13, part 2', () => test(13, 2, 135))
    it('day 14, part 1', () => test(14, 1, 35186))
    it('day 14, part 2', () => test(14, 2, 22429))
    it('day 15, part 1', () => test(15, 1, 317371))
    it('day 15, part 2', () => test(15, 2, 2080951))
    it('day 16, part 1', () => test(16, 1, '11101010111100010'))
    it('day 16, part 2', () => test(16, 2, '01001101001000101'))
    it('day 17, part 1', () => test(17, 1, 'RDDRLDRURD'))
    it('day 17, part 2', () => test(17, 2, 448))
    it('day 18, part 1', () => test(18, 1, 1974))
    it('day 18, part 2', () => test(18, 2, 19991126))
    it('day 19, part 1', () => test(19, 1, 1842613))
    it('day 19, part 2', () => test(19, 2, 1424135))
    it('day 20, part 1', () => test(20, 1, 32259706))
    it('day 20, part 2', () => test(20, 2, 113))
    it('day 21, part 1', () => test(21, 1, 'ghfacdbe'))
    it('day 21, part 2', () => test(21, 2, 'fhgcdaeb'))
    it('day 22, part 1', () => test(22, 1, 952))
    it('day 22, part 2', () => test(22, 2, 181))
    it('day 23, part 1', () => test(23, 1, 10500))
    it('day 23, part 2', () => test(23, 2, 479007060))
    it('day 24, part 1', () => test(24, 1, 430))
    it('day 24, part 2', () => test(24, 2, 700))
    it('day 25, part 1', () => test(25, 1, 175))
})
