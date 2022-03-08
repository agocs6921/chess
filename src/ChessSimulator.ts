namespace ChessSimulator {
    const [X, Y] = [8, 8]

    const _1DTo2D = (i: number) => [i % X, Math.floor(i / X)]

    enum BlackPieces {
        KING = "♚",
        QUEEN = "♛",
        ROOK = "♜",
        BISHOP = "♝",
        KNIGHT = "♞",
        PAWN = "♟︎"
    }
    enum WhitePieces {
        KING = "♔",
        QUEEN = "♕",
        ROOK = "♖",
        BISHOP = "♗",
        KNIGHT = "♘",
        PAWN = "♙"
    }
    class PieceWrapper {
        constructor(public readonly piece: BlackPieces | WhitePieces, public x = 0, public y = 0) {}
    }

    class Board {
        public readonly tiles: PieceWrapper[]

        constructor(tiles: (BlackPieces | WhitePieces)[]) {
            this.tiles = Array<PieceWrapper>(X*Y).fill(undefined)

            tiles.forEach((v, i) => {
                this.tiles[i] = new PieceWrapper(v, ..._1DTo2D(i))
            })
        }
    }

    export class Simulator {
        constructor(private b: Board) {}

        get board() {
            return this.b
        }
    }
}

export default ChessSimulator