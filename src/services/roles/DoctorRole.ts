import { Role } from "../Role";
import { RoleSide } from "../RoleInformation";
import { KillAction } from "../actions/KillAction";


export class DoctorRole extends Role {
  constructor() {
    super({
      name: "دکتر",
      side: RoleSide.vanilla,
      actions: [
        new KillAction()
      ]
    });
  }
}
