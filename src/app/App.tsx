import * as React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import GroupingCard from '../grouping/GroupingCard';
import { Grouping } from '../grouping/Grouping';
import GroupingContext from '../grouping/GroupingContext';

const grouping: Grouping = {
    id: '0',
    teams: [
        {
            id: '0',
            players: [
                {
                    id: '0',
                    name: 'NAME0'
                },
                {
                    id: '1',
                    name: 'NAME1'
                },
                {
                    id: '2',
                    name: 'NAME2'
                },
                {
                    id: '3',
                    name: 'NAME3'
                }
            ]
        },
        {
            id: '1',
            players: [
                {
                    id: '4',
                    name: 'NAME4'
                },
                {
                    id: '5',
                    name: 'NAME5'
                },
                {
                    id: '6',
                    name: 'NAME6'
                },
                {
                    id: '7',
                    name: 'NAME7'
                }
            ]
        }
    ]
};

export default class App extends React.Component<{}, {}> {
    render() {
        const context = new GroupingContext(grouping);
        return (
            <MuiThemeProvider>
                <GroupingCard context={context}/>
            </MuiThemeProvider>
        );
    }
}
