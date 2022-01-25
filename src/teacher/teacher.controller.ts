import { Controller, Get, Param } from "@nestjs/common";

@Controller('teachers')
export class TeacherController {
    @Get()
    getTeachers() {
        return 'all teachers';
    }

    @Get('/:teacherID')
    getTeacherByID(
        @Param('teacherID') teacherID: string
    ) {
        return 'get single teacher';
    }
}