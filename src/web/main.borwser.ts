import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app';

export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

export function bootstrap(main) {
  if (document.readyState === 'complete') {
    main();
  } else {
    document.addEventListener('DOMContentLoaded', main);
  }
}

bootstrap(main);
