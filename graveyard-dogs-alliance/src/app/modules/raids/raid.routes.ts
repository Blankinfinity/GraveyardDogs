import { Routes, RouterModule } from '@angular/router';
import { RaidComponent } from './raid/raid.component';

const routes: Routes = [
    {
        component: RaidComponent,
        path: 'raid'
    }];

export const RaidRoutes: any = RouterModule.forChild(routes);
