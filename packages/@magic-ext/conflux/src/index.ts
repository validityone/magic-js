import { Extension } from '@magic-sdk/commons';
import { ConfluxPayloadMethod, ConfluxConfig } from './types';

export class ConfluxExtension extends Extension.Internal<'conflux', any> {
  name = 'conflux' as const;
  config: any = {};

  constructor(public confluxConfig: ConfluxConfig) {
    super();

    this.config = {
      chainType: 'CONFLUX',
      rpcUrl: confluxConfig.rpcUrl,
      chainId: confluxConfig.chainId,
    };
  }

  public async sendTransaction(txObject: any) {
    return this.request(this.utils.createJsonRpcRequestPayload(ConfluxPayloadMethod.ConfluxSendTransaction, txObject));
  }
}
