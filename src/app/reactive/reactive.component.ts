import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  SignupForm!: FormGroup;
  genders = ['male', 'female'];
  forbiddenUserNames = ['geetha', 'puja', 'bhagwat'];
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.SignupForm = this.fb.group({
      username: ['', [Validators.required, this.forbiddenNames.bind(this)]],
      gender: [''],
      hobbies: this.fb.array([]),
    });
    this.SignupForm.setValue({
      username: 'geetha',
      gender: 'female',
      hobbies: [],
    });
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.SignupForm.get('hobbies')).push(control);
  }
  get allHobbies() {
    return (this.SignupForm.controls["hobbies"] as FormArray).value
  }
  forbiddenNames(control: FormControl) {
    if (this.forbiddenUserNames.indexOf(control.value) != -1) {
      return { nameisForbidden: true };
    }
    return null;
  }

  onSubmit() {
    console.log(this.SignupForm);
  }
}
