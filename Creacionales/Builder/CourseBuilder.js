"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseBuilder = void 0;
const Course_1 = require("./Course");
class CourseBuilder {
    constructor() {
        this.name = '';
        this.description = '';
        this.materials = [];
        this.instructorDetails = { name: '', email: '', experience: 0 };
        this.schedule = null;
        this.students = null;
        this.startDate = null;
        this.endDate = null;
        this.cutomMethod = (cadena) => { };
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setDescription(description) {
        this.description = description;
        return this;
    }
    setMaterials(materials) {
        this.materials = materials;
        return this;
    }
    setInstructor(instructor) {
        this.instructorDetails = instructor;
        return this;
    }
    /*
        public setSchedule(schedule:ISchedule){
            this.schedule = schedule;
            return this
        }
    */
    setStudets(students) {
        this.students = students;
        return this;
    }
    setStarDate(starDate) {
        this.startDate = starDate;
        return this;
    }
    setEndDate(endDate) {
        this.endDate = endDate;
        return this;
    }
    setCustomMethod(method) {
        this.cutomMethod = method;
        return this;
    }
    buildCourse() {
        const course = new Course_1.Course(this.name, this.description, this.materials, this.instructorDetails, this.schedule, this.students, this.startDate, this.endDate);
        course.addExtraBehavior = this.cutomMethod;
        return course;
    }
}
exports.CourseBuilder = CourseBuilder;
