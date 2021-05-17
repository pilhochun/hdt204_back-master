import { Controller, Get, Post, Body, Req, Put, Delete, Param} from '@nestjs/common';
import { ClinicNoteDto } from './dtos/clinicNote.dto';
import { ClinicNote } from './entity/clinicNote.entity';
import {ClinicNoteService} from './clinicNote.service';
import {
    ApiResponse,
    ApiOkResponse,
    ApiUnauthorizedResponse,
    ApiBody,
  } from '@nestjs/swagger';

@Controller('patient')
export class ClinicNoteController{
    constructor(private readonly clinicNoteService: ClinicNoteService){}
    
    @Post()
    @ApiResponse({status:201, description:'회원등록 성공'})
    @ApiBody({type:ClinicNoteDto})
    addPatient(@Body() clinicNoteDto: ClinicNoteDto){
        return this.clinicNoteService.addClinicNote(clinicNoteDto);
    }

    @Get()
    @ApiResponse({status:200, description:'All 회원 조회 성공'})
    getAllPatients(): Promise<Array<ClinicNoteDto>>{
        return this.clinicNoteService.getAllClinicNotes();
    }

    @Get('pId/:patientId')
    @ApiResponse({status:200, description:'회원 조회 성공'})
    getPatientById(@Param('id') id:number): Promise<ClinicNoteDto>{
        return this.clinicNoteService.getClinicNoteByPatientId(id);
    }
}