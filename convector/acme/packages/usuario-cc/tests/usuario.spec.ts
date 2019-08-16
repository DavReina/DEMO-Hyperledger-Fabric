// tslint:disable:no-unused-expression
import { join } from 'path';
import { expect } from 'chai';
import * as uuid from 'uuid/v4';
import { MockControllerAdapter } from '@worldsibu/convector-adapter-mock';
import { ClientFactory, ConvectorControllerClient } from '@worldsibu/convector-core';
import 'mocha';

import { Usuario, UsuarioController } from '../src';

describe('Usuario', () => {
  let adapter: MockControllerAdapter;
  let usuarioCtrl: ConvectorControllerClient<UsuarioController>;
  
  before(async () => {
    // Mocks the blockchain execution environment
    adapter = new MockControllerAdapter();
    usuarioCtrl = ClientFactory(UsuarioController, adapter);

    await adapter.init([
      {
        version: '*',
        controller: 'UsuarioController',
        name: join(__dirname, '..')
      }
    ]);
  });
  
  it('should create a default model', async () => {
    const modelSample = new Usuario({
      id: uuid(),
      uid: 'USER_1',
      nombre: 'David',
      apellido: 'Reina',
      edad: 21,
      cedula: 1020827649,
      licencia: 10203040,
      saldo_cuenta: 500
    });

    await usuarioCtrl.crear(modelSample);
  
    const justSavedModel = await adapter.getById<Usuario>(modelSample.id);
  
    expect(justSavedModel.id).to.exist;
  });

  it('should create a default model', async () => {
    const modelSample = new Usuario({
      id: uuid(),
      uid: 'USER_2',
      nombre: 'Sebastian',
      apellido: 'Reina',
      edad: 21,
      cedula: 1010867849,
      licencia: 10203040,
      saldo_cuenta: 500
    });

    await usuarioCtrl.crear(modelSample);
  
    const justSavedModel = await adapter.getById<Usuario>(modelSample.id);
  
    expect(justSavedModel.id).to.exist;
  });
});