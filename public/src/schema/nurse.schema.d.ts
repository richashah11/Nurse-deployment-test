import { Types } from 'mongoose';
export declare class Nurse {
    name: string;
    email: string;
    phone: string;
    joinDate: Date;
    licenseExpiryDate: Date;
    status: string;
    documentURL: string;
    digitalSignature: boolean;
}
export type NurseDocument = Nurse & Document;
export declare const NurseSchema: import("mongoose").Schema<Nurse, import("mongoose").Model<Nurse, any, any, any, import("mongoose").Document<unknown, any, Nurse> & Nurse & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Nurse, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Nurse>> & import("mongoose").FlatRecord<Nurse> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
