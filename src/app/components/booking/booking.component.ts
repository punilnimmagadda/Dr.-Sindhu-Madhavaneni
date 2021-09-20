import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher, DateAdapter } from '@angular/material/core';
import { IBooking } from './booking';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  booking: IBooking = {
    bookingID: uuidv4(),
    bookingDate: null,
    bookingTime: null,
    firstName: null,
    lastName: null,
    age: null,
    gender: null,
    phoneNumber: null,
    emailAddress: null,
    createdDate: null,
    lastModified: null
  };
  step1FormGroup: FormGroup;
  step2FormGroup: FormGroup;
  matcher = new MyErrorStateMatcher();
  isAppointmentConfirmed: boolean = false;
  defaultDate: any;
  availableTimeList: any = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];
  genderList: any = ['Male', 'Female'];
  step: number = 1;

  constructor(private _formBuilder: FormBuilder, private _dateAdapter: DateAdapter<Date>) {
    this.step1FormGroup = this._formBuilder.group({
      'datePicker': new FormControl('', [Validators.required]),
      'timePicker': new FormControl('', [Validators.required])
    });

    this.step2FormGroup = this._formBuilder.group({
      'firstnameInput': new FormControl('', [Validators.required]),
      'lastnameInput': new FormControl('', [Validators.required]),
      'ageInput': new FormControl('', [Validators.required, Validators.min(1), Validators.max(99)]),
      'genderPicker': new FormControl('', [Validators.required]),
      'telephoneInput': new FormControl('', [Validators.required]),
      'emailInput': new FormControl('', [Validators.required, Validators.email])
    });

    // dd/MM/yyyy
    this._dateAdapter.setLocale('en-IN');
  }

  ngOnInit(): void {
    this.defaultDate = new FormControl(new Date());
    console.log(this.booking.bookingID);
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  dateFilter = (d?: Date): boolean => {
    const today = new Date();
    let date = d || today;
    const day = (d || today).getDay();
    const dateGreaterThanToday = date.setHours(0, 0, 0, 0) >= today.setHours(0, 0, 0, 0);
    // const isAvailableDate = this.availableDateList.includes();
    // Dates should be greater than today and should exclude Saturdays and Sundays
    return dateGreaterThanToday && day !== 0 && day !== 6;
  }

  onDateSelection(event: any) {
    this.booking.bookingDate = new Date(event.value);
    console.log(this.booking.bookingDate);
    // getAvailableTimeList();
  }

  onTimeSelection(event: any) {
    this.booking.bookingTime = event.value;
    console.log(this.booking.bookingTime);
  }

  onGenderSelection(event: any) {
    this.booking.gender = event.value;
    console.log(this.booking.gender);
  }

  onStep1FormSubmit(value: any) {
    console.log(value);
  }

  onStep2FormSubmit(value: any) {
    console.log(value);
  }

  confirmAppointment() {
    // TODO: ON BOOKING CONFIRMATION


    this.isAppointmentConfirmed = true;
  }
}
