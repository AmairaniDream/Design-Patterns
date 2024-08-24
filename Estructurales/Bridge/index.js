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
const advancedCourse = new CourseBuilder_1.CourseBuilder().setName('TypeScript Avanzado')
    .setName('TypeScript Avanzado')
    .setDescription('Template para cursos avanzados')
    .setMaterials(['Libro', 'Videos', 'Proyectos', 'Diapositivas'])
    .setSchedulce({ days: ['Lunes'], time: 'De 8 am a 5 pm' })
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
console.log('Imprimiendo clon para base de datos');
const cursoavanzadoBasedeDatos = new CourseBuilder_1.CourseBuilder().fromPrototype(advancedCourse.clone())
    .setName("Curso de Base de datos")
    .setInstructor({ name: 'Alice', email: 'alice@example.com', experience: 5 })
    .setSchedulce({ days: ['Lunes'], time: 'De 8 am a 10 am' })
    .buildCourse();
cursoavanzadoBasedeDatos.displayCourseInfo();
console.log('*****************************************');
console.log('Imprimiendo clon para avanzado de Apis');
const cursoavanzadoApis = new CourseBuilder_1.CourseBuilder().fromPrototype(advancedCourse.clone())
    .setName("Curso de Base de Apis")
    .setInstructor({ name: 'Gerardo', email: 'gerardo@example.com', experience: 5 })
    .setSchedulce({ days: ['Lunes'], time: 'De 10 am a 12 pm' })
    .buildCourse();
cursoavanzadoApis.displayCourseInfo();
