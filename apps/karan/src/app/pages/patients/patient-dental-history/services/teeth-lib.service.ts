import { conditionToColor, EMPTY_TEETH_HISTORY, ToothHistory } from './../../../../core/models/teeth.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeethLibService {

  teethHistory: ToothHistory[] = EMPTY_TEETH_HISTORY;

  currentPermanentTooth!: number;
  currentDeciduousTooth!: number;

  shouldBeStroked(index: number) {
    if (index > this.teethHistory.length) return false;
    return this.teethHistory[index] && this.teethHistory[index].notes.length;
  }

  conditionToColor(toothHistory?: ToothHistory) {
    if (!toothHistory) return;
    if ([this.currentPermanentTooth, this.currentDeciduousTooth]
      .includes(toothHistory.iso)) {
      return "#71bbd4";
    }
    return conditionToColor(toothHistory.condition);
  }

  getByIso(index: number) {
    return this.teethHistory.find(t => t.iso === index)
  }

  selectedToothIso(index: number) {
    if (index <= 48) {
      this.currentPermanentTooth = index;
    } else {
      this.currentDeciduousTooth = index;
    }
  }
}
