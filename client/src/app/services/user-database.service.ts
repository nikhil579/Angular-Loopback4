import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from "../models/user-info";
@Injectable({
  providedIn: 'root'
})
export class UserDatabaseService {
  private readonly URL: string = 'http://localhost:3000/user-infos'
  constructor(private http: HttpClient) { }
  getUserInfo() {
    return this.http.get(this.URL)
  }
  postUserInfo(userinfo: UserInfo) {
    return this.http.post(this.URL, userinfo);
  }
  updateUserInfo(userinfo: UserInfo, id: string) {
    return this.http.put(this.URL + `/${id}`, userinfo)
  }
  deleteUserInfo(id: string) {
    return this.http.delete(this.URL+`/${id}`)
  }
  getOneUserInfo(id:string) {
    return this.http.get(this.URL+`/${id}`)
  }
 
}
