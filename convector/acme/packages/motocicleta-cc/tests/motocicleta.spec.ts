// tslint:disable:no-unused-expression
import { join } from 'path';
import { expect } from 'chai';
import * as uuid from 'uuid/v4';
import { MockControllerAdapter } from '@worldsibu/convector-adapter-mock';
import { ClientFactory, ConvectorControllerClient } from '@worldsibu/convector-core';
import 'mocha';

import { Motocicleta, MotocicletaController } from '../src';

describe('Motocicleta', () => {
  let adapter: MockControllerAdapter;
  let motocicletaCtrl: ConvectorControllerClient<MotocicletaController>;
  
  before(async () => {
    // Mocks the blockchain execution environment
    adapter = new MockControllerAdapter();
    motocicletaCtrl = ClientFactory(MotocicletaController, adapter);

    await adapter.init([
      {
        version: '*',
        controller: 'MotocicletaController',
        name: join(__dirname, '..')
      }
    ]);
  });
  
  it('should create a default model', async () => {
    const modelSample = new Motocicleta({
      id: uuid(),
      name: 'Test',
      created: Date.now(),
      modified: Date.now()
    });

    await motocicletaCtrl.create(modelSample);
  
    const justSavedModel = await adapter.getById<Motocicleta>(modelSample.id);
  
    expect(justSavedModel.id).to.exist;
  });
});