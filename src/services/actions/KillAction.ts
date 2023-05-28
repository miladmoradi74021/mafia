import { PlayerStatus } from '../PlayerStatus';
import { Action, ActionResult } from '../Action';
import { Game } from '../Game';
import { SelectPlayerParameter } from "../parameters/SelectPlayerParameter";
import { SelectPlayerParameterValue } from '../parameters/SelectPlayerParameterValue';


export class KillAction extends Action {
  constructor() {
    super({
      name: "شکلیک",
      parameters: [
        new SelectPlayerParameter()
      ]
    });
  }

  override invoke(game: Game, selectedUser: SelectPlayerParameterValue): ActionResult {
    if (!selectedUser.playerName) {
      return ActionResult.Failed("player not selected");
    }

    const player = game.information.players.find((x) => x.information.name == selectedUser.playerName);

    if (!player) {
      return ActionResult.Failed("player not found");
    }

    player.information.status = PlayerStatus.dead;
    return ActionResult.Success();
  }
}
