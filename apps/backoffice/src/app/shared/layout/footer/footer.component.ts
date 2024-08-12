import { Component } from '@angular/core';
import { FooterBasicModule } from '../../../../../../../libs/ui/src/lib/layout/footer-basic/footer-basic.module';


@Component({
    selector: 'gita-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [FooterBasicModule],
})
export class FooterComponent {

  icons = [];
}
