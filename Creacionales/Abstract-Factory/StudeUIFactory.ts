import { IButton } from "./UIObjects/IButton";
import { IDialog } from "./UIObjects/IDialog";

export interface StudeUIFactory{
    createButton(): IButton;
    createDialog(): IDialog;
}