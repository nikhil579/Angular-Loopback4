import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RealEstate } from '../models/realEstate';

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {
  private readonly URL: string = 'http://localhost:3000/real-estates'
  constructor(private http: HttpClient) { }

  getRealEstates() {
    return this.http.get(this.URL)
  }
  postRealEstate(realestate: RealEstate) {
    return this.http.post(this.URL, realestate);
  }
  updateRealEstate(realestate: RealEstate, id: string) {
    return this.http.put(this.URL + `/${id}`, realestate)
  }
  deleteRealEstate(id: string) {
    return this.http.delete(this.URL + `/${id}`)
  }
  getOneRealEstate(id: string) {
    return this.http.get(this.URL + `/${id}`)
  }
}
