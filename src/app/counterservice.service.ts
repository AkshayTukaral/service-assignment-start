import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterserviceService {


  counter:{active:number,inactive:number} ={active:0 ,inactive:0}




  constructor() { }

  userstatuschanged(type:string){

    if (type=='active') this.counter[type]=this.counter[type]+1;
    else this.counter[type]=this.counter[type]+1;
    console.log(this.counter);
    
  }
}
