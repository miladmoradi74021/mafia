import { Role } from "../Role";
import { RoleSide } from "../RoleInformation";
import { KillAction } from "../actions/KillAction";


export class MafiaRole extends Role {
  constructor() {
    super({
      name: "مافیا",
      side: RoleSide.mafia,
      actions: [
        new KillAction()
      ]
    });
  }
}
