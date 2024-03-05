import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from 'src/app/datetime-picker/src';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-test-form',
  standalone: true,
  imports: [NgxMatTimepickerModule, NgxMatDatetimePickerModule, FormsModule, ReactiveFormsModule, MaterialModule],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
  ],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.css'
})
export class TestFormComponent {
  minDate = new Date('2/10/2024');
  maxDate = new Date();
  stepHour = 1;
  stepMinute = 5;
  stepSecond = 30;
  enableMeridian = true;
  disableMinute = false;
  hideTime = false;
  disabled = false;
  showSpinners = true;
  showSeconds = false;
  dateControl = new FormControl(new Date());
}
