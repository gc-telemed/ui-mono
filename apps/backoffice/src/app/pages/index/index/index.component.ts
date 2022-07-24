import { Component } from '@angular/core';
import { faChevronCircleDown, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'gita-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {

  faPlus = faPlusCircle;
  faChevronDown = faChevronCircleDown;
}
