import { ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class AppRouteStrategy {
  public shouldDetach(route: ActivatedRouteSnapshot): boolean { return true; }
  public store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {}
  public shouldAttach(route: ActivatedRouteSnapshot): boolean { return false; }
  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle { return null; }
  public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return (future.data.reuse === true);
  }
}
