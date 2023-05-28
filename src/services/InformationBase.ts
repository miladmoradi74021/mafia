import { Information } from './Information';


export abstract class InformationBase<TInformation extends Information>   {
  constructor(information: TInformation) {
    this.information = information;
  }

  information: TInformation;
}
