import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
    {
        component: LoginComponent,
        path: 'login',
    },
{
    component: RegistrationFormComponent,
    path: 'register'
}];

export const AccountRoutes: any = RouterModule.forChild(routes);