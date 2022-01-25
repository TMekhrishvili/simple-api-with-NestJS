import { Body, Controller, Get, Headers, Param, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
    @Get()
    getStudents() {
        return 'all students';
    }

    @Get('/:studentID')
    getStudentByID(
        @Param('studentID') studentID: string
    ) {
        return `get student with id: ${studentID}`;
    }

    @Post()
    createStudent(
        @Body() body
    ) {
        const { name } = body;
        return `create student: ${name}`;
    }

    @Put('/:studentID')
    updateStudent(
        @Param('studentID') studentID: string,
        @Body() body
    ) {

        return 'update student';
    }
}