import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoreOutput } from '../common/dtos/output.dto';
import { Repository } from 'typeorm';
import { PatientDto } from './dtos/patient.dto';
import { Patient } from './entity/patient.entity';

@Injectable()
export class PatientService{
    constructor(
        @InjectRepository(Patient) private readonly patients : Repository<Patient>
    ){}

    async addPatient(patientData : PatientDto): Promise<CoreOutput>{
        try{
            const result = await this.patients.save(patientData);
            console.log(" result >> ", result);
            return {ok:true}
        }catch(ex){
            return {ok:false, error:ex}
        }
    }

    async getAllPatients(): Promise<Array<PatientDto>>{
        return this.patients.find();
    }

    async getPatientById(id): Promise<PatientDto>{
        return this.patients.findOne({id:id});
    }

    async getPatientByPId(patientId): Promise<PatientDto>{
        return this.patients.findOne({patientId:patientId});
    }
}