import * as yup from 'yup';
import {
  ConvectorModel,
  Default,
  ReadOnly,
  Required,
  Validate,
  FlatConvectorModel
} from '@worldsibu/convector-core-model';

export class Owner extends ConvectorModel<Owner> {
  @ReadOnly()
  @Required()
  public readonly type = 'io.worldsibu.owner';

  @Required()
  @ReadOnly()
  @Validate(yup.date())
  public fechaCompra: number;

  @Required()
  @Validate(yup.string())
  public ownerID: string;
}

export class Motocicleta extends ConvectorModel<Motocicleta> {
  @ReadOnly()
  @Required()
  public readonly type = 'io.worldsibu.motocicleta';

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public placa: string;

  @ReadOnly()
  @Required()
  @Validate(yup.number())
  public modelo: number;

  @Required()
  @Validate(yup.string())
  public color: string;

  @ReadOnly()
  @Required()
  @Validate(yup.string())string
  public marca: string;  

  @Required()
  @Validate(yup.number())
  public kilometraje: number;
  
  @Required()
  @Validate(yup.number())
  public precio: number;
  
  @Required()
  @Validate(Owner)
  public owner: FlatConvectorModel<Owner>;
}
