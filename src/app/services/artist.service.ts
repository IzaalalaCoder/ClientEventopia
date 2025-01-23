import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  readonly API_URL_ARTISTS = "http://localhost:8080/artists";

  constructor(private http : HttpClient) { }

  getAllArtists() : Observable<any[]> {
    return this.http.get<any[]>(this.API_URL_ARTISTS);
  }

  getSpecificArtist(id: string) : Observable<any[]> {
    return this.http.get<any[]>(this.API_URL_ARTISTS + "/" + id);
  }

  removeArtist(id : string): Observable<any> {
    return this.http.delete<any>(this.API_URL_ARTISTS + "/" + id);
  }

  updateArtist(id: string, artist : any) : Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(this.API_URL_ARTISTS + "/" + id, artist, { headers });
  }

  createArtist(artist : any) : Observable<any[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.API_URL_ARTISTS, artist, { headers });
  }

  getAllEventsOfArtist(id: string) : Observable<any[]> {
    return this.http.get<any[]>(this.API_URL_ARTISTS + "/" + id + "/events");
  }

}
