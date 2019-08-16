import * as yup from 'yup';
import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core';

import { Motocicleta, Owner } from './motocicleta.model';
import { Usuario } from '../../usuario-cc/src/usuario.model';

@Controller('motocicleta')
export class MotocicletaController extends ConvectorController<ChaincodeTx> {
  @Invokable()
  public async crear(
    @Param(Motocicleta)
    moto: Motocicleta,
    @Param(Owner.schema())
    newowner: Owner
  ) {
    moto.owner = newowner;
    await moto.save();
  }

  public async cambiarOwner(
    @Param(yup.string())
    motoId: string,
    @Param(Owner.schema())
    newowner: Owner
  ){
    let moto = await Motocicleta.getOne(motoId);
    if (!moto) {
      throw new Error(`Motocicleta con el id ${motoId} no encontrada`);
    }

    let vendedor = await Usuario.getOne(moto.owner.ownerID);
    if (!vendedor) {
      throw new Error(`Usuario con el id ${moto.owner.ownerID} no encontrado`);
    }

    let comprador = await Usuario.getOne(newowner.id);
    if (!comprador) {
      throw new Error(`Usuario con el id ${newowner.id} no encontrado`);
    }

    comprador.saldo_cuenta -= moto.precio;
    vendedor.saldo_cuenta += moto.precio;

    moto.owner = newowner;

    await moto.save().then(async function(){
      await vendedor.update(vendedor);
    }).then(async function(){
      await comprador.update(comprador);
    }).catch(function(error){
      throw new Error(`El reporte de error dice que: `+error);
    });
  }
}