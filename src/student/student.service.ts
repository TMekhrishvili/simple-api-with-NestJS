import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
    private students = students;

    getStudents(): FindStudentResponseDto[] {
        return this.students;
    }

    getStudentByID(studentID: string): FindStudentResponseDto {
        return this.students.find(student => student.id === studentID);
    }

    createStudent(payload: CreateStudentDto): StudentResponseDto {
        let newStudent = {
            id: uuid(),
            ...payload
        };
        this.students.push(newStudent);
        return newStudent;
    }

    updateStudent(payload: UpdateStudentDto, studentID: string): StudentResponseDto {
        const { name, teacher } = payload;
        this.students.forEach(student => {
            if (student.id === studentID) {
                student.name = name;
                student.teacher = teacher;
            }
        });
        return this.students.find(student => student.id === studentID);
    }

    getStudentsByTeacherID(teacherID: string): FindStudentResponseDto[] {
        return this.students.filter(student => student.teacher === teacherID);
    }

    updateStudentTeacher(teacherID: string, studentID: string): FindStudentResponseDto {
        this.students.forEach(student => {
            if (student.id === studentID) student.teacher = teacherID;
        });
        return this.students.find(student => student.id === studentID);
    }
}
