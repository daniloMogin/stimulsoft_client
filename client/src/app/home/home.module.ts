import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home-logic/home.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    declarations: [HomeComponent]
})
export class HomeModule {}