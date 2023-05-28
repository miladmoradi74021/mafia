import { Role } from "../Role";
import { RoleSide } from "../RoleInformation";
import { CheckMafiaAction } from "../actions/CheckMafiaAction";


export class DetectiveRole extends Role {
  constructor() {
    super({
      name: "کاراگاه",
      side: RoleSide.vanilla,
      actions: [
        new CheckMafiaAction()
      ]
    });
  }
}
