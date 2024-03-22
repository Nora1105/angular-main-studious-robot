import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrl: './form-editor.component.css'
})
export class FormEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
  });
  dataSource:any[]=[]
  onSubmit() {
    this.dataSource.push(this.profileForm.value)
    this.profileForm.reset()
  }
  deleteButton(index:number){
    this.dataSource.splice(index,1)
  }
}