let R = require('ramda')
let helpers = require("./helpers/common.js")

let makeRandomBoard = (m, n) => {
    let total = m * n
    if (total % 2) {
        throw Error(`m * n must be divisible on 2, got ${m} * ${n} = ${total}`)
    }
    let partialLetters = R.map((x) => String.fromCharCode(65 + x), R.range(0, total / 2))
    let fullLetters = R.unnest(R.repeat(partialLetters, 2))
    let letters = helpers.shuffleArray(fullLetters)
    let cells = R.map((l) => [l, "closed"], letters)
    return R.splitEvery(n, cells)
}

let makeTestBoard = (m, n, l) => {
    let letters = R.map((x) => l, R.range(0, m * n))
    let cells = R.map((l) => [l, 'closed'], letters)
    return R.splitEvery(n, cells)
}

exports.makeRandomBoard = makeRandomBoard
exports.makeTestBoard = makeTestBoard