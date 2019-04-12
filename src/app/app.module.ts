import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { NavigationComponent } from './navigation/navigation.component';
import { SliderComponent } from './slider/slider.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [AppComponent, NavigationComponent, SliderComponent, TopMenuComponent, BannerComponent, AboutUsComponent, MenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

