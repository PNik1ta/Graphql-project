import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IMenu } from 'core/interfaces/menu.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponentComponent implements OnInit {
  menu?: IMenu[];

  constructor() {
    this.menu = [
      { id: 1, title: 'Main page', href: '/' },
      { id: 2, title: 'Users', href: '/users', icon: 'bi bi-people' },
    ]
  }

  ngOnInit(): void {
  }

}
