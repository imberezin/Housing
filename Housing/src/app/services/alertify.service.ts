import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';
// https://github.com/MohammadYounes/AlertifyJS

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

error(message: string) {
  alertify.error(message);
}
success(message: string) {
  alertify.success(message);
}
warning(message: string) {
  alertify.warning(message);
}

constructor() { }

}

