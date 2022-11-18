import { TreatmentCreate, TreatmentUpdate } from './../model/treatment.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/karan/src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreatmentApiService {

  readonly API_URL = `${environment.apiUrl}/treatments`;
  readonly API_PAGINATED_URL = (index: number, size: number) => this.API_URL + `/list/${index}/${size}`;

  constructor(private http: HttpClient) { }

  create(payload: TreatmentCreate): Observable<number> {
    return this.http.post<number>(this.API_URL, payload);
  }

  getPaged(index: number = 0, size: number = 50): Observable<TreatmentUpdate[]> {
    return this.http.get<TreatmentUpdate[]>(this.API_PAGINATED_URL(index, size));
  }
}
