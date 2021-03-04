import { Injectable } from '@angular/core';

@Injectable()
export class StateService {
  contact:any;
  getUserData(){
    return this.list;
  }
  setUserData(data:any[]){
    this.list = data;
  }
}
