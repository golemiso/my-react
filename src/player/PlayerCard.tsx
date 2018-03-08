import * as React from 'react';
import { Player } from './Player';

interface PlayerProps {
    key: string;
    player: Player;
}

export default class PlayerCard extends React.Component<PlayerProps, {}> {
    render() {
        const { player } = this.props;
        return (
            <div>
                {player.name}
            </div>
        );
    }
}
