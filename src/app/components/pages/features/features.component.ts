import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  Form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  genders: any[]=[];
  minDate: any;
  maxDate: any;
  minEndDate: any;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {

    this.genders=[
      { id : 1 , name : 'male'}, { id : 2 , name : 'female'}
    ];

    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate = new Date();

    this.Form = this.fb.group({
      nominee_name: ['', Validators.required],
      nationality: ['', Validators.required],
      state: ['', Validators.required],
      telephone_number: ['', Validators.required],
      email: ['', [Validators.email,Validators.required]],
      occupation: ['', Validators.required],
      gender: ['', Validators.required],
      option1: [0],
      option2: [1],
      plan: ['', Validators.required],
      insurance_from: ['', Validators.required],
      insurance_to: ['', Validators.required],
      birth_date: ['', Validators.required],
      age :['', Validators.required],
      residential_address :['', Validators.required],
    });
  }

  setEndDate(event){
    console.log(event.value);
    this.minEndDate = event.value
  }

  reset() {
    this.Form.reset();
  }
  
  onSubmit() {
    console.log(this.Form.value);
  }

}
