import { Routes, RouterModule } from '@angular/router';
import { WarComponent } from './war.component';

const routes: Routes = [
    {
        component: WarComponent,
        path: 'war'
    }];

export const WarRoutes: any = RouterModule.forChild(routes);