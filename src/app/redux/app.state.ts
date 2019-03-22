import {Car} from '../models/cars/car';

export interface AppState {
  carsState: {
    cars: Car[]
  };
}
