import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { Episodes, EpisodesResult } from '../../interfaces/episodes';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private http: HttpClient) {

  }

  getEpisodecount(): Observable<number> {
    return this.http.get<Episodes>(`${base_url}/episode`)
      .pipe(
        map(resp => resp.info.count)
      )
  }

  getLatestEpisodes() {
    return this.http.get<Episodes>(`${base_url}/episode`)
      .pipe(
        map(
          resp => {
            let latest: EpisodesResult[] = [];
            for (let i = 0; i <= 4; i++) {
              latest.push(resp.results.pop()!)
            }
            return latest;
          }))
  }

  getAllEpisodes(): Observable<Episodes>{
    return this.http.get<Episodes>(`${base_url}/episode`);
   }

   getPaginatedEpisodes(url:string ){
    return this.http.get<Episodes>(url);
   }
   getEpisodesByName(name:string){
      return this.http.get<Episodes>(`${base_url}/episode/?name=${name}`);
   }


}
