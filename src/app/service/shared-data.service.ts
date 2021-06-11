import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public data: string = "Дані відсутні!";

  constructor() { }

  public getData(){
    return this.data;
  }
  
  public setData(data: string){
    this.data = data;
  }
}
