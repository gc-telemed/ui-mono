import { TeethLibService } from './../services/teeth-lib.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { defaultToothConditions, ISO3950Notation } from './../../../../core/models/teeth.model';
import { IdValue, SafeCrudArray } from './../../../../core/utils/crud';
import { SharedModule } from 'primeng/api';
import { ListboxModule } from 'primeng/listbox';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { NgIf, TitleCasePipe } from '@angular/common';

@Component({
    selector: 'gita-tooth-form',
    templateUrl: './tooth-form.component.html',
    styleUrls: ['./tooth-form.component.scss'],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        NgIf,
        DropdownModule,
        CalendarModule,
        InputTextareaModule,
        ButtonModule,
        RippleModule,
        ListboxModule,
        SharedModule,
        TitleCasePipe,
    ],
})
export class ToothFormComponent implements OnInit {

  @Input() mode!: "permanent" | "deciduous";

  toothConditions = defaultToothConditions.map(c => c.charAt(0).toUpperCase() + c.substring(1));

  currentHistoryItem = -1;
  historyItems = new SafeCrudArray<string>([]);

  toothForm!: FormGroup;
  toothIndex = -1;

  constructor(private fb: FormBuilder, private tl: TeethLibService) { }

  currentToothIndex(): number {
    this.toothIndex = this.mode === 'permanent' ? this.tl.currentPermanentTooth : this.tl.currentDeciduousTooth;
    return this.toothIndex;
  }

  currentTooth(): string {
    if (this.toothIndex === -1) return "";
    return new ISO3950Notation(this.toothIndex).describe();
  }

  ngOnInit(): void {
    this.toothForm = this.fb.group({
      condition: [],
      diagnosedDate: [],
      historyItem: [],
      historyItems: [[]]
    });
  }

  addNote(note: string) {
    if (note.trim() === "") return;
    const key = this.currentHistoryItem !== -1 ? this.currentHistoryItem : this.historyItems.length;
    this.historyItems.add(note, key);
    this.currentHistoryItem = -1;
  }

  onNoteSelect(event: { value: IdValue }) {
    this.currentHistoryItem = event.value.key;
    this.toothForm.controls['historyItem'].setValue(this.historyItems.valueAt(event.value.key) ?? "");
  }

  deleteNote(key: number) {
    this.historyItems.remove(key);
    this.currentHistoryItem = -1;
    this.toothForm.controls['historyItem'].setValue("");
  }
}
