// app.config.ts
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { KeycloakService, provideKeycloak } from 'keycloak-angular';
import {ApplicationConfig} from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideKeycloak({
      config: {
        url: 'http://localhost:8080',
        realm: 'ems-realm',
        clientId: 'ems-client'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html'
      }
    })
  ]
};
