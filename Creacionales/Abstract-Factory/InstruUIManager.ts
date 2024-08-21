
import { IButton } from './UIObjects/IButton';
import { IDialog } from './UIObjects/IDialog';
//import { UIFactory } from './UIFactory';
import { IntruUIFactory } from './InstruUIFactory';

export class InstruUIManager {
    private factory:IntruUIFactory;

    constructor(factory:IntruUIFactory){
        this.factory=factory;
    }

    public createUI(userType: string): { button: IButton, dialog: IDialog } {

        const button = this.factory.createButton();
        const dialog = this.factory.createDialog();

        return { button, dialog };
    }
}
