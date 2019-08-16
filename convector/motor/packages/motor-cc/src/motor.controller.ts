import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core';

import { Motor } from './motor.model';

@Controller('motor')
export class MotorController extends ConvectorController<ChaincodeTx> {
  @Invokable()
  public async create(
    @Param(Motor)
    motor: Motor
  ) {
    await motor.save();
  }
}