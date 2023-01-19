import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'core/interfaces/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent implements OnInit {
  form: FormGroup;
  @Input('user') user: IUser | null;
  @Output() onSubmit: EventEmitter<IUser>;
  btnTitle: string;

  constructor() {
    this.form = new FormGroup({});
    this.user = null;
    this.onSubmit = new EventEmitter<IUser>();
    this.btnTitle = 'Create';
  }

  ngOnInit(): void {
    this.btnTitle = this.user ? 'Change' : 'Create';

    this.form = new FormGroup({
      name: new FormControl(this.user?.name ?? '', [Validators.required]),
      email: new FormControl(this.user?.email ?? '', [Validators.required, Validators.email])
    });
  }

  submit(): void {
    this.onSubmit.emit({
      ...this.form.value,
      id: this.user?.id
    })
  }
}
