import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InformationCommercialProperty } from '../models/information-commercial-property';

@Injectable({
    providedIn: 'root'
})
export class InformationCommercialService {
    private readonly URL: string = 'http://localhost:3000/information-commercial-properties'
    constructor(private http: HttpClient) { }

    getInformationForms() {
        return this.http.get(this.URL)
    }
    postInformationForm(commercial: InformationCommercialProperty) {
        return this.http.post(this.URL, commercial);
    }
    updateInformationForm(commercial: InformationCommercialProperty, id: string) {
        return this.http.put(this.URL + `/${id}`, commercial)
    }
    deleteInformationForm(id: string) {
        return this.http.delete(this.URL + `/${id}`)
    }
    getOneInformationForm(id: string) {
        return this.http.get(this.URL + `/${id}`)
    }
}
