import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from "./banner/banner.component";
import { BannerModule } from './banner/banner.module';
import { ArticlesHomeComponent } from './articles-home/articles-home.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BannerComponent,
        ArticlesHomeComponent
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
