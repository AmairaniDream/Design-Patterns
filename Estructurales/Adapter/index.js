"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EnrollmentService_1 = require("./EnrollmentService");
const BillingService_1 = require("./BillingService");
const inscriptionService = new EnrollmentService_1.EnrollmentService();
const billingService = new BillingService_1.BillingService();
const contaMail = 'amairani.jimenez@axity.com';
inscriptionService.enrollStudent(contaMail);
billingService.notifyPaymentDue(contaMail);
