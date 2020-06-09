import { Routes, RouterModule } from '@angular/router';
import { TeamAddComponent } from './team-add/team-add.component';

const routes: Routes = [
    {
        component: TeamAddComponent,
        path: 'teams'
    }];

export const TeamsRoutes: any = RouterModule.forChild(routes);