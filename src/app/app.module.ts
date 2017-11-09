// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Routing Modules
import { AppRoutingModule }     from './routes/app-routing.module';
import { RouterModule }   from '@angular/router';

// Material Modules
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material'; 
import {MatInputModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";

// Services
import { HeroService } from './services/hero.service';

// Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppComponent } from './components/app/app.component';
import { HeroDetailComponent } from './components/hero-details/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { LunchComponent } from './components/lunch/lunch.component';

@NgModule({
  // Put components here!
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    LunchComponent
  ],
  // Module Imports here
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule

  ],
  // Add Services here
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
