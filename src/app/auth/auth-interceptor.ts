import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";
import { Injectable } from "@angular/core";

import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.authService.getToken();
   
    if (req.headers.get("skip"))
       return next.handle(req);

    const authRequest = req.clone({                      
     headers: req.headers.set("x-auth-token", authToken) // add our token header name to everyout going request 
    });
    return next.handle(authRequest);
  }
}
