import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENV } from 'src/app/env/enviroment';

@Injectable({
  providedIn: 'root'
})
export class WriterService {

  constructor(private http : HttpClient) { }

  private url = ENV.url + '/author';

  findAll(){

    return this.http.get<{authors:string[]}>(this.url);
    
  }

  findTitles(author : string){

    return this.http.get<{title : string}[]>(`${this.url}/${author}/title`)

  }
  
}