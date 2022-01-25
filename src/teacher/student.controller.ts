import { Body, Controller, Get, Param, Put } from "@nestjs/common";

@Controller('teachers/:teacherID/students')
export class StudentTeacherController {

    @Get()
    getStudents(
        @Param('teacherID') teacherID: string
    ) {
        return 'get students';
    }

    @Put('/:studentID')
    updateStudentTeacher(
        @Param('teacherID') teacherID: string,
        @Param('studentID') studentID: string,
        @Body() body: {
            name: string,
            teacherID: number
        }
    ) {
        return 'update student teacher';
    }
}