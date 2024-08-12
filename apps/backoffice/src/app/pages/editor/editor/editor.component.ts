import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable, tap, zip } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MiniModel, Model } from './mini-meta.model';

@Component({
    selector: 'gita-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss'],
    standalone: true,
    imports: [AsyncPipe, NgFor, TableModule],
})
export class EditorComponent implements OnInit {

  $resp!: Observable<MiniModel>;

  $fields!: Observable<any>;

  $fullResponses!: Observable<any>;
  $fullFields!: Observable<any>;

  $fullFieldInfos!: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.$resp = this.http.get<MiniModel>("/api/mini/payment").pipe(
      tap(s => console.log("mini", s))
    );

    this.$fields = this.$resp.pipe(
      map(res => Array.from(Object.values(res)))
    );

    this.$fullResponses = this.http.get<Model>("/api/full/payment").pipe(
      tap(s => console.log("full", s))
    );

    this.$fullFields = this.$fullResponses.pipe(
      map(res => Object.keys(res[0])),
      tap(s => console.log("fullFields", s))
    );

    this.$fullFieldInfos = this.$fullResponses.pipe(
      tap(s => console.log("infos", s))
    );

    this.$fullFieldInfos.subscribe()

  }



}
