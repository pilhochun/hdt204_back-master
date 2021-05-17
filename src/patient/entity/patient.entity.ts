import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CoreEntity } from "src/common/entity/core.entity";

@Entity()
export class Patient extends CoreEntity{
    @Column()
    birthYear:number;

    @Column()
    gender:string;

    @Column({type:'date' , nullable:true})
    enrollDay:Date;

    @Column({type:'date', nullable:true})
    firstShotDay:Date;

    @Column({nullable:true})
    medicine:string;

    @Column()
    patientId:string;

    @Column()
    pass:string;

}