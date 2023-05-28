import { InformationBase } from './InformationBase';
import { PlayerInformation } from './PlayerInformation';


export class Player extends InformationBase<PlayerInformation> {
  constructor(information: PlayerInformation) {
    super(information);
  }
}


