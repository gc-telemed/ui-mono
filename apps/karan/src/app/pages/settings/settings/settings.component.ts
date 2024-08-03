import { Component, OnInit } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
    selector: 'gita-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    standalone: true,
    imports: [FieldsetModule],
})
export class SettingsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
