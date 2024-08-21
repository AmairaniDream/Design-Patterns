
import { UIManager } from './UIManager';
import { AdminUIFactory } from './AdminUIFactory';
//instructor
import { InstruUIManager } from './InstruUIManager';
import { InstructorUIFactory } from './InstructorUIFactory';


const UIFactory = new AdminUIFactory();
const uiManager = new UIManager(UIFactory);

const adminUI = uiManager.createUI('admin');
adminUI.button.render();
adminUI.dialog.show();


// const instructor
const InstruUIFactory = new InstructorUIFactory();
const instruUIManager = new InstruUIManager(InstruUIFactory);

const instructorUI = instruUIManager.createUI('instructor');
instructorUI.button.render();
instructorUI.dialog.show();


//const IntruUIFactory = new InstructorUIFactory();
//const uiManager = new UIManager(UIFactory);

// cosnt studet



//COPIAR Y PEGAR POR CONSTRUCTOR Y STUDENT

