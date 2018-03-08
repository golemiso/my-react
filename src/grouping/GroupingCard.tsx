import * as React from 'react';
import TeamCard from '../team/TeamCard';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import GroupingContext from './GroupingContext';
import { observer } from 'mobx-react';

interface GroupingProps {
    context: GroupingContext;
}

@observer
class GroupingCard extends React.Component<GroupingProps, {}> {
    render() {
        const { context } = this.props;
        const teamCards =
            context.grouping.teams.map(team => {
                return (
                    <TeamCard key={team.id} team={team} context={context} />
                );
            });
        return (
            <div>
                {teamCards}
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(GroupingCard);
