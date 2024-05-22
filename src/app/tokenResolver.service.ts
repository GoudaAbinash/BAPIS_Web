import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { catchError } from 'rxjs/internal/operators/catchError';
import { empty } from 'rxjs/internal/observable/empty';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
  })
  export class TokenResolverService implements Resolve<any> {
    loading = false;
    constructor(private commonService: CommonService) { 
      this.loading =true;
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return  sessionStorage.getItem('t') ?  sessionStorage.getItem('t')
      : this.commonService.getGuestToken().pipe(
        catchError((error) => {
        return empty();
        })
      );
    }
  }
