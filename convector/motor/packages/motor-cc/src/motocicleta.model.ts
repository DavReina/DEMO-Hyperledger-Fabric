import * as yup from 'yup';
import {
  ConvectorModel,
  Default,
  ReadOnly,
  Required,
  Validate,
  FlatConvectorModel
} from '@worldsibu/convector-core-model';

export class Usuario extends ConvectorModel<Usuario> {
  @ReadOnly()
  @Required()
  public readonly type = 'io.worldsibu.usuario';

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public nombre: string;

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public apellido: string;

  @Required()
  @Validate(yup.string())
  public edad: string;

  @ReadOnly()
  @Required()
  @Validate(yup.number())
  public cedula: number;

  @ReadOnly()
  @Required()
  @Validate(yup.number())
  public licencia: number;

  @Required()
  @Validate(yup.number())
  public saldo_cuenta: number;
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
  @Validate(yup.string())
  public modelo: string;

  @Required()
  @Validate(yup.number())
  public color: number;

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public marca: string;  

  @Required()
  @Validate(yup.number())
  public kilometraje: number;
  
  @Required()
  @Validate(yup.number())
  public precio: number;

  @Validate(Usuario)
  public owner: FlatConvectorModel<Usuario>;
}

