import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'core/interfaces/user.interface';
import { UsersService } from 'core/services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersPageComponent implements OnInit {
  users$?: Observable<IUser[]>;
  isNew: boolean;

  constructor(
    private readonly usersService: UsersService,
    private router: Router
  ) {
    this.isNew = false;
  }

  ngOnInit(): void {
    this.users$ = this.usersService.getAllUsers();
  }

  isNewTrigger(): void {
    this.isNew = !this.isNew;
  }

  onSubmit(user: IUser) {
    const {email, name} = user;
    this.usersService.createUser(name, email).subscribe((user) => {
      if(user) {
        this.isNewTrigger();
        this.router.navigate(['/users', user.id]);
      }

    })
  }

}
