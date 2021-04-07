import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InformationForm } from '../models/informationForm';

@Injectable({
  providedIn: 'root'
})
export class InformationFormService {
  private readonly URL: string = 'http://localhost:3000/information-forms'
  constructor(private http: HttpClient) { }

  getInformationForms() {
    return this.http.get(this.URL)
  }
  postInformationForm(informationform: InformationForm) {
    return this.http.post(this.URL, informationform);
  }
  updateInformationForm(informationform: InformationForm, id: string) {
    return this.http.put(this.URL + `/${id}`, informationform)
  }
  deleteInformationForm(id: string) {
    return this.http.delete(this.URL + `/${id}`)
  }
  getOneInformationForm(id: string) {
    return this.http.get(this.URL + `/${id}`)
  }
}
