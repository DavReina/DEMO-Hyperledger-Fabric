import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import { ConvectorController } from '@worldsibu/convector-core';
import { Usuario } from './usuario.model';
export declare class UsuarioController extends ConvectorController<ChaincodeTx> {
    create(usuario: Usuario): Promise<void>;
}
