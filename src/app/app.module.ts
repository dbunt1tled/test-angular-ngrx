import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {CarsFormComponent} from './components/cars-form/cars-form.component';
import {CarsComponent} from './components/cars/cars.component';
import {DateFormatPipe} from './pipes/date-format.pipe';
import {StoreModule} from '@ngrx/store';
import {carsReducer} from './redux/cars.reduser';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {CarEffects} from './redux/car.effects';
import {RouterModule} from '@angular/router';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarsComponent,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent}
    ]),
    StoreRouterConnectingModule,
    (environment.production ? [] : StoreDevtoolsModule.instrument()),
    EffectsModule.forRoot([CarEffects]),
    StoreModule.forRoot({carsState: carsReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
