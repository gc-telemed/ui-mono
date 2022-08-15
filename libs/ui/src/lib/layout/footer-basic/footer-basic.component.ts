import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'gita-footer-basic',
  templateUrl: './footer-basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterBasicComponent {

  @Input() icons!: IconDefinition[];

  protected year = new Date().getFullYear();

}
