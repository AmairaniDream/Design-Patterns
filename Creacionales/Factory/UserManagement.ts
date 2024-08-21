
import { IUser } from './IUser';
import { UserFatory } from './UserFactory';

export class UserManagement {
    public createUser(type: string, id: number, name: string): IUser {
        return UserFatory.createUser(type,id,name);

    }
}