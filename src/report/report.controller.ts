import { Controller, Get, Post, Body, Req, Put, Delete, Param} from '@nestjs/common';
import {Report} from './entity/report.entity';
import { ReportDto } from './dtos/report.dto';
import { ReportService } from './report.service';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('report')
export class ReportController{
    constructor(private readonly reportService: ReportService){}
    
    @Post()
    @ApiResponse({status:201, description:'증상 등록 성공'})
    @ApiBody({type:ReportDto})
    addReport(@Body() reportDto: ReportDto){
        return this.reportService.addReport(reportDto);
    }

    @Get()
    @ApiResponse({status:200, description:'All 증상 조회 성공'})
    getAllReports(): Promise<Array<ReportDto>>{
        return this.reportService.getAllReports();
    }

    @Get(':id')
    @ApiResponse({status:200, description:'증상(by ID) 조회 성공'})
    getOneReportById(@Param('id') id:number): Promise<ReportDto>{
        return this.reportService.getOneReportById(id);
    }

    @Get('reporter/:rid')
    @ApiResponse({status:200, description:'증상(by 리포터 ID) 조회 성공'})
    getOneReportByReporterId(@Param('rid') rid:number): Promise<Array<ReportDto>>{
        return this.reportService.getOneReportByReporterId(rid);
    }

}