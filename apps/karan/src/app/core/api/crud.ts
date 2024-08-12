import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, map } from 'rxjs/operators';

const sdk = <NTT>(baseUrl = "/api") => (model: string) => {
  // Create an observable for each CRUD operation

  const create = (item: NTT) =>
    ajax.post(`${baseUrl}/${model}`, item).pipe(
      map((response) => response.response),
      catchError((error) => {
        console.error('Error creating item:', error);
        return of(null);
      })
    );

  const readOrSearch = (id: string | JSON) => {
    const getOrPut = () => {
      if (typeof id === 'object') {
        return ajax.put(`${baseUrl}/${model}`, id)
      } else {
        return ajax.get(`${baseUrl}/items/${id}`)
      }
    };

    return getOrPut().pipe(
      map((res) => res.response),
      catchError((error) => {
        console.error('Error fetching item:', error);
        return of(null);
      }));
  }


  const update = (id: number, item: Partial<NTT>) =>
    ajax.patch(`${baseUrl}/items/${id}`, item).pipe(
      map((res) => res.response),
      catchError((error) => {
        console.error('Error updating item:', error);
        return of(null);
      })
    );

    const eraseOrUpdate = (payload: JSON) =>
    ajax.post(`${baseUrl}/items/`, payload).pipe(
      map((res) => res.response),
      catchError((error) => {
        console.error('Error mutating item:', error);
        return of(null);
      })
    );


  const del = (id: number) =>
    ajax.delete(`${baseUrl}/items/${id}`).pipe(
      map(() => null),
      catchError((error) => {
        console.error('Error deleting item:', error);
        return of(null);
      })
    );

  return {
    create,
    update,
    readOrSearch,
    eraseOrUpdate,
    del
  }


}
