import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../service/favorite.service';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Favorite } from '../model/favorite';

@Component({
  selector: 'writers-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor(
    private service : FavoriteService,
    private auth : AuthService
    ){}

  favorites : Favorite[] = [];

  ngOnInit() { this.getFavorites() };


  handlerFav(fav: Favorite, selected: boolean) {

    if (selected) this.service.add({ ...fav, favorite: true });
    else this.service.remove({ ...fav });

  }

  private getFavorites(){

    this.favorites = this.service.findByUser(this.auth.user.name);

  }

}