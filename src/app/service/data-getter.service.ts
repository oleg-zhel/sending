import { Injectable } from '@angular/core';
import { Band } from '../interfaces/band';
import { Observable, of } from 'rxjs';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Member } from '../interfaces/member';



@Injectable({
  providedIn: 'root'
})
export class DataGetterService {

  private bands : Band[] = [
    {
      name: "Гарри Поттер",
      country: "Джоан Роулинг",
      genre: "304",
      year: 1985
    },
    {
      name: "Код да Винчи",
      country: "Дэн Браун",
      genre: "256",
      year: 1998
    }
  ];

  private members: Member[] = [
    {
      band: "Гарри Поттер",
      name:"Поттер",
      instrument: "16"
    },
    {
      band: "Гарри Поттер",
      name:"Уизли",
      instrument: "15"
    },
    {
      band: "Гарри Поттер",
      name:"Грейнджер",
      instrument: "15"
    },
    {
      band: "Код да Винчи",
      name:"Лэнгдон",
      instrument: "30"
    },
    {
      band: "Код да Винчи",
      name:"Тибинг",
      instrument: "52"
    },
    {
      band: "Код да Винчи",
      name:"Геттем",
      instrument: "32"
    },
  ];


  private username: string = '';

  private users = [
    'Admin', 'User1', 'User2'
  ];

  constructor() { }

  public getBands(): Observable<Band[]>{
    return of(this.bands);
  }

  public addBand(band: Band){
    this.bands.push(band);
  }

  public remBand(index: number){
    this.bands.splice(index, 1);
    
    console.log(this.bands);
  }

  public getUser(){
    return this.username;
  }

  public setUser(user: string){
    this.username = user;
  }

  public isUserExists(name: string){
    return this.users.indexOf(name) !== -1;
  }

  public getMembers(band: string){
    return of(this.members.filter(memb => {
      return memb.band === band;
    }));
  }

  public addMember(member: Member){
    this.members.push(member);
  }

  public remMember(name: string, band: string){
    console.log(name + " " + band);
    let index = this.members.findIndex(m =>{return m.name === name});
    console.log("deleting: " + index);
    this.members.splice(index, 1);
  }
}
