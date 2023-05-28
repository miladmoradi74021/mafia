import { Scenario } from './Scenario';
import { Information } from './Information';
import { Player } from './Player';



export class GameInformation extends Information {
  scenario!: Scenario;
  players: Player[] = [];
}
