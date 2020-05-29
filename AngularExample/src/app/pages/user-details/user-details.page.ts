import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  information = null;
  data = null;
  ad = null;

  constructor(private ActivatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    let id = this.ActivatedRoute.snapshot.paramMap.get('id');

    this.userService.getDetails(id).subscribe(result => {this
      console.log('details: ', result);
      this.information = result;
      this.data = this.information.data;
      this.ad = this.information.ad;
    });
  }

}
