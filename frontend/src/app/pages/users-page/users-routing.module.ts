import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { UsersPageComponent } from "./users-page.component";

const routes: Routes = [
  { path: '', component: UsersPageComponent, children: [
    { path: ':id', component: UserComponent }
  ] },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {

}
