import pieces from './pieces';

const {
  whitePawn0,
  whitePawn1,
  whitePawn2,
  whitePawn3,
  whitePawn4,
  whitePawn5,
  whitePawn6,
  whitePawn7,
  whiteRook1,
  whiteRook2,
  whiteKnight1,
  whiteKnight2,
  whiteBishop1,
  whiteBishop2,
  whiteKing,
  whiteQueen,
  blackPawn0,
  blackPawn1,
  blackPawn2,
  blackPawn3,
  blackPawn4,
  blackPawn5,
  blackPawn6,
  blackPawn7,
  blackRook1,
  blackRook2,
  blackKnight1,
  blackKnight2,
  blackBishop1,
  blackBishop2,
  blackKing,
  blackQueen
} = pieces;

export const board = [
  [
    whiteRook1,
    whiteKnight1,
    whiteBishop1,
    whiteKing,
    whiteQueen,
    whiteBishop2,
    whiteKnight2,
    whiteRook2
  ],
  [
    whitePawn0,
    whitePawn1,
    whitePawn2,
    whitePawn3,
    whitePawn4,
    whitePawn5,
    whitePawn6,
    whitePawn7
  ],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [
    blackPawn0,
    blackPawn1,
    blackPawn2,
    blackPawn3,
    blackPawn4,
    blackPawn5,
    blackPawn6,
    blackPawn7
  ],
  [
    blackRook2,
    blackKnight2,
    blackBishop2,
    blackQueen,
    blackKing,
    blackBishop1,
    blackKnight1,
    blackRook1
  ]
];
