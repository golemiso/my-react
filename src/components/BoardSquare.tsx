import * as React from "react";
import {Game} from "../Game";
import {Square} from "./Square";
import {DropTarget, DropTargetSpec, DropTargetCollector, ConnectDropTarget} from "react-dnd";
import {ItemTypes} from "../Constants";

const squareTarget: DropTargetSpec<BoardSquareProps> = {
    canDrop(props) {
        return props.game.canMoveKnight(props.x, props.y);
    },
      drop(props) {
        props.game.moveKnight(props.x, props.y);
      }
};

const collect: DropTargetCollector = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
  };
};

export interface BoardSquareProps {
    game: Game;
    x: number;
    y: number;
    connectDropTarget?: ConnectDropTarget;
    isOver?: boolean;
    canDrop?: boolean;
}

class BoardSquare extends React.Component<BoardSquareProps, {}> {

    renderOverlay(color: string) {
        return (
            <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }} />
        );
    }

    render() {
        const { x, y, connectDropTarget, isOver, canDrop } = this.props;
        const black = (x + y) % 2 === 1;

        return connectDropTarget(
            <div style={{ position: 'relative', width: "100%", height: "100%" }}>
                <Square black={black}>
                    {this.props.children}
                </Square>
                {isOver && !canDrop && this.renderOverlay('red')}
                {!isOver && canDrop && this.renderOverlay('yellow')}
                {isOver && canDrop && this.renderOverlay('green')}
            </div>
        );
    }
}

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);
