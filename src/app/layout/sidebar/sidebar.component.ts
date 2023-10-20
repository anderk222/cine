import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'cine-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnChanges {

  constructor(
    private auth : AuthService,
    private router : Router,
    private snackbar : MatSnackBar
    ){ }

    ngOnChanges(changes: SimpleChanges): void {
      
    }

  logout(){

    this.auth.logout();

    this.reload();
    this.snackbar.open('Session cerrada con exito')
  }

  private reload(){
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }

  


  get authenticated() : boolean { return this.auth.authenticated };

  get user() { return this.auth.user};

}
