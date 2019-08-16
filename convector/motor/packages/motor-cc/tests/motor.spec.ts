// tslint:disable:no-unused-expression
import { join } from 'path';
import { expect } from 'chai';
import * as uuid from 'uuid/v4';
import { MockControllerAdapter } from '@worldsibu/convector-adapter-mock';
import { ClientFactory, ConvectorControllerClient } from '@worldsibu/convector-core';
import 'mocha';

import { Motor, MotorController } from '../src';

describe('Motor', () => {
  let adapter: MockControllerAdapter;
  let motorCtrl: ConvectorControllerClient<MotorController>;
  
  before(async () => {
    // Mocks the blockchain execution environment
    adapter = new MockControllerAdapter();
    motorCtrl = ClientFactory(MotorController, adapter);

    await adapter.init([
      {
        version: '*',
        controller: 'MotorController',
        name: join(__dirname, '..')
      }
    ]);
  });
  
  it('should create a default model', async () => {
    const modelSample = new Motor({
      id: uuid(),
      name: 'Test',
      created: Date.now(),
      modified: Date.now()
    });

    await motorCtrl.create(modelSample);
  
    const justSavedModel = await adapter.getById<Motor>(modelSample.id);
  
    expect(justSavedModel.id).to.exist;
  });
});