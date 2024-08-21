/*
import { UIFactory } from "./UIFactory";
import { AdminButton } from "./UIObjects/AdminButton";
import { AdminDialog } from "./UIObjects/AdminDialog";
import { IButton } from "./UIObjects/IButton";
import { IDialog } from "./UIObjects/IDialog";
*/

import { IntruUIFactory } from "./InstruUIFactory";
import { InstructorButton } from "./UIObjects/InstructorButton";
import { InstructorDialog } from "./UIObjects/InstructorDialog";
import { IButton } from "./UIObjects/IButton";
import { IDialog } from "./UIObjects/IDialog";
//import { InstruUIManager } from "./InstruUIManager";

export class InstructorUIFactory implements IntruUIFactory{
    public createButton(): IButton {

        return new InstructorButton();
    }

    public createDialog(): IDialog {

        return new InstructorDialog();
    }
}