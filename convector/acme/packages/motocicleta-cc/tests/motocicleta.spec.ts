// tslint:disable:no-unused-expression
import { join } from 'path';
import { expect } from 'chai';
import * as uuid from 'uuid/v4';
import { MockControllerAdapter } from '@worldsibu/convector-adapter-mock';
import { ClientFactory, ConvectorControllerClient } from '@worldsibu/convector-core';
import 'mocha';

import { Motocicleta, MotocicletaController, Owner } from '../src';

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
      placa: 'SID45A',
      modelo: 2018,
      color: 'negro',
      kilometraje: 500,
      precio: 400,
      owner:null
    });

    const modelOwnerSample = new Owner({
      fechaCompra: Date.now(),
      ownerID: 'USER_1'
    });
    await motocicletaCtrl.crear(modelSample, modelOwnerSample);
  
    const justSavedModel = await adapter.getById<Motocicleta>(modelSample.id);
  
    expect(justSavedModel.id).to.exist;
  });
  
  it('should create a default model', async () => {
    const id = uuid();
    const modelOwnerSample = new Owner({
      fechaCompra: Date.now(),
      ownerID: 'USER_2'
    });
    await motocicletaCtrl.cambiarOwner('SID45A', modelOwnerSample);
  
    const justSavedModel = await adapter.getById<Motocicleta>(id);
  
    expect(justSavedModel.id).to.exist;
  });
});