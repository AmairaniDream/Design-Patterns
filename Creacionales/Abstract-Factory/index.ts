
import { UIManager } from './UIManager';
import { AdminUIFactory } from './AdminUIFactory';

const UIFactory = new AdminUIFactory();
const uiManager = new UIManager(UIFactory);


const adminUI = uiManager.createUI('admin');
adminUI.button.render();
adminUI.dialog.show();

