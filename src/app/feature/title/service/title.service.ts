import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENV } from 'src/app/env/enviroment';
import { Title } from '../model/title';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private http : HttpClient) { }

  private url = ENV.url + '/title';



  find(title : string){

    return this.http.get<Title[]>(`${this.url}/${title}`)

  }
}
