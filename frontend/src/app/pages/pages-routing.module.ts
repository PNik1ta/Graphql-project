import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { UserComponent } from "./users-page/user/user.component";
import { UsersPageComponent } from "./users-page/users-page.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainPageComponent },
  { path: 'users', loadChildren: () => import('./users-page/users.module').then(m => m.UsersModule) },
  { path: '**', redirectTo: '/' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {

}
