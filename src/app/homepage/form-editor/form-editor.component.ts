import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrl: './form-editor.component.css'
})
export class FormEditorComponent {
  private editstat: boolean = false;
  private editIndex!: number;

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });

  dataSource: any[] = []

  onSubmit() {
    if (this.editstat) {
      this.dataSource[this.editIndex] = this.profileForm.value;
      this.editstat = false;
    } else {
      this.dataSource.push(this.profileForm.value);
    }
    this.profileForm.reset()
  }

  deleteButton(index: number) {
    this.dataSource.splice(index, 1)
  }

  editButton(index: number) {
    this.editstat = true;
    this.editIndex = index;
    const { firstName, lastName } = this.dataSource[index];
    this.profileForm.patchValue({ firstName, lastName });
  }
}