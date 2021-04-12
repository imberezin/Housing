import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId: number = 0;

  constructor(private route: ActivatedRoute, private router:Router) { }


  ngOnInit(): void {
    console.log("id form ngOnInit");
    this.propertyId = +this.route.snapshot.params['id'];
    console.log(this.propertyId);

    this.route.params.subscribe(
      (params) => {
        const newID = +params['id'];
        console.log("id form subscribe = " + newID);
        if (!isNaN(newID)){
          this.propertyId = newID;
        }
      }
    )
  }

  onNextPage(): void {

    this.propertyId += 1;
    this.router.navigate(['property-detail', this.propertyId])
  }

}
