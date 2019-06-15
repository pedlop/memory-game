import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { UserService } from '../../../core/user/user.service';

@Component({
  selector: 'plop-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss']
})
export class DialogUserComponent implements OnInit {

  userForm: FormGroup;
  levels: any[] = [
    { value: 'easy', viewValue: 'Fácil' },
    { value: 'medium', viewValue: 'Normal' },
    { value: 'hard', viewValue: 'Difícil' }
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogUserComponent>,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      gameDifficulty: ['', Validators.required]
    });
  }

  onSubmitUser(): void {
    this.userService.setUserOptions(this.userForm.getRawValue());
    this.dialogRef.close();
  }

}
