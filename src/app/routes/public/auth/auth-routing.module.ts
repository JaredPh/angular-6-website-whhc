import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegmentGroup, UrlSegment } from '@angular/router';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthResetComponent } from './auth-reset/auth-reset.component';
import { UnAuthGuard } from './unauthenticated.guard';

function rootMatcher(rootPath: string) {
  return (
    segments: UrlSegment[],
    segmentGroup: UrlSegmentGroup,
    // route: Route,
  ) => {
    const currentRootPath = segmentGroup.segments[0].path;

    return (currentRootPath === rootPath)
      ? { consumed: segments }
      : null;
  };
}

const routes: Routes = [
  {
    matcher: rootMatcher('login'),
    component: AuthLoginComponent,
    canActivate: [ UnAuthGuard ],
  },
  {
    matcher: rootMatcher('reset-password'),
    component: AuthResetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}

