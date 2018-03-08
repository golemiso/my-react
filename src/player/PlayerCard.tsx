import * as React from 'react';
import { Player } from './Player';
import { ConnectDragSource, DragSource, DragSourceCollector, DragSourceSpec } from 'react-dnd';
import { ItemTypes } from '../app/common/Constants';

const dragSourceSpec: DragSourceSpec<PlayerProps> = {
    beginDrag(props: PlayerProps) {
        return { playerId: props.player.id };
    }
};

const collect: DragSourceCollector = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
};

interface PlayerProps {
    key: string;
    player: Player;
    connectDragSource?: ConnectDragSource;
    isDragging?: boolean;
}

class PlayerCard extends React.Component<PlayerProps, {}> {
    render() {
        const { player, connectDragSource, isDragging } = this.props;
        return connectDragSource(
            <div
                style={{
                    opacity: isDragging ? 0 : 1,
                    fontSize: 25,
                    fontWeight: 'bold',
                    cursor: 'move'
                }}
            >
                {player.name}
            </div>
        );
    }
}

export default DragSource(ItemTypes.PLAYER, dragSourceSpec, collect)(PlayerCard);
