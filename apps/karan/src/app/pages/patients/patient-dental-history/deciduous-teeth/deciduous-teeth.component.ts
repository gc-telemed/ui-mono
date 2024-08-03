import { Component } from '@angular/core';
import { TeethLibService } from '../services/teeth-lib.service';
import { ToothFormComponent } from '../tooth-form/tooth-form.component';

@Component({
    selector: 'gita-deciduous-teeth',
    templateUrl: './deciduous-teeth.component.html',
    styleUrls: ['./deciduous-teeth.component.scss'],
    standalone: true,
    imports: [ToothFormComponent],
})
export class DeciduousTeethComponent {

  constructor(protected tl: TeethLibService) { }
}
