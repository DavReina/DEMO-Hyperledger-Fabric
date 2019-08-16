import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core';

import { Motocicleta } from './motocicleta.model';

@Controller('motocicleta')
export class MotocicletaController extends ConvectorController<ChaincodeTx> {
  @Invokable()
  public async create(
    @Param(Motocicleta)
    motocicleta: Motocicleta
  ) {
    await motocicleta.save();
  }
}