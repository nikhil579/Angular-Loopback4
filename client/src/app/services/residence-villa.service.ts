import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResidenceVilla } from '../models/residence-villa'

@Injectable({
  providedIn: 'root'
})
export class ResidenceVillaService {
  private readonly URL: string = 'http://localhost:3000/residence-villas'
  constructor(private http: HttpClient) { }

  getResidenceVillas() {
    return this.http.get(this.URL)
  }
  postResidenceVilla(residencevilla: ResidenceVilla) {
    return this.http.post(this.URL, residencevilla);
  }
  updateResidenceVilla(residencevilla: ResidenceVilla, id: string) {
    return this.http.put(this.URL + `/${id}`, residencevilla)
  }
  deleteResidenceVilla(id: string) {
    return this.http.delete(this.URL + `/${id}`)
  }
  getOneResidenceVilla(id: string) {
    return this.http.get(this.URL + `/${id}`)
  }
}
