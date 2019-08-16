import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import { ConvectorController } from '@worldsibu/convector-core';
import { Motor } from './motor.model';
export declare class MotorController extends ConvectorController<ChaincodeTx> {
    create(motor: Motor): Promise<void>;
}
