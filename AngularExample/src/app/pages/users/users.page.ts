import { UserService } from './../../services/user.service'
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  
  // Resultado de la búsqueda
  results: Observable<any>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.results = this.userService.allData();
  }
}
