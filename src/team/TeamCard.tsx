import * as React from 'react';
import PlayerCard from '../player/PlayerCard';
import { Team } from './Team';
import { Card, CardHeader, List } from 'material-ui';

interface TeamProps {
    key: string;
    team: Team;
}

export default class TeamCard extends React.Component<TeamProps, {}> {
    render() {
        const { team } = this.props;
        const playerCards = team.players.map(player => <PlayerCard key={player.id} player={player} />);
        return (
            <Card>
                <CardHeader title={'Team'}/>
                <List>
                {playerCards}
                </List>
            </Card>
        );
    }
}
