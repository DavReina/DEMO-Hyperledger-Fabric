import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import { ConvectorController } from '@worldsibu/convector-core';
import { Motocicleta } from './motocicleta.model';
export declare class MotocicletaController extends ConvectorController<ChaincodeTx> {
    create(motocicleta: Motocicleta): Promise<void>;
}
