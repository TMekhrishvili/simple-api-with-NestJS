import { Body, Controller, Get, Param, Put } from "@nestjs/common";
import { FindStudentResponseDto } from "src/student/dto/student.dto";
import { StudentService } from "src/student/student.service";

@Controller('teachers/:teacherID/students')
export class StudentTeacherController {
    constructor(private readonly studentService: StudentService) { }

    @Get()
    getStudentsByTeacherID(
        @Param('teacherID') teacherID: string
    ): FindStudentResponseDto[] {
        return this.studentService.getStudentsByTeacherID(teacherID);
    }

    @Put('/:studentID')
    updateStudentTeacher(
        @Param('teacherID') teacherID: string,
        @Param('studentID') studentID: string
    ): FindStudentResponseDto {
        return this.studentService.updateStudentTeacher(teacherID, studentID);
    }
}