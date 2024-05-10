import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private api: CommonService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var loggedUser = this.api.decy(sessionStorage.getItem('userDetails'));
    var adminUser = this.api.decy(sessionStorage.getItem('ucoObjRights'));

    if (loggedUser != undefined && adminUser != undefined) {
      if (adminUser.Table.length > 0) {
        return true;
      }
    }
    else {
      this.router.navigate(['/']);
    }

  }

}
