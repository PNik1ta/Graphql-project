import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon-component.component.html',
  styleUrls: ['./icon-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponentComponent implements OnInit {

  @Input('icon') icon?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
