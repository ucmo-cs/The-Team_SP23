import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { HeaderModule } from './app/header.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule(HeaderModule)
 .catch(err => console.error(err));
