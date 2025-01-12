import { CreateNurseDto } from './dto/create-nurse.dto';
import { UpdateNurseDto } from './dto/update-nurse.dto';
import { AddTotalNurseDataDto } from './dto/Excel-nurse-data.dto';
import { Nurse } from 'src/schema/nurse.schema';
import mongoose from 'mongoose';
export declare class NurseService {
    private NurseModel;
    constructor(NurseModel: mongoose.Model<Nurse>);
    AddExcelNurseData(AddAllNurses: AddTotalNurseDataDto): Promise<(mongoose.Document<unknown, {}, Nurse> & Nurse & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    })[] | "This action adds a new nurse">;
    create(createNurseDto: CreateNurseDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateNurseDto: UpdateNurseDto): string;
    remove(id: number): string;
}
