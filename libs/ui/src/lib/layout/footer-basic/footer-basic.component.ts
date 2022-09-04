import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'gita-footer-basic',
  templateUrl: './footer-basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterBasicComponent {

  @Input() icons!: MenuItem[];

  protected year = new Date().getFullYear();

}
