import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InformationResidenceVilla } from '../models/information-residence-villa';

@Injectable({
  providedIn: 'root'
})
export class InformationFormService {
  private readonly URL: string = 'http://localhost:3000/information-residence-villas'
  constructor(private http: HttpClient) { }

  getInformationForms() {
    return this.http.get(this.URL)
  }
  postInformationForm(informationform: InformationResidenceVilla) {
    return this.http.post(this.URL, informationform);
  }
  updateInformationForm(informationform: InformationResidenceVilla, id: string) {
    return this.http.put(this.URL + `/${id}`, informationform)
  }
  deleteInformationForm(id: string) {
    return this.http.delete(this.URL + `/${id}`)
  }
  getOneInformationForm(id: string) {
    return this.http.get(this.URL + `/${id}`)
  }
}
