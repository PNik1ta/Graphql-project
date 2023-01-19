import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'core/interfaces/user.interface';
import { UsersService } from 'core/services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  imgSrc: string = 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg';
  user$?: Observable<{ user: IUser, loading: boolean }>;
  isChange: boolean;

  constructor(
    private readonly usersService: UsersService,
    private readonly route: ActivatedRoute,
    private readonly cdr: ChangeDetectorRef,
    private readonly router: Router,
  ) {
    this.isChange = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      if(id) {
        this.user$ = this.usersService.getUserById(id);
        this.cdr.detectChanges();
      }
    })
  }

  change(): void {
    this.isChange = !this.isChange
  }

  onSubmit(user: IUser): void {
    const { name, email, id } = user;
    this.usersService.updateUser(id, name, email).subscribe(user => {
      if(user) {
        this.change();
        //this.router.navigate(['/users', user.id])
      }
    })
  }

  delete(id: number): void {
    if (confirm('Delete user?')) {
      this.usersService.deleteUser(id).subscribe((id) => {
        console.log(id);
        this.router.navigate(['/users']);
      })
    }
  }
}
