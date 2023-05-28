import { Role } from "../Role";
import { RoleSide } from "../RoleInformation";
import { KillAction } from "../actions/KillAction";

export class GodFatherRole extends Role {
  constructor() {
    super({
      name: "پدر خوانده",
      side: RoleSide.mafia,
      actions: [
        new KillAction()
      ]
    });
  }
}


