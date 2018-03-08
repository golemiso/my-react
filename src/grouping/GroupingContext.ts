import { observable } from 'mobx';
import { Grouping } from './Grouping';

export default class GroupingContext {

    @observable grouping: Grouping;

    constructor(grouping: Grouping) {
        this.grouping = grouping;
    }

    movePlayer(toTeamId: string, playerId: string): void {
        const grouping = this.grouping;
        const fromTeam = grouping.teams.find(team => team.players.some(player => player.id === playerId));
        const droppedPlayer = fromTeam.players.find(player => player.id === playerId);

        this.grouping.teams = grouping.teams.map(team => {
            if (team.id === fromTeam.id) {
                team.players = team.players.filter(player => player.id !== droppedPlayer.id);
            }
            return team;
        }).map(team => {
            if (team.id === toTeamId) {
                team.players.push(droppedPlayer);
            }
            return team;
        });
    }

    canMovePlayer(toTeamId: string, playerId: string) {
        const grouping = this.grouping;
        const fromTeam = grouping.teams.find(team => team.players.some(player => player.id === playerId));
        return toTeamId !== fromTeam.id;
    }
}
