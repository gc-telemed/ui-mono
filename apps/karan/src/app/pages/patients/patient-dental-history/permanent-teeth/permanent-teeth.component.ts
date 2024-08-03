import { Component } from '@angular/core';
import { TeethLibService } from './../services/teeth-lib.service';
import { ToothFormComponent } from '../tooth-form/tooth-form.component';

@Component({
    selector: 'gita-permanent-teeth',
    templateUrl: './permanent-teeth.component.html',
    styleUrls: ['./permanent-teeth.component.scss'],
    standalone: true,
    imports: [ToothFormComponent],
})
export class PermanentTeethComponent {

  constructor(protected tl: TeethLibService) { }
}
