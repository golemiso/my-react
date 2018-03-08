import * as React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import GroupingCard from '../grouping/GroupingCard';
import { Grouping } from '../grouping/Grouping';

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
        }
    ]
};

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <MuiThemeProvider>
                <GroupingCard grouping={grouping}/>
            </MuiThemeProvider>
        );
    }
}
