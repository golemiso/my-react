import { Player } from '../player/Player';

export interface Team {
    id: string;
    players: Array<Player>;
}
