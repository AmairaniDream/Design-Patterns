"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentService = void 0;
const NotificationManager_1 = require("./NotificationManager");
class EnrollmentService {
    constructor() {
        this.notificationManager = NotificationManager_1.NotificationManager.getSingleInstance();
    }
    enrollStudent(studentEmail) {
        // Lógica para inscribir al estudiante...
        // Notificación de inscripción exitosa
        this.notificationManager.notifyByEmail('Tu inscripción al curso Patrones de Diseño fue exitosa', studentEmail);
        this.notificationManager.ownNotifybyTelegram('Telegram:Urgente realizar el pago', '54679981232');
    }
}
exports.EnrollmentService = EnrollmentService;
