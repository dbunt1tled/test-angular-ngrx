import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../models/cars/car';
import {CarsService} from '../../services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.sass']
})
export class CarsComponent implements OnInit {
  @Input() car: Car;
  constructor(
    private _carsService: CarsService
  ) { }

  ngOnInit() {
  }
  onDelete(event) {
    event.preventDefault();
    this._carsService.deleteCar(this.car);
  }
  onBuy(event) {
    event.preventDefault();
    this.car.isSold = true;
    this._carsService.updateCar(this.car);
  }
}
