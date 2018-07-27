import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../../components/auth/auth.service';

@Injectable()
export class UnAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    // private pageLoader: PageLoaderService,
    private authService: AuthService,
  ) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    // this.pageLoader.set('Checking Loge....');

    const authenticated = await this.authService.isAuthenticated();

    if (authenticated) {
      this.router.navigateByUrl('/members');
    }

    return !authenticated;
  }
}
