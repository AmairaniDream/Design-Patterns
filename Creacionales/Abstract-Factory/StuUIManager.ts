
import { IButton } from './UIObjects/IButton';
import { IDialog } from './UIObjects/IDialog';
import { StudeUIFactory } from './StudeUIFactory';
//import { UIFactory } from './UIFactory';

export class StuUIManager {
    private factory:StudeUIFactory;

    constructor(factory:StudeUIFactory){
        this.factory=factory;
    }

    public createUI(userType: string): { button: IButton, dialog: IDialog } {

        const button = this.factory.createButton();
        const dialog = this.factory.createDialog();

        return { button, dialog };
    }
}