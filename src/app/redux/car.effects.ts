import {Injectable} from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {AddCar, CAR_ACTION} from './cars.action';
import { switchMap, mergeMap } from 'rxjs/operators';
import {CarsService} from '../services/cars.service';
import {Car} from '../models/cars/car';

@Injectable()
export class CarEffects {
  /* actions$ - symbol $ simply show us is a type stream  /**/
  constructor (
    private actions$: Actions,
    private _carsService: CarsService
  ) {}
  @Effect() loadCars = this.actions$.pipe(
    ofType(CAR_ACTION.ADD_CAR),
    switchMap((action: AddCar) => {
      return this._carsService.preloadCars();
    }),
    mergeMap( (cars: Car[]) => {
      return [
        {
          type: CAR_ACTION.LOAD_CARS,
          payload: cars
        }
      ];
    })
  );
}
