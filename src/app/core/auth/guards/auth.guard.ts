import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { UserRole } from '../../models';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    return this.authService.currentUser$.pipe(
      map((user) => {
        if (!user) {
          return this.router.createUrlTree(['/auth/login']);
        }

        const allowedRoles = route.data['roles'] as UserRole[] | undefined;
        if (allowedRoles && !allowedRoles.includes(user.role)) {
          return this.router.createUrlTree(['/unauthorized']);
        }

        return true;
      })
    );
  }
}
