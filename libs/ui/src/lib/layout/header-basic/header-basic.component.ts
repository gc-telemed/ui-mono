import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'gita-header-basic',
  templateUrl: './header-basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderBasicComponent {

  @Input() isSidebarShown$!: Observable<boolean>;
  @Input() headerNavItems!: MenuItem[];

  @Input() collapser!: () => void;
  @Input() expander!: () => void;

  @Input() prodPref = "OCT";
  @Input() authPref = "RK";


  toggleSidebar() {
    this.isSidebarShown$.pipe(take(1)).subscribe(
      shown => {
        shown ? this.collapser() : this.expander();
      }
    );
  }
}
