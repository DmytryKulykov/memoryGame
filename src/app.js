require("./styles/index.less")
let constants = require("./constants.js")
let makers = require("./makers.js")

let state = {
    board: makers.makeRandomBoard(constants.boardSize[0], constants.boardSize[1])
}

