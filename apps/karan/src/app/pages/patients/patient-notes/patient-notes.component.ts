import { IdValue } from './../../../core/utils/crud';
import { SafeCrudArray } from '../../../core/utils/crud';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { ListboxModule } from 'primeng/listbox';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { ChipModule } from 'primeng/chip';
import { NgFor } from '@angular/common';



@Component({
    selector: 'gita-patient-notes',
    templateUrl: './patient-notes.component.html',
    styleUrls: ['./patient-notes.component.scss'],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        NgFor,
        ChipModule,
        ChipsModule,
        ButtonModule,
        RippleModule,
        ListboxModule,
        SharedModule,
    ],
})
export class PatientNotesComponent implements OnInit {

  defaultLabels: Set<string> = new Set(['VIP', 'Friend', 'Colleague', 'Referred', 'Poor',
    'Friendly', 'Religious', 'Rude', 'Hesitant', 'Introvert', 'Illiterate']);

  chips: Set<string> = new Set(this.defaultLabels);

  selected: Set<string> = new Set();

  notes = new SafeCrudArray<string>([]);

  notesForm!: FormGroup;

  currentNoteKey = -1;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.notesForm = this.fb.group({
      labels: [[]],
      note: ['  '],
      notes: [[]]
    });
  }

  onChipSelect(label: string) {
    this.selected.add(label);
    this.chips.delete(label);
    this.notesForm.controls['labels'].setValue([...this.selected]);
  }

  itemRemoved(event: { value: string }) {
    if (this.defaultLabels.has(event.value)) this.chips.add(event.value);
    this.selected.delete(event.value);
    this.chips = new Set(this.chips);
  }

  onValueAdd(event: { value: string }) {
    this.selected.add(event.value);
    this.notesForm.controls['labels'].setValue([...this.selected]);
  }

  addNote(note: string) {
    const key = this.currentNoteKey !== -1 ? this.currentNoteKey : this.notes.length;
    this.notes.add(note, key);
    this.currentNoteKey = -1;
  }

  onNoteSelect(event: { value: IdValue }) {
    this.currentNoteKey = event.value.key;
    this.notesForm.controls['note'].setValue(this.notes.valueAt(event.value.key) ?? "");
  }

  deleteNote(key: number) {
    this.notes.remove(key);
    this.currentNoteKey = -1;
    this.notesForm.controls['note'].setValue("");
  }

}
