import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Patient} from './patient/entity/patient.entity';
import {Report} from './report/entity/report.entity';
import { PatientModule } from './patient/patient.module';
import { ReportModule } from './report/report.module';

// import {SideEffect} from './sideEffect/entity/sideEffect.entity';
// import { SideEffectModule } from './sideEffect/sideEffect.module';

@Module({
  imports: [
  TypeOrmModule.forRoot({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "pilho",
    "password": "fnlfh1",
    "database": "postgres",
    "synchronize": true,
    "logging": false,
    "entities":[Patient, Report],
  }), PatientModule,ReportModule, 
],
  controllers: [],
  providers: [],
})
export class AppModule {}
