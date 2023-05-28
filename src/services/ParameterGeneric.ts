import { ParameterValue } from "./ParameterValue";
import { Parameter } from "./Parameter";


export abstract class ParameterGeneric<TParameterValue extends ParameterValue> extends Parameter {
  buildValue(value: TParameterValue): TParameterValue {
    return value;
  }
}
