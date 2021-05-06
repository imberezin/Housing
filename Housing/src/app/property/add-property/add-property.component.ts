import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from 'src/app/model/IProperty';
import { IPropertyBase } from 'src/app/model/IPropertyBase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertyForm!: NgForm;
  @ViewChild('formTabs') formTabs!: TabsetComponent;

  public propertyTypes: Array<string> = ["House","Apartment","Duplex"];
  public furnishTypes: Array<string> = ["Fully","Semi","Untarnished"];

  public cityList: any[] = [];

  public propertyView: IProperty = {
      Id: null,
      Name: '',
      Price: null,
      SellRent: null,
      PType: null,
      FType: null,
      BHK: null,
      BuiltArea: null,
      City: '',
      RTM: null,
      Description: null
  };

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }


  onBack(): void {
    this.router.navigate(['/']);
  }

  onSubmit(Form : NgForm): void {

    console.log(this.addPropertyForm.form);

    console.log("onSubmit");
  }
}
