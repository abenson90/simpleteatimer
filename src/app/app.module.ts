import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DataService} from './core/data.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TimerComponent} from './timer/timer.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'timer', component: TimerComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, TimerComponent
  ],
  imports: [RouterModule.forRoot(
      appRoutes),NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
