import { BreakpointsService } from './../../services/breakpoints.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { globalRouteItems } from '../../models/global-routes.data';
import { FooterBasicModule } from '../../../../../../../libs/ui/src/lib/layout/footer-basic/footer-basic.module';

@Component({
    selector: 'gita-footer',
    templateUrl: './footer.component.html',
    standalone: true,
    imports: [FooterBasicModule]
})
export class FooterComponent implements OnInit {

  items!: MenuItem[];

  constructor(private breakpoints: BreakpointsService) { }

  ngOnInit() {
    this.items = globalRouteItems;
  }

}
