import { Role } from "../Role";
import { RoleSide } from "../RoleInformation";
import { KillAction } from "../actions/KillAction";


export class MafiaDoctorRole extends Role {
  constructor() {
    super({
      name: "دکتر مافیا",
      side: RoleSide.mafia,
      actions: [
        new KillAction()
      ]
    });
  }
}
