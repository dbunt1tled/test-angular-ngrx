import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Store} from '@ngrx/store';
import {AppState} from '../redux/app.state';
import { map } from 'rxjs/operators';
import {Car, Cars} from '../models/cars/car';
import {AddCar, DeleteCar, LoadCars, UpdateCar} from '../redux/cars.action';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  static BASE_URL = environment.carApi;

  constructor(
    private _http: HttpClient,
    private _store: Store<AppState>
  ) { }

  preloadCars() {
    return this._http.get<Car[]>(`${CarsService.BASE_URL}/cars`);
  }
  loadCars() {
    this.preloadCars().subscribe( (cars: Car[]) => {
      this._store.dispatch(new LoadCars(cars));
    });
  }

  addCar(newCar: Car) {
    this._http.post(`${CarsService.BASE_URL}/cars`, newCar).subscribe( (car: Car) => {
      this._store.dispatch(new AddCar(car));
    });
  }
  deleteCar(deleteCar: Car) {
    this._http.delete(`${CarsService.BASE_URL}/cars/${deleteCar.id}`).subscribe( (response) => {
      console.log(response);
      this._store.dispatch(new DeleteCar(deleteCar));
    });
  }
  updateCar(updateCar: Car) {
    this._http.put(`${CarsService.BASE_URL}/cars/${updateCar.id}`, updateCar).subscribe( (car: Car) => {
      this._store.dispatch(new UpdateCar(car));
    });
  }
}
