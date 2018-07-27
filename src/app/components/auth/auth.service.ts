import { Injectable } from '@angular/core';
import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserSession } from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk/global';
import * as STS from 'aws-sdk/clients/sts';
import { authActions } from './auth.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../app.store';

@Injectable()
export class AuthService {

  private pool: CognitoUserPool;

  constructor(
    private redux: NgRedux<IAppState>,
  ) {
    this.pool = new CognitoUserPool({
      UserPoolId: 'eu-west-1_E1Ww58O9j',
      ClientId: '2v2uo298itsl382vhcfi83k107',
    });
  }

  public authenticate(email: string, password: string): Promise<string> { // todo: CognitoCallback
    console.log('authenticate', email, password);
    const authenticationData = {
      Username: email,
      Password: password,
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username: email,
      Pool: this.pool,
    };

    const cognitoUser = new CognitoUser(userData);

    return new Promise((resolve) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        newPasswordRequired: this.newPasswordRequired,
        onSuccess: () => resolve('success'),
        onFailure: error => resolve(error.code),
      });
    });
  }

  private newPasswordRequired (userAttributes, requiredAttributes) {
    console.log('newPasswordRequred');
  }

  public isAuthenticated(): Promise<boolean> {
    return new Promise((resolve) => {
      const cognitoUser = this.pool.getCurrentUser();

      if (cognitoUser != null) {
        cognitoUser.getSession((error, session) => {
          // if (error) {
          //   resolve(false);
          // }

          if (session) {
            const accessToken = session.getAccessToken();
            this.redux.dispatch({type: authActions.AUTH_SET_SESSION, accessToken});
            resolve(true);
          } else {
            resolve(false);
          }
        });
      } else {
        resolve(false);
      }
    });
  }
}
