import { Component, OnInit } from '@angular/core';
import { Car, Cars } from './models/cars/car';
import { Store } from '@ngrx/store';
import { AppState } from './redux/app.state';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'ngrx';
  public cars: Car[] = [];
  public carState: Observable<Cars>;

  constructor(private _store: Store<AppState>) {}
  ngOnInit(): void {
    this.carState = this._store.select('carsState');
  }
}
