import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from 'src/app/model/IProperty';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {

  @Input()
  property!: IProperty;
  @Input()
  hideIcon: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
