import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TabularModule } from '../../../features/tabular/tabular.module';

@Component({
    selector: 'gita-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss'],
    standalone: true,
    imports: [AsyncPipe, TabularModule],
})
export class EditorComponent implements OnInit {

  $resp!: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.$resp = this.http.get("/api/meta/payment", {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).pipe(
      map(res => JSON.stringify(res, null, 4))
    );

    this.$resp.subscribe(res => console.log("res", res));
  }



}
