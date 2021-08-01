import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher, DateAdapter } from '@angular/material/core';

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
  step1FormGroup: FormGroup;
  step2FormGroup: FormGroup;
  step1Completed: boolean = false;
  step2Completed: boolean = false;
  isAppointmentConfirmed: boolean = false;
  defaultDate: any;
  selectedDate: any;
  selectedTime: any;
  availableTimeList: any = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"];
  step = 1;
  constructor(private _formBuilder: FormBuilder, private _dateAdapter: DateAdapter<Date>) {
    this.step1FormGroup = this._formBuilder.group({
      'datePicker': new FormControl('', [Validators.required]),
      'timePicker': new FormControl('', [Validators.required])
    });

    this.step2FormGroup = this._formBuilder.group({
      'telephoneInput': new FormControl('', [Validators.required]),
      'emailInput': new FormControl('', [Validators.required, Validators.email])
    });

    // MM/dd/yyyy
    this._dateAdapter.setLocale('en-IN');
  }

  ngOnInit(): void {
    this.defaultDate = new FormControl(new Date());
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

  dateFilter = (d: Date | null): boolean => {
    const today = new Date();
    const day = (d || today).getDay();
    const dateGreaterThanToday = d.setHours(0, 0, 0, 0) >= today.setHours(0, 0, 0, 0);
    // const isAvailableDate = this.availableDateList.includes();
    // Dates should be greater than today and should exclude Saturdays and Sundays
    return dateGreaterThanToday && day !== 0 && day !== 6;
  }

  onDateSelection(event: any) {
    this.selectedDate = new Date(event.value);
    console.log(this.selectedDate);
    // getAvailableTimeList();
    // this.isAppointmentConfirmed = true;
  }

  onTimeSelection(event: any) {
    this.selectedTime = event.value;
    console.log(this.selectedTime);
    // this.isAppointmentConfirmed = true;
  }

  onStep1FormSubmit(value: any) {
    console.log(value);
  }

  onStep2FormSubmit(value: any) {
    console.log(value);
  }

  matcher = new MyErrorStateMatcher();

  confirmAppointment() {
    // TODO: ON BOOKING CONFIRMATION


    this.isAppointmentConfirmed = true;
  }
}
