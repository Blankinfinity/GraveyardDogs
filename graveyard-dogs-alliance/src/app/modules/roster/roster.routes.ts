import { Routes, RouterModule } from '@angular/router';
import { RosterComponent } from './roster.component';

const routes: Routes = [
    {
        component: RosterComponent,
        path: 'roster'
    }];

export const RosterRoutes: any = RouterModule.forChild(routes);
