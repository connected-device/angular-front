import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { timer } from "rxjs";
import { take } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  /**
   *
   */

  public form: FormGroup;

  constructor(private router: Router) {
    // super();
    this.form = new FormGroup(
      {
        organizationId: new FormControl(null)
      },
      { updateOn: "change" }
    ); // blur, change, submit
  }

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    this.router.navigateByUrl("/users-add");

    // timer(3000000, 2000)
    //   .subscribe(x => {
    //     if (x % 3 == 0) {
    //       console.log('timer: ' + x);
    //       this.router.navigateByUrl('/');
    //     } else if (x % 3 == 1) {
    //       console.log('timer: ' + x);
    //       this.router.navigateByUrl('/list');
    //     } else {
    //       console.log('timer: ' + x);
    //       this.router.navigateByUrl('/users');
    //     }
    //   })
  }
  title = "angular-client";
}
