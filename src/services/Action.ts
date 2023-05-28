import { Parameter } from './Parameter';
import { ParameterValue } from "./ParameterValue";
import { Game } from './Game';
import { InformationBase } from './InformationBase';
import { Information } from './Information';


export abstract class Action extends InformationBase<ActionInformation> {
  constructor(information: ActionInformation) {
    super(information);
  }

  abstract invoke(game: Game, ...values: ParameterValue[]): ActionResult;
}

export class ActionInformation extends Information {
  parameters: ParameterValue[] = [];
}

export abstract class ActionResult {
  [key: string]: any;

  static Success(): SuccessActionResult {
    return new SuccessActionResult()
  }

  static Failed(message: string | undefined = undefined): FailedActionResult {
    return {
      message: message
    }
  }
}

export class SuccessActionResult extends ActionResult {
}

export class FailedActionResult extends ActionResult {
  message: string | undefined;
}

export class ValueActionResult<TValue> extends ActionResult {
  constructor(value: TValue) {
    super();
    this.value = value;
  }

  value: TValue;
}


export class LogActionResult extends ActionResult {

}
