'use strict'
const expect = require('chai').expect
const board = require('../app/js/board')
const logic = require ('../app/js/logic')

let currentBoard = board.buildBoard()

describe('loads board', () => {
  it('Loads board with 8 rows', () => {
    expect(board.makeStartingBoard(board.buildBoard()).length).to.equal(8)
  })
  it('Loads board with 8 columns', () => {
    expect(board.makeStartingBoard(board.buildBoard()).length).to.equal(8)
  })
})

describe('place piece', () => {
  it('places piece on square', () => {
    currentBoard = board.buildBoard()
    expect(logic.placePiece(currentBoard, 'WPn', [2,3])[2][3]).to.equal('WPn')
  })
})

describe('moves piece', () => {
  it('moves piece up one column', () => {
    currentBoard = logic.placePiece(board.buildBoard(), 'WPn', [0,0])
    expect(logic.makeMove(currentBoard, 'WPn', [0,0], [1,0])[1][0]).to.equal('WPn')
  })
})

describe('check if square is occupied', () => {
  it('returns true if space is occupied', () => {
    currentBoard = board.buildBoard()
    expect(logic.checkIfOccupied(currentBoard, [0,1])).to.equal(true)
  })

})

describe('move piece with piece in way', () => {
  it('route is obstructed', () => {
    currentBoard = board.buildBoard()
    currentBoard = logic.placePiece(board.buildBoard(), 'WPn', [3,4])
    expect(logic.makeMove(currentBoard, 'WQn', [3,0], [3,6])).to.equal('retry')
    expect(logic.placePiece(currentBoard, 'WPn', [3,4]))[3][4].to.equal('WPn')
  })
})
