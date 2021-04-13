import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResidenceApartment } from '../models/residence-apartment'

@Injectable({
  providedIn: 'root'
})
export class ResidenceApartmentService {
  private readonly URL: string = 'http://localhost:3000/residence-apartments'
  constructor(private http: HttpClient) { }

  getResidenceApartments() {
    return this.http.get(this.URL)
  }
  postResidenceApartment(residenceapartment: ResidenceApartment) {
    return this.http.post(this.URL, residenceapartment);
  }
  updateResidenceApartment(residenceapartment: ResidenceApartment, id: string) {
    return this.http.put(this.URL + `/${id}`, residenceapartment)
  }
  deleteResidenceApartment(id: string) {
    return this.http.delete(this.URL + `/${id}`)
  }
  getOneResidenceApartment(id: string) {
    return this.http.get(this.URL + `/${id}`)
  }
}
