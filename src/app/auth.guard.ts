import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = true;
  // const isAuthenticated = false;
  if (isAuthenticated) {
    return true;
  } else {
    console.log(route);
    console.log(state);
    const router: Router = new Router();
    router.navigate(['/permission']);
    return false;
  }
  // return isAuthenticated;
};
