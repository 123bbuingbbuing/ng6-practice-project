import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Members } from '.././models/Members';
@Injectable({
  providedIn: 'root'
})

export class MembersService {
  membersUrl: string = 'http://localhost:3000/members';

  constructor(private http: HttpClient) { }

  // getMemberProfile(id: number): Observable<Members> {
  //   return <Members>;
  // }

  getMembers(): Observable<Members[]> {
    return this.http.get<Members[]>(this.membersUrl);
  }

  viewContactInfo(id: number): Observable<Members> {
    const url = `${this.membersUrl}/${id}`;
    return this.http.get<Members>(url);
  }
}
