import { GameInformation } from './GameInformation';
import { InformationBase } from './InformationBase';


export class Game extends InformationBase<GameInformation> {
  constructor(information: GameInformation) {
    super(information);
  }
}



