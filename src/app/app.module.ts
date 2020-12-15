import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './conponents/shared/sidebar/sidebar.component';
import { FooterComponent } from './conponents/shared/footer/footer.component';
import { NavbarComponent } from './conponents/shared/navbar/navbar.component';
import { AnimationsComponent } from './conponents/animations/animations.component';
import { BlankComponent } from './conponents/blank/blank.component';
import { BordersComponent } from './conponents/borders/borders.component';
import { ButtonsComponent } from './conponents/buttons/buttons.component';
import { CardsComponent } from './conponents/cards/cards.component';
import { ChartsComponent } from './conponents/charts/charts.component';
import { ColorsComponent } from './conponents/colors/colors.component';
import { HomeComponent } from './conponents/home/home.component';
import { OtherComponent } from './conponents/other/other.component';
import { PageComponent } from './conponents/page/page.component';
import { TablesComponent } from './conponents/tables/tables.component';
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    AnimationsComponent,
    BlankComponent,
    BordersComponent,
    ButtonsComponent,
    CardsComponent,
    ChartsComponent,
    ColorsComponent,
    HomeComponent,
    OtherComponent,
    PageComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
