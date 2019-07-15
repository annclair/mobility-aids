import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { MobilityAids } from '../models/mobility-aids.model';

@Injectable({
  providedIn: 'root'
})
export class MobilityAidsService {

  private baseUrl: String = environment.base_url;
  
  constructor( private http: HttpClient ) { }
  
  getAll(): Observable<MobilityAids[]> {
    return this.http.get<MobilityAids[]>(`${this.baseUrl}mobility_aids`);
  }

  getOne(id: number): Observable<MobilityAids> {
    return this.http.get<MobilityAids>(`${this.baseUrl}mobility_aids/${id}`);
  }
}
