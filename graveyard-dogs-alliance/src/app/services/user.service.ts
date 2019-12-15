import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';

import { BaseService } from './base.service';



// import * as _ from 'lodash';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { ConfigService } from './utils/config.service';
import { HttpClient } from '@angular/common/http';
import { UserRegistration } from '../models/interfaces/user-registration.interface';
import { map } from 'rxjs/internal/operators/map';
import { Authorized } from '../models/entities/Authorized';

@Injectable()

export class UserService extends BaseService {

    baseUrl = '';

    // Observable navItem source
    private authNavStatusSource = new BehaviorSubject<boolean>(false);
    // Observable navItem stream
    authNavStatus$ = this.authNavStatusSource.asObservable();

    private loggedIn = false;

    constructor(private http: HttpClient, private configService: ConfigService) {
        super();
        this.loggedIn = !!localStorage.getItem('auth_token');
        // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
        // header component resulting in authed user nav links disappearing despite the fact user is still logged in
        this.authNavStatusSource.next(this.loggedIn);
        this.baseUrl = configService.getApiURI();
    }

    register(email: string, password: string, firstName: string, lastName: string, location: string): Observable<boolean> {
        const body = JSON.stringify({ email, password, firstName, lastName, location });

        return this.http.post(this.baseUrl + '/accounts', body)
            .pipe(map(res => true));
            //.catch(this.handleError);
    }

    login(userName, password) {
        return this.http
            .post(
                this.baseUrl + '/auth/login',
                JSON.stringify({ userName, password })
            )
            .pipe(map((res: Authorized) => res))
            .pipe(map(res => {
                localStorage.setItem('auth_token', res.auth_token);
                this.loggedIn = true;
                this.authNavStatusSource.next(true);
                return true;
            }));
            //.catch(this.handleError);
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
        this.authNavStatusSource.next(false);
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}
