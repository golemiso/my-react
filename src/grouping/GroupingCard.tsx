import * as React from 'react';
import TeamCard from '../team/TeamCard';
import { Grouping } from './Grouping';
import { Card, CardHeader } from 'material-ui';

interface GroupingProps {
    grouping: Grouping;
}

export default class GroupingCard extends React.Component<GroupingProps, {}> {
    render() {
        const { grouping } = this.props;
        const teamCards = grouping.teams.map(team => <TeamCard key={team.id} team={team} />);
        return (
            <Card>
                <CardHeader title={'Grouping'}/>
                {teamCards}
            </Card>
        );
    }
}
