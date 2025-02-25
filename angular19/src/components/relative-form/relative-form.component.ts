import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-relative-form',
  imports: [ReactiveFormsModule],
  templateUrl: './relative-form.component.html',
  styleUrl: './relative-form.component.css'
})
export class RelativeFormComponent {
  userForm: FormGroup = new FormGroup({
    fName: new FormControl("",[Validators.required]),
    lName: new FormControl("",[Validators.required,Validators.minLength(4)]),
    userName: new FormControl(""),
    city: new FormControl(""),
    state: new FormControl(""),
    zip: new FormControl(""),
    isAgree: new FormControl(false),
  })

  onSave(){
    const formValue = this.userForm.value
  }
}
