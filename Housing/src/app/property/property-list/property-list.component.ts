import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from 'src/app/model/IProperty';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  public properties: Array<IProperty> = [];
  public sellRent: number = 1;

  constructor(private housingService: HousingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()){
      this.sellRent = 2
    }
    this.housingService.getAllProperties(this.sellRent).subscribe((data) =>{
      this.properties = data
      console.log(data)
    }, error => {
      console.log('http error!');
      console.log(error);
    });
  }

}
