import { Controller, Get, Post, Body, Req, Put, Delete, Param} from '@nestjs/common';
import { PatientDto } from './dtos/patient.dto';
import { Patient } from './entity/patient.entity';
import {PatientService} from './patient.service';
import {
    ApiResponse,
    ApiOkResponse,
    ApiUnauthorizedResponse,
    ApiBody,
  } from '@nestjs/swagger';

@Controller('patient')
export class PatientController{
    constructor(private readonly patientService: PatientService){}
    
    @Post()
    @ApiResponse({status:201, description:'회원등록 성공'})
    @ApiBody({type:PatientDto})
    addPatient(@Body() patientDto: PatientDto){
        return this.patientService.addPatient(patientDto);
    }

    @Get()
    @ApiResponse({status:200, description:'All 회원 조회 성공'})
    getAllPatients(): Promise<Array<PatientDto>>{
        return this.patientService.getAllPatients();
    }

    @Get(':id')
    @ApiResponse({status:200, description:'회원 조회 성공'})
    getPatientById(@Param('id') id:number): Promise<PatientDto>{
        return this.patientService.getPatientById(id);
    }

    @Get('pId/:patientId')
    @ApiResponse({status:200, description:'회원 조회 성공'})
    getPatientByPId(@Param('patientId') pid:string): Promise<PatientDto>{
        return this.patientService.getPatientByPId(pid);
    }
} 