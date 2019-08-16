import * as yup from 'yup';
import {
  ConvectorModel,
  Default,
  ReadOnly,
  Required,
  Validate
} from '@worldsibu/convector-core-model';

export class Usuario extends ConvectorModel<Usuario> {
  @ReadOnly()
  @Required()
  public readonly type = 'io.worldsibu.usuario';

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public uid: string;

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public nombre: string;

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public apellido: string;

  @Required()
  @Validate(yup.number())
  public edad: number;

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
