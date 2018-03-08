import * as React from 'react';
import PlayerCard from '../player/PlayerCard';
import { Team } from './Team';
import { ItemTypes } from '../app/common/Constants';
import { ConnectDropTarget, DropTarget, DropTargetCollector, DropTargetSpec, DropTargetMonitor } from 'react-dnd';
import GroupingContext from '../grouping/GroupingContext';
import { observer } from 'mobx-react';

const dropTargetSpec: DropTargetSpec<TeamProps> = {
    canDrop(props: TeamProps, monitor: DropTargetMonitor) {
        const { team, context } = props;
        const playerId = (monitor.getItem() as { playerId: string }).playerId;
        return context.canMovePlayer(team.id, playerId);
    },
    drop(props: TeamProps, monitor: DropTargetMonitor) {
        const { team, context } = props;
        const playerId = (monitor.getItem() as { playerId: string }).playerId;
        context.movePlayer(team.id, playerId);
    }
};

const collect: DropTargetCollector = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
};

interface TeamProps {
    key: string;
    team: Team;
    context: GroupingContext;
    connectDropTarget?: ConnectDropTarget;
    isOver?: boolean;
    canDrop?: boolean;
}

@observer
class TeamCard extends React.Component<TeamProps, {}> {
    renderOverlay(color: string) {
        return (
            <div
                className={'overlay'}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    zIndex: 1,
                    opacity: 0.5,
                    backgroundColor: color,
                }}
            />
        );
    }

    render() {
        const { team, connectDropTarget, isOver, canDrop } = this.props;
        const playerCards = team.players.map(player => <PlayerCard key={player.id} player={player} />);
        return connectDropTarget(
            <div className={'Team'} style={{position: 'relative', width: '100%', height: '100%'}} >
                {playerCards}

                {isOver && !canDrop && this.renderOverlay('red')}
                {!isOver && canDrop && this.renderOverlay('yellow')}
                {isOver && canDrop && this.renderOverlay('green')}
            </div>
        );
    }
}

export default DropTarget(ItemTypes.PLAYER, dropTargetSpec, collect)(TeamCard);
