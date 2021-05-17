import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClinicNote } from "./entity/clinicNote.entity";
import { ClinicNoteController } from "./clinicNote.controller";
import { ClinicNoteService } from "./clinicNote.service";

@Module({
    imports:[TypeOrmModule.forFeature([ClinicNote])],
    controllers:[ClinicNoteController],
    providers:[ClinicNoteService],
})
 
export class PatientModule{}