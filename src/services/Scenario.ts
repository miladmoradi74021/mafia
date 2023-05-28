import { ScenarioInformation } from './ScenarioInformation';
import { InformationBase } from './InformationBase';


export class Scenario extends InformationBase<ScenarioInformation> {
  constructor(information: ScenarioInformation) {
    super(information);
  }
}


