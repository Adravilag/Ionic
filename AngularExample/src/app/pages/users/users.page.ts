import { UserService } from './../../services/user.service'
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  
  // Resultado de la búsqueda
  results: Observable<any>;

  // Constructor de UsersPage
  constructor(private userService: UserService) { }

  // Inicialización
  ngOnInit() {
    this.results = this.userService.getUsers();
  }
}
