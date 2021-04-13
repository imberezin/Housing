import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertyForm!: NgForm;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onBack(): void {
    this.router.navigate(['/']);
  }

  onSubmit(Form : NgForm): void {

    console.log(this.addPropertyForm.form);

    console.log("onSubmit");
  }
}
