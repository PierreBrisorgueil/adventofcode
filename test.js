var assert = require('assert')

describe('advent of code', () => {
    var run = require('./run')

    function test(day, part, expected) {
        var actual = run(day, part)
        return assert.equal(expected, actual)
    }

    it('day 01, part 1', () => test(1, 1, 280))
    it('day 01, part 2', () => test(1, 2, 1797))
    it('day 02, part 1', () => test(2, 1, 1588178))
    it('day 02, part 2', () => test(2, 2, 3783758))
    it('day 03, part 1', () => test(3, 1, 2081))
    it('day 03, part 2', () => test(3, 2, 2341))
    it('day 04, part 1', () => test(4, 1, 254575))
    it('day 04, part 2', () => test(4, 2, 1038736))
    it('day 05, part 1', () => test(5, 1, 255))
    it('day 05, part 2', () => test(5, 2, 55))
    it('day 06, part 1', () => test(6, 1, 543903))
    it('day 06, part 2', () => test(6, 2, 14687245))
    it('day 07, part 1', () => test(7, 1, 16076))
    it('day 07, part 2', () => test(7, 2, 2797))
    it('day 08, part 1', () => test(8, 1, 1342))
    it('day 08, part 2', () => test(8, 2, 2074))
    it('day 09, part 1', () => test(9, 1, 207))
    it('day 09, part 2', () => test(9, 2, 804))
    it('day 10, part 1', () => test(10, 1, 492982))
    it('day 10, part 2', () => test(10, 2, 6989950))
    it('day 11, part 1', () => test(11, 1, 'vzbxxyzz'))
    it('day 11, part 2', () => test(11, 2, 'vzcaabcc'))
    it('day 12, part 1', () => test(12, 1, 191164))
    it('day 12, part 2', () => test(12, 2, 87842))
    it('day 13, part 1', () => test(13, 1, 709))
    it('day 13, part 2', () => test(13, 2, 668))
    it('day 14, part 1', () => test(14, 1, 2696))
    it('day 14, part 2', () => test(14, 2, 1084))
    it('day 15, part 1', () => test(15, 1, 222870))
    it('day 15, part 2', () => test(15, 2, 117936))
    it('day 16, part 1', () => test(16, 1, 213))
    it('day 16, part 2', () => test(16, 2, 323))
    it('day 17, part 1', () => test(17, 1, 1304))
    it('day 17, part 2', () => test(17, 2, 18))
    it('day 18, part 1', () => test(18, 1, 814))
    it('day 18, part 2', () => test(18, 2, 924))
    it('day 19, part 1', () => test(19, 1, 576))
    it('day 19, part 2', () => test(19, 2, 207))
    it('day 20, part 1', () => test(20, 1, 786240))
    it('day 20, part 2', () => test(20, 2, 831600))
})
