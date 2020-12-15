import { RouterModule, Routes } from '@angular/router';
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


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'buttons', component: ButtonsComponent},
    { path: 'cards', component: CardsComponent},
    { path: 'colors', component: ColorsComponent},
    { path: 'borders', component: BordersComponent},
    { path: 'animations', component: AnimationsComponent},
    { path: 'other', component: OtherComponent},
    { path: 'page', component: PageComponent},
    { path: 'blank', component: BlankComponent},
    { path: 'charts', component: ChartsComponent},
    { path: 'tables', component: TablesComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
