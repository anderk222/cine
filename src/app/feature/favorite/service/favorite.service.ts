import { Injectable } from '@angular/core';
import { Favorite } from '../model/favorite';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  public add(fav : Favorite){

    let idx = this.favorites.findIndex(v=>this.compare(v,fav));

    if(idx >= 0 ) return;

    let favs = this.favorites;

    favs.push(fav);

    localStorage.setItem("fav", JSON.stringify(favs));

  }

  
  public remove(fav : Favorite){
    
    let favs = this.favorites.filter(v=>!this.compare(v, fav) );

    localStorage.setItem("fav", JSON.stringify(favs));

  }

  public findByUser(name : string){

   return this.favorites.filter(fav=>fav.user===name);

  }

  get favorites(): Favorite[]{

    let storage = localStorage.getItem("fav");

    return !storage ? [] : JSON.parse(storage);

  }

  private compare(fav1 : Favorite, fav2 : Favorite){

    return fav1.user ==fav2.user && fav1.name == fav2.name

  }

}