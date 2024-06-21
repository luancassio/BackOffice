import { Routes } from "@angular/router";
import { UserComponent } from "./page/register/user.component";
import { ListUserComponent } from "./page/list/list-user.component";

export const UserRouting: Routes = [
    {
        path: 'register',
        component: UserComponent
    },
    {
        path: 'list',
        component: ListUserComponent
    },
]