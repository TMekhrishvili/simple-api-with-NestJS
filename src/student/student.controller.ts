import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateStudentDto, UpdateStudentDto, FindStudentResponseDto, StudentResponseDto } from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Get()
    getStudents(): FindStudentResponseDto[] {
        return this.studentService.getStudents();
    }

    @Get('/:studentID')
    getStudentByID(
        @Param('studentID') studentID: string
    ): FindStudentResponseDto {
        return this.studentService.getStudentByID(studentID);
    }

    @Post()
    createStudent(
        @Body() body: CreateStudentDto
    ): StudentResponseDto {
        return this.studentService.createStudent(body);
    }

    @Put('/:studentID')
    updateStudent(
        @Param('studentID') studentID: string,
        @Body() body: UpdateStudentDto
    ): StudentResponseDto {
        return this.studentService.updateStudent(body, studentID);
    }
}