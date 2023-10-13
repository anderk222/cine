import { Component, OnInit } from '@angular/core';
import { WriterService } from '../service/writer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FavoriteService } from '../../favorite/service/favorite.service';
import { Favorite } from '../../favorite/model/favorite';
import { AuthService } from 'src/app/auth/service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'writers-writers',
  templateUrl: './writers.component.html',
  styleUrls: ['./writers.component.css']
})
export class WritersComponent implements OnInit {

  constructor(
    private service: WriterService,
    private snackbar: MatSnackBar,
    private favService: FavoriteService,
    private auth: AuthService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void { this.findAll() }

  writers: Favorite[] = [];

  findAll() {

    this.service.findAll().subscribe((res) => this.writers = this.toFavs(res.authors));
  }

  handlerFav(fav: Favorite, selected: boolean) {

    if (!this.auth.authenticated) return this.noAuthenticateDialog();


    if (selected) this.favService.add({ ...fav, favorite: true });
    else this.favService.remove(fav);

  }

  private noAuthenticateDialog() {

    let ref = this.dialog.open(DialogComponent, {
      data: {
        title: 'Necesita Autenticarse',

        message: `Esta funcionalidad no esta
          disponible para usuarios que no
          estan logueados.
          Desea ir a la pagina de login?`
      }
    });

    ref.afterClosed().subscribe((res => {

      if (res) this.router.navigate(['/auth'])

    }))

  }
  private toFavs(writers: string[]): Favorite[] {

    let favorites = this.favService.findByUser(this.auth.user.name);

    return writers.map(writer => {

      let idx = favorites.findIndex(fav => fav.name === writer);

      return idx < 0 ? {
        favorite: false,
        name: writer,
        user: this.auth.user.name,
        type: 'Author'
      }
        : favorites[idx]
    });

  }

}