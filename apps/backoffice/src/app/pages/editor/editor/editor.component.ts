import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable, tap, zip } from 'rxjs';
import { AsyncPipe, NgFor, UpperCasePipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MiniModel, Model } from './mini-meta.model';
import { ChipModule } from 'primeng/chip';


@Component({
    selector: 'gita-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss'],
    standalone: true,
    imports: [AsyncPipe, NgFor, TableModule, ChipModule, UpperCasePipe],
})
export class EditorComponent implements OnInit {

  $modelNames!: Observable<string[]>;


  $fullResponses!: Observable<any>;
  $fullFields!: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.$modelNames = this.http.get<string[]>("/api/all/model-names");


    this.$fullResponses = this.http.get<Model>("/api/full/payment")

    this.$fullFields = this.$fullResponses.pipe(
      map(res => Object.keys(res[0]))
    );

  }



}
