import * as React from 'react';
import { Player } from './Player';
import { ListItem } from 'material-ui';

interface PlayerProps {
    key: string;
    player: Player;
}

export default class PlayerCard extends React.Component<PlayerProps, {}> {
    render() {
        const { player } = this.props;
        return (
            <ListItem primaryText={player.name} />
        );
    }
}
