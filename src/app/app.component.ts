import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**
   *
   */
  constructor(private router: Router) {
    // super();

    console.log('constructor()');
  }
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    console.log('ngOnInit()');
    this.router.navigateByUrl('/list');
  }
  title = 'angular-client';
}
