import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { PageLoaderService } from '../shared/elements/page-loader/page-loader.service';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private pageLoader: PageLoaderService,
    private authService: AuthService,
  ) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    this.pageLoader.set('Loading Members Area....');

    const authenticated = await this.authService.isAuthenticated();

    if (!authenticated) {
      this.router.navigateByUrl('/login');
    }

    return authenticated;
  }
}
