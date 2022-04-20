import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
orderApi='http://localhost:3000/order'
  constructor(private http:HttpClient) { }
  public createOrder(amount:number){
    return this.http.post(this.orderApi,{amount})
  }
}
