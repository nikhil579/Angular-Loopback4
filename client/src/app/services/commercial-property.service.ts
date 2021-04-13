import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommercialProperty } from '../models/commercial-property';

@Injectable({
    providedIn: 'root'
})
export class CommercialService {
    private readonly URL: string = 'http://localhost:3000/commercial-properties'
    constructor(private http: HttpClient) { }

    getCommercials() {
        return this.http.get(this.URL)
    }
    postCommercial(commercial: CommercialProperty) {
        return this.http.post(this.URL, commercial);
    }
    updateCommercial(commercial: CommercialProperty, id: string) {
        return this.http.put(this.URL + `/${id}`, commercial)
    }
    deleteCommercial(id: string) {
        return this.http.delete(this.URL + `/${id}`)
    }
    getOneCommercial(id: string) {
        return this.http.get(this.URL + `/${id}`)
    }
}
