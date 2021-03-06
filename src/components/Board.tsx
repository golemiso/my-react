import * as React from 'react';
import { observer } from 'mobx-react';
import Game from '../Game';
import BoardSquare from './BoardSquare';
import Knight from './Knight';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

interface BoardProps {
    game: Game;
}

@observer
class Board extends React.Component<BoardProps, {}> {
    render() {
        const squares = [];
        for (let i = 0; i < 64; i++) {
            squares.push(this.renderSquare(i));
        }

        return (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}
            >
                {squares}
            </div>
        );
    }

    renderSquare(i: number) {
        const {game} = this.props;
        const x = i % 8;
        const y = Math.floor(i / 8);
        return (
            <div
                key={i}
                style={{width: '12.5%', height: '12.5%'}}
            >
                <BoardSquare
                    game={game}
                    x={x}
                    y={y}
                >
                    {this.renderPiece(x, y)}
                </BoardSquare>
            </div>
        );
    }

    renderPiece(x: number, y: number) {
        const [knightX, knightY] = this.props.game.knightPosition;
        if (x === knightX && y === knightY) {
            return <Knight/>;
        }
        return '_';
    }

}

export default DragDropContext(HTML5Backend)(Board);
