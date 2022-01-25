import { Body, Controller, Get, Param, ParseUUIDPipe, Put } from "@nestjs/common";
import { FindStudentResponseDto } from "src/student/dto/student.dto";
import { StudentService } from "src/student/student.service";

@Controller('teachers/:teacherID/students')
export class StudentTeacherController {
    constructor(private readonly studentService: StudentService) { }

    @Get()
    getStudentsByTeacherID(
        @Param('teacherID', new ParseUUIDPipe()) teacherID: string
    ): FindStudentResponseDto[] {
        return this.studentService.getStudentsByTeacherID(teacherID);
    }

    @Put('/:studentID')
    updateStudentTeacher(
        @Param('teacherID', new ParseUUIDPipe()) teacherID: string,
        @Param('studentID', new ParseUUIDPipe()) studentID: string
    ): FindStudentResponseDto {
        return this.studentService.updateStudentTeacher(teacherID, studentID);
    }
}