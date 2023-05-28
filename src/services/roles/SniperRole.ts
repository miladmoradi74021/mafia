import { RoleSide } from "../RoleInformation";
import { KillAction } from "../actions/KillAction";
import { VanillaRole } from "./VanillaRole";


export class SniperRole extends VanillaRole {
  constructor() {
    super({
      name: "اسنایپر",
      side: RoleSide.vanilla,
      actions: [
        new KillAction()
      ]
    });
  }
}
