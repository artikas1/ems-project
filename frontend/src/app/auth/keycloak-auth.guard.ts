import { inject } from '@angular/core';
import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

export const keycloakAuthGuard: CanActivateFn = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Promise<boolean> => {
  const keycloak = inject(KeycloakService);
  const requiredRoles = route.data['roles'] as string[];

  const isLoggedIn = await keycloak.isLoggedIn();

  if (!isLoggedIn) {
    await keycloak.login({ redirectUri: window.location.href });
    return false;
  }

  if (!requiredRoles || requiredRoles.length === 0) {
    return true;
  }

  const userRoles = keycloak.getUserRoles();
  return requiredRoles.some((role) => userRoles.includes(role));
};
