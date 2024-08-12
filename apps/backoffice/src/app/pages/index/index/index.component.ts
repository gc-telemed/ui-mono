import { Component } from '@angular/core';
import { faChevronCircleDown, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'gita-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    standalone: true,
    imports: [FontAwesomeModule],
})
export class IndexComponent {

  faPlus = faPlusCircle;
  faChevronDown = faChevronCircleDown;
}
