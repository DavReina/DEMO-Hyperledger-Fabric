import { ConvectorModel } from '@worldsibu/convector-core-model';
export declare class Usuario extends ConvectorModel<Usuario> {
    readonly type: string;
    name: string;
    created: number;
    modified: number;
}
