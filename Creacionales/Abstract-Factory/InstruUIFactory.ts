import { IButton } from "./UIObjects/IButton";
import { IDialog } from "./UIObjects/IDialog";

export interface IntruUIFactory{
    createButton(): IButton;
    createDialog(): IDialog;
}