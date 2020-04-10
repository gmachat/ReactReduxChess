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
  whiteRook0,
  whiteRook1,
  whiteKnight0,
  whiteKnight1,
  whiteBishop0,
  whiteBishop1,
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
  blackRook0,
  blackRook1,
  blackKnight0,
  blackKnight1,
  blackBishop0,
  blackBishop1,
  blackKing,
  blackQueen
} = pieces;

export const board = [
  [
    whiteRook0,
    whiteKnight0,
    whiteBishop0,
    whiteKing,
    whiteQueen,
    whiteBishop1,
    whiteKnight1,
    whiteRook1
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
    blackRook1,
    blackKnight1,
    blackBishop1,
    blackQueen,
    blackKing,
    blackBishop0,
    blackKnight0,
    blackRook0
  ]
];
