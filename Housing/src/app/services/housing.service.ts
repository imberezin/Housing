import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProperty } from '../property/iproperty';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(sellRent: number): Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const jsonData = JSON.stringify(data)
        const propertiesArray: Array<IProperty> = JSON.parse(jsonData);;
        const propertiesFilterArray: Array<IProperty> = [];
        propertiesArray.forEach(property =>{
          if (property.SellRent === sellRent){
            propertiesFilterArray.push(property);
          }
        })
        return propertiesFilterArray;
      })
    );
  }
}
