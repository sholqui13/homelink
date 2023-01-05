import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from "./banner/banner.component";
import { BannerModule } from './banner/banner.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BannerComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BannerModule
    ]
})
export class AppModule { }
