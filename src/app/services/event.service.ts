import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  readonly API_URL_EVENTS = "http://localhost:8080/events";

  constructor(private http : HttpClient) { }

  getAllEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL_EVENTS);
  }

  removeEvent(id : string): Observable<any> {
    return this.http.delete<any>(this.API_URL_EVENTS + "/" + id);
  }

  getSpecificEvent(id : string) : Observable<any[]> {
    return this.http.get<any[]>(this.API_URL_EVENTS + "/" + id);
  }
  
  createEvent(event : any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.API_URL_EVENTS, event, { headers });
  }

  updateEvent(id : string, event : any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(this.API_URL_EVENTS + "/" + id, event, { headers });
  }
  
  linkArtist(idEvent: string, idArtist: string): Observable<any> {
    return this.http.post<any>(this.API_URL_EVENTS + "/" + idEvent + "/artists/" + idArtist, { headers })
  }

  unlinkArtist(idEvent: string, idArtist: string): Observable<any> {
    return this.http.delete<any>(this.API_URL_EVENTS + "/" + idEvent + "/artists/" + idArtist, { headers })
  }
}
