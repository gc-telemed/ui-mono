import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreatmentEditorService {

  private displayEditor = new BehaviorSubject<boolean>(false);
  displayEditor$ = this.displayEditor.asObservable();

  showEditor(show?: boolean) {
    this.displayEditor.next(show ?? true);
  }
}
