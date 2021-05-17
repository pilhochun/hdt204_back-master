import { IsString, IsNumber, IsEmail, IsPhoneNumber, Min, Max, IsDate, Length} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ClinicNoteDto {
    
    @ApiProperty({ type: Number, description: 'patientId' })
    owner:number;

    @ApiProperty({ type: String, description: '치료노트 내용' })
    content:string;
    


}