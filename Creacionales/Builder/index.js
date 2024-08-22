"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CourseBuilder_1 = require("./CourseBuilder");
const basicCourse = new CourseBuilder_1.CourseBuilder()
    .setName('Introducción a TypeScript')
    .setInstructor({ name: 'Alice', email: 'alice@example.com', experience: 5 })
    .setCustomMethod((message) => { console.log('Se agrego funcionalidad extra ' + message); })
    .buildCourse();
console.log('Curso 1:');
basicCourse.displayCourseInfo();
console.log('*****************************************');
basicCourse.addExtraBehavior('Extra mensaje:  Este curso es sabatico');
// Creación de un curso completo con todos los detalles
const advancedCourse = new CourseBuilder_1.CourseBuilder()
    .setName('TypeScript Avanzado')
    .setDescription('Un curso avanzado sobre TypeScript')
    .setMaterials(['Libro', 'Videos', 'Proyectos'])
    .setInstructor({ name: 'Bob', email: 'bob@example.com', experience: 10 })
    .setStudets([
    { name: 'Kevin', email: 'Kevin@example.com' },
    { name: 'Victor', email: 'Victor@example.com' },
    { name: 'Camila', email: 'Camila@example.com' },
    { name: 'Jose', email: 'Jose@example.com' },
    { name: 'Amairani', email: 'Amairani@example.com' },
])
    .setEndDate(new Date(2024, 8, 1))
    .setEndDate(new Date(2024, 11, 30))
    .buildCourse();
console.log('Curso 2:');
advancedCourse.displayCourseInfo();
console.log('*****************************************');
