import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { PagesRoutingModule } from './pages-routing.module';
import { IconModule } from "../components/icon/icon.module";



@NgModule({
    declarations: [
        MainPageComponent,
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        IconModule
    ]
})
export class PagesModule { }
