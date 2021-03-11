import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from "../models/user-info";
@Injectable({
  providedIn: 'root'
})
export class UserDatabaseService {
  private readonly URL: string = 'http://localhost:3000/user-infos'
  private httpheader = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }
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
    return this.http.delete(this.URL + `/${id}`)
  }
  getOneUserInfo(id: string) {
    return this.http.get(this.URL + `/${id}`)
  }
  //
  postValidUserInfo(userinfo: UserInfo) {
    const getEmail = this.getUserInfo()
    if (userinfo.email != 'nikhilsonawane21@gmail.com') {
      return this.http.post(this.URL, userinfo);
    }
    else {
      console.error("email already exist");
    }
  }
  createUser(userinfo: UserInfo) {
    return this.http.post(this.URL, userinfo, this.httpheader);
  }

}
