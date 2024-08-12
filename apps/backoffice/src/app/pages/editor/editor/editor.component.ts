import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable, tap, zip } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MiniModel } from './mini-meta.model';

@Component({
    selector: 'gita-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss'],
    standalone: true,
    imports: [AsyncPipe, TableModule],
})
export class EditorComponent implements OnInit {

  $resp!: Observable<MiniModel>;

  $fields!: Observable<any>;

  $fieldInfos!: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.$resp = this.http.get<MiniModel>("/api/meta/payment");

    this.$fields = this.$resp.pipe(
      map(res => Array.from(Object.values(res)))
    );


  }



}
