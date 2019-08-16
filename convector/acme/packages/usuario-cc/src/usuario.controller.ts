import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core';

import { Usuario } from './usuario.model';

@Controller('usuario')
export class UsuarioController extends ConvectorController<ChaincodeTx> {
  @Invokable()
  public async create(
    @Param(Usuario)
    usuario: Usuario
  ) {
    await usuario.save();
  }
}