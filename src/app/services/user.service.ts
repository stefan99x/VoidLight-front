import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

import { Constants } from '../shared/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _userUrl = `${Constants.SERVER_URL}/users`;

  constructor(private http: HttpClient) { }

  /**
   * Create a new user account
   * @param user => the user to be created
   */
  public createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this._userUrl}`, user);
  }

  /**
   * Activate user account
   * @param token => string token for the activation
   */
  public activateUserAccount(token: string): Observable<any> {
    return this.http.post<any>(`${this._userUrl}/userToken/?token=${token}`, {});
  }
}
