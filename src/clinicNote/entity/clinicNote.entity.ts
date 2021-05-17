import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CoreEntity } from "src/common/entity/core.entity";

@Entity()
export class ClinicNote extends CoreEntity{
    @Column()       
    owner:number;   //patientId

    @Column()
    content:string;

}