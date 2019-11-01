import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';


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
    // this.router.navigateByUrl('/list');

    timer(300000, 2000)
      .subscribe(x => {
        if (x % 2 == 0) {
          console.log('timer: even ' + x);
          this.router.navigateByUrl('/');
        } else {
          console.log('timer: odd ' + x);
          this.router.navigateByUrl('/list');
        }
      })



  }
  title = 'angular-client';
}
