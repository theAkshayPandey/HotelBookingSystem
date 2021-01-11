import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../listhotel/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelDataService {

  constructor(private http:HttpClient) { }
  private base_url: string = './../../assets/hotel.json';
  
  getHotels():Observable<any>{
    return this.http.get<any>(this.base_url) as Observable<Hotel>;
  }
}
