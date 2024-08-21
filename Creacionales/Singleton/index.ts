
import { EnrollmentService } from './EnrollmentService';
import { BillingService } from './BillingService';

const inscriptionService = new EnrollmentService();
const billingService = new BillingService();
const contaMail = 'amairani.jimenez@axity.com';

inscriptionService.enrollStudent(contaMail);
billingService.notifyPaymentDue(contaMail);


