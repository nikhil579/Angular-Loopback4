import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResidenceHouse } from '../models/residence-house'

@Injectable({
  providedIn: 'root'
})
export class ResidenceHouseService {
  private readonly URL: string = 'http://localhost:3000/residence-houses'
  constructor(private http: HttpClient) { }

  getResidenceHouses() {
    return this.http.get(this.URL)
  }
  postResidenceHouse(residencehouse: ResidenceHouse) {
    return this.http.post(this.URL, residencehouse);
  }
  updateResidenceHouse(residencehouse: ResidenceHouse, id: string) {
    return this.http.put(this.URL + `/${id}`, residencehouse)
  }
  deleteResidenceHouse(id: string) {
    return this.http.delete(this.URL + `/${id}`)
  }
  getOneResidenceHouse(id: string) {
    return this.http.get(this.URL + `/${id}`)
  }
}
