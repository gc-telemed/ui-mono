import { Observable } from 'rxjs';
import { InventoryCreate, InventoryUpdate } from './../model/inventory.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/karan/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryApiService {

  readonly API_URL = `${environment.apiUrl}/equipments`;
  readonly API_PAGINATED_URL = (index: number, size: number) => this.API_URL + `/list/${index}/${size}`;

  constructor(private http: HttpClient) { }

  create(payload: InventoryCreate): Observable<number> {
    return this.http.post<number>(this.API_URL, payload);
  }

  getPaged(index: number = 0, size: number = 50): Observable<InventoryUpdate[]> {
    return this.http.get<InventoryUpdate[]>(this.API_PAGINATED_URL(index, size));
  }
}
