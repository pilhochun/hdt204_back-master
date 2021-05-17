import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoreOutput } from '../common/dtos/output.dto';
import { Repository } from 'typeorm';
import { ReportDto } from './dtos/report.dto';
import { Report } from './entity/report.entity';

@Injectable()
export class ReportService{
    constructor(
        @InjectRepository(Report) private readonly reports : Repository<Report>
    ){}

    async addReport(reportData : ReportDto): Promise<CoreOutput>{
        try{
            const result = await this.reports.save(reportData);
            return {ok:true}
        }catch(ex){
            return {ok:false, error:ex}
        }
    }

    async getAllReports(): Promise<Array<ReportDto>>{
        return this.reports.find();
    }

    async getOneReportById(reportId): Promise<ReportDto>{
        return this.reports.findOne({id:reportId});
    }    
    
    async getOneReportByReporterId(reporterId): Promise<Array<ReportDto>>{
        return this.reports.find({reporter : reporterId});
    }
}