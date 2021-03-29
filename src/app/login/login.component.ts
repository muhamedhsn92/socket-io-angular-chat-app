import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  private PREFIX = 'whatsapp-clone-angular-id';
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      idNumber: null
    })
  }

  ngOnInit(): void {
    // console.log('uuid', uuidv4());
    if (localStorage.getItem(this.PREFIX)) {
      this.form.controls.idNumber.patchValue(localStorage.getItem(this.PREFIX))
    } else {
      this.generateuuid();
    }
  }

  handleSubmit() {
    console.log('form value', this.form.value)
  }
  generateuuid() {

    localStorage.setItem(this.PREFIX, uuidv4());
    // localStorage.getItem(PREFIX);
    this.form.controls.idNumber.patchValue(localStorage.getItem(this.PREFIX));
    // this.form.controls.idNumber.patchValue(uuidv4());

  }
}
