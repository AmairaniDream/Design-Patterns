import { UIFactory } from "./UIFactory";
import { StudeUIFactory } from "./StudeUIFactory";
import { StudentButton } from "./UIObjects/StudentButton";
import { StudentDialog } from "./UIObjects/StudentDialog";
import { IButton } from "./UIObjects/IButton";
import { IDialog } from "./UIObjects/IDialog";



export class StudentUIFactory implements StudeUIFactory{
    public createButton(): IButton {

        return new StudentButton();
    }

    public createDialog(): IDialog {

        return new StudentDialog();
    }
}