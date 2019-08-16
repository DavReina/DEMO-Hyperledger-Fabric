import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import { Motor } from './motor.model';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core';

import { Motocicleta, Usuario } from './motocicleta.model';

@Controller('motocicleta')
export class MotocicletaController extends ConvectorController<ChaincodeTx> {
    @Invokable()
    public async crear(
        @Param(Motocicleta)
        moto: Motocicleta
    ){
        await moto.save();
    }
    
}

@Controller('usuario')
export class UsuarioController extends ConvectorController<ChaincodeTx> {
    @Invokable()
    public async crear(
        @Param(Usuario)
        user: Usuario
    ){
        await user.save();
    }
    
}