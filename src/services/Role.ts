import { InformationBase } from './InformationBase';
import { RoleInformation } from './RoleInformation';


export class Role extends InformationBase<RoleInformation> {
  constructor(information: RoleInformation) {
    super(information);
  }
}


