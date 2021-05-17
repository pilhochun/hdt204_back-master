import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsEmail, IsPhoneNumber, Min, Max, IsDate, Length} from 'class-validator';

export class ReportDto {
    @ApiProperty({ type: String, description: 'R:Regular , IR: Irregular'})
    type:string;

    @ApiProperty({ type: Number, description: '리포터(환자) ID'})
    reporter:number;

    @ApiProperty({ type: Date, description: '부작용 보고 날짜'})
    reportDay:Date;

    @ApiProperty({ type: Number, description: '피로 Grade: 0,1,2,3,4'})
    fatigue:number;

    @ApiProperty({ type: Number, description: '불면 Grade: 0,1,2,3,4'})
    insomnia:number;

    @ApiProperty({ type: Number, description: '통증 Grade: 0,1,2,3,4'})
    pain:number;

    @ApiProperty({ type: Number, description: '두통 Grade: 0,1,2,3,4'})
    headache:number;

    @ApiProperty({ type: Number, description: '발열 Grade: 0,1,2,3,4'})
    fever:number;

    @ApiProperty({ type: Number, description: '오한 Grade: 0,1,2,3,4'})
    chills:number;

    @ApiProperty({ type: Number, description: '체중감소 Grade: 0,1,2,3,4'})
    weightLoss:number;

    @ApiProperty({ type: Number, description: '식욕부진 Grade: 0,1,2,3,4'})
    anorexia:number;

    @ApiProperty({ type: Number, description: '구역 Grade: 0,1,2,3,4'})
    nausea:number;

    @ApiProperty({ type: Number, description: '구토 Grade: 0,1,2,3,4'})
    vomiting:number;

    @ApiProperty({ type: Number, description: '변비 Grade: 0,1,2,3,4'})
    constipation:number;

    @ApiProperty({ type: Number, description: '설사 Grade: 0,1,2,3,4'})
    diarrhea:number;

    @ApiProperty({ type: Number, description: '호흡곤란 Grade: 0,1,2,3,4'})
    dyspnea:number;

    @ApiProperty({ type: Number, description: '기침 Grade: 0,1,2,3,4'})
    cough:number;

    @ApiProperty({ type: Number, description: '발진 Grade: 0,1,2,3,4'})
    rash:number;

    @ApiProperty({ type: Number, description: '피부건조 Grade: 0,1,2,3,4'})
    drySkin:number;

    @ApiProperty({ type: Number, description: '피부하 만저지는 덩어리 Grade: 0,1,2,3,4'})
    lumpskin:number;

    @ApiProperty({ type: Number, description: '얼굴 붓기 Grade: 0,1,2,3,4'})
    faceswelling:number;

    @ApiProperty({ type: Number, description: '우울감 Grade: 0,1,2,3,4'})
    depression:number;

    @ApiProperty({ type: Number, description: '음성변화 Grade: 0,1,2,3,4'})
    hoarseness:number;

    @ApiProperty({ type: Number, description: '객혈 Grade: 0,1,2,3,4'})
    hemoptysis:number;
}