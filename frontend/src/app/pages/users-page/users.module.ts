import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './users-page.component';
import { UserComponent } from './user/user.component';
import { IconModule } from 'src/app/components/icon/icon.module';
import { UsersRoutingModule } from './users-routing.module';
import { UserFormModule } from "../../components/user-form/user-form.module";

@NgModule({
    declarations: [
        UsersPageComponent,
        UserComponent
    ],
    imports: [
        CommonModule,
        IconModule,
        UsersRoutingModule,
        UserFormModule
    ]
})
export class UsersModule { }
