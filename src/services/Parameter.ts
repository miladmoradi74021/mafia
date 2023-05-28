import { ParameterValue } from "./ParameterValue";

export abstract class Parameter {
  abstract buildValue(...args: any[]): ParameterValue;
}


