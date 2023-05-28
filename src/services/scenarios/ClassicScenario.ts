import { Scenario } from '../Scenario';
import { GodFatherRole } from '../roles/GodFatherRole';


export class ClassicScenario extends Scenario {
  constructor() {
    super({
      name:"classic",
      roles: [
        new GodFatherRole()
      ]
    });
  }
}
