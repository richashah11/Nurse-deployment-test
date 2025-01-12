import { NurseService } from './nurse.service';
import { UpdateNurseDto } from './dto/update-nurse.dto';
import { AddTotalNurseDataDto } from './dto/Excel-nurse-data.dto';
export declare class NurseController {
    private readonly nurseService;
    constructor(nurseService: NurseService);
    create(AddAllNurseDto: AddTotalNurseDataDto): Promise<(import("mongoose").Document<unknown, {}, import("../schema/nurse.schema").Nurse> & import("../schema/nurse.schema").Nurse & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[] | "This action adds a new nurse">;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateNurseDto: UpdateNurseDto): string;
    remove(id: string): string;
}
