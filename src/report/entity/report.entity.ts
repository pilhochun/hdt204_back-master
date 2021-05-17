import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CoreEntity } from "src/common/entity/core.entity";

@Entity()
export class Report extends CoreEntity{
    @Column()  // R:Regular , IR: Irregular
    type:string; 

    @Column()  // patient ID
    reporter:number;

    @Column({type:'date'}) // expected Reporting Day 
    reportDay:Date

    @Column({nullable:true}) //피로
    fatigue:number;

    @Column({nullable:true}) //불면
    insomnia:number;

    @Column({nullable:true}) //통증
    pain:number;

    @Column({nullable:true}) //두통
    headache:number;

    @Column({nullable:true}) //발열
    fever:number;

    @Column({nullable:true}) //오한
    chills:number;

    @Column({nullable:true}) //체중감소
    weightLoss:number;

    @Column({nullable:true}) // 식욕부진
    anorexia:number;

    @Column({nullable:true}) //구역
    nausea:number;

    @Column({nullable:true}) //구토
    vomiting:number;

    @Column({nullable:true}) //변비
    constipation:number;

    @Column({nullable:true}) //설사
    diarrhea:number;

    @Column({nullable:true}) //호흡곤란
    dyspnea:number;

    @Column({nullable:true}) //기침
    cough:number;

    @Column({nullable:true}) //발진
    rash:number;

    @Column({nullable:true}) //피부건조
    drySkin:number;

    @Column({nullable:true}) //우울감
    depression:number;

    @Column({nullable:true}) // 만저지는 덩어리
    lumpskin:number;

    @Column({nullable:true}) //얼굴붓기
    faceswelling:number;

    @Column({nullable:true}) //음성변화
    hoarseness:number;

    @Column({nullable:true}) //객혈
    hemoptysis:number;


}