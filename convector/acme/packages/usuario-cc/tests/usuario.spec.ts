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
      name: 'Test',
      created: Date.now(),
      modified: Date.now()
    });

    await usuarioCtrl.create(modelSample);
  
    const justSavedModel = await adapter.getById<Usuario>(modelSample.id);
  
    expect(justSavedModel.id).to.exist;
  });
});