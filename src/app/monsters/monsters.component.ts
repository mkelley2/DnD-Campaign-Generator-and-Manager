import { Component, OnInit } from '@angular/core';
import{ UserService } from '../user.service';
import { AuthService } from './../auth.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {
  loggedInUser: any;

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth) {
          this.userService.getUserByEmail(auth.google.email).subscribe(res => {
            this.loggedInUser = res[0];
          });
        }
      });
  }
}