import {Deserializable} from '../utils/deserializable';

export class Car implements Deserializable {
  public name: string;
  public model: string;
  public date: string;
  public isSold = false;
  public id?: number;
  deserialize(input: any): this {
    if (!input.hasOwnProperty('name') || !input.hasOwnProperty('model')) {
      throw new Error('Car object has wrong format');
    }
    if (!input.hasOwnProperty('date') || input.date === '') {
      input.date = new Date().toJSON().slice(0, 19).replace('T', ' ');
    }
    if (!input.hasOwnProperty('isSold') || (typeof input.isSold !== 'boolean')) {
      input.isSold = false;
    }
    Object.assign(this, input);
    return this;
  }

}

export interface Cars {
  cars: Car[];
}
