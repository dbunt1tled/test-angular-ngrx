import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Car} from '../../models/cars/car';
import {CarsService} from '../../services/cars.service';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.sass']
})
export class CarsFormComponent implements OnInit {
  public carForm: FormGroup;
  public minSymbols = 3;
  public submitted = false;

  constructor(
    private _fb: FormBuilder,
    private _carsService: CarsService
  ) { }

  ngOnInit() {
    this.carForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(this.minSymbols)]],
      model: ['', [Validators.required, Validators.minLength(this.minSymbols)]],
    });
  }
  get getField() { return this.carForm.controls; }
  onAdd(event) {
    event.preventDefault();
    this.submitted = true;
    if (this.carForm.invalid) {
      console.log(this.getFormValidationErrors());
      return;
    }
    const car  = new Car().deserialize(this.carForm.value);
    this.carForm.reset();
    this.submitted = false;
    this._carsService.addCar(car);
  }
  onLoad(event) {
    event.preventDefault();
    this._carsService.loadCars();
  }
  getFormValidationErrors() {
    Object.keys(this.carForm.controls).forEach(key => {
      const controlErrors = this.carForm.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }
}
