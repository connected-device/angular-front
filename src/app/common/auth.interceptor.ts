import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.ACCESS_TOKEN; // you probably want to store it in localStorage or something
    console.log("token", localStorage.ACCESS_TOKEN);
    if (!token) {
      return next.handle(req);
    }

    const req1 = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${token}`)
    });

    return next.handle(req1);
  }
}
