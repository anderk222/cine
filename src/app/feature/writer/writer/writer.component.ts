import { Component, Input, OnInit } from '@angular/core';
import { WriterService } from '../service/writer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FavoriteService } from '../../favorite/service/favorite.service';
import { Favorite } from '../../favorite/model/favorite';
import { AuthService } from 'src/app/auth/service/auth.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'writers-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {

  constructor(
    private service: WriterService,
    private snackabr: MatSnackBar,
    private favService: FavoriteService,
    private auth: AuthService,
    private dialog: MatDialog,
    private router: Router

  ) { }


  titles: Favorite[] = [];

  @Input() author: string = '';

  ngOnInit(): void {


    this.findTitles(this.author);

  }

  private findTitles(author: string) {

    this.service.findTitles(author).subscribe((res) => this.titles = this.toFavs(res));

  }


  handlerFav(fav: Favorite, selected: boolean) {


    if (!this.auth.authenticated) return this.noAuthenticateDialog();


    if (selected) this.favService.add({ ...fav, favorite: true });
    else this.favService.remove({ ...fav });

  }

  private noAuthenticateDialog() {

    let ref = this.dialog.open(DialogComponent, {
      data: {
        title: 'Necesita Autenticarse',

        message: `Esta funcionalidad no esta
          disponible para usuarios que no
          estan logueados.
          Desea ir al a la pagina de login?`
      }
    });

    ref.afterClosed().subscribe((res => {

      if (res) this.router.navigate(['/auth'])

    }))

  }


  private toFavs(obras: { title: string }[]): Favorite[] {

    let favorites = this.favService.findByUser(this.auth.user.name);

    return obras.map(obra => {

      let idx = favorites.findIndex(fav => fav.name === obra.title);

      return idx < 0
        ? {
          favorite: false,
          name: obra.title,
          user: this.auth.user.name,
          type: 'Obra'
        }
        : favorites[idx]

    });
  }

}