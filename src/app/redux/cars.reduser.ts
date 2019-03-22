import {Car} from '../models/cars/car';
import {CAR_ACTION, CarsAction} from './cars.action';

const initialState = {
  cars: []
}

export function carsReducer(state = initialState, action: CarsAction) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      }
    case CAR_ACTION.DELETE_CAR:
      return {
        ...state,
        cars: [...state.cars.filter( currentCar => currentCar.id !== action.payload.id)]
      }
    case CAR_ACTION.UPDATE_CAR:
      return {
        ...state,
        cars: [...state.cars.map( currentCar => (currentCar.id === action.payload.id) ? action.payload : currentCar )]
      }
    case CAR_ACTION.LOAD_CARS:
      return {
        ...state,
        cars: [...action.payload]
      }
    default:
      return state;
  }
}
