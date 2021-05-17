import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoreOutput } from '../common/dtos/output.dto';
import { Repository } from 'typeorm';
import { ClinicNoteDto } from './dtos/clinicNote.dto';
import { ClinicNote } from './entity/clinicNote.entity';

@Injectable()
export class ClinicNoteService{
    constructor(
        @InjectRepository(ClinicNote) private readonly clinicNotes : Repository<ClinicNote>
    ){}

    async addClinicNote(clinicNoteData : ClinicNoteDto): Promise<CoreOutput>{
        try{
            const result = await this.clinicNotes.save(clinicNoteData);
            console.log(" result >> ", result);
            return {ok:true}
        }catch(ex){
            return {ok:false, error:ex}
        }
    }

    async getAllClinicNotes(): Promise<Array<ClinicNoteDto>>{
        return this.clinicNotes.find();
    }

    async getClinicNoteByPatientId(pid): Promise<ClinicNoteDto>{
        return this.clinicNotes.findOne({owner:pid});
    }
}
