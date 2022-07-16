import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  isLogged = false;
  nombreUsuario = '';

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }
  }

}
