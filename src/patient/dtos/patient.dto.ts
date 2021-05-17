import { IsString, IsNumber, IsEmail, IsPhoneNumber, Min, Max, IsDate, Length} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PatientDto {
    
    @ApiProperty({ type: Number, description: '생년- 4자리숫자 ex)1982' })
    birthYear:number;

    @ApiProperty({ type: String, description: '성별 남:M, 여:F' })
    gender:string;
    
    @ApiProperty({ type: Date, description: '최초 입원일' })
    enrollDay?:Date;

    @ApiProperty({ type: Date, description: '최초 투약일' })
    firstShotDay?:Date;

    @ApiProperty({ type: String, description: '약 이름' })
    medicine?:string;

    @ApiProperty({ type: String, description: '환자 아이디' })
    patientId?:string;

    @ApiProperty({ type: String, description: '환자 패쓰워드' })
    pass?:string;
}