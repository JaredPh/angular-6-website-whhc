import { Injectable } from '@angular/core';
import { HttpService } from '../../components/shared/services/http.service';
import { Router } from '@angular/router';

@Injectable()
export class RegisterService {

  constructor(
    private httpService: HttpService,
    private router: Router,
  ) {}

  public async postForm(form: any): Promise<void> {
    const httpResponse = this.httpService.post('/registrations', form);

    httpResponse.subscribe(
      (data: any) => {
        sessionStorage.setItem('code', data.results[0].code);
        if (data.results[0].status === 'BT') {
          this.router.navigateByUrl(`/register/complete`);
        } else if (data.results[0].status === 'DD') {
          window.open(data.results[0].redirect, '_self');
        } else {
          this.router.navigateByUrl('/error/500');
        }
      },
      (error) => {
        console.log('error', error);
      },
    );
  }

  public async completeRedirect(id: string): Promise<void> {
    const httpResponse = this.httpService.get(`/registrations/${id}`);

    httpResponse.subscribe(
      (data: any) => {
          return true;
        },
      (error) => {
        this.router.navigateByUrl('/error/500');
      },
    );
  }

  public getInstallments(code: string): number[] {
    const prefix = code.substring(0, 3);

    let installments: number[];

    switch (prefix) {
      case 'E1U':
      case 'N1U':
      case 'L1U':
      case 'E2U':
      case 'N2U':
      case 'L2U':
        installments = [0];
        break;

      case 'E1X':
      case 'N1X':
      case 'L1X':
      case 'E2X':
      case 'N2X':
      case 'L2X':
        installments = [40];
        break;

      case 'E1A':
      case 'N1A':
        installments = [260];
        break;
      case 'L1A':
        installments = [275];
        break;
      case 'E2A':
      case 'N2A':
        installments = [140, 140];
        break;
      case 'L2A':
        installments = [155, 140];
        break;

      case 'E1S':
      case 'N1S':
        installments = [135];
        break;
      case 'L1S':
        installments = [150];
        break;
      case 'E2S':
      case 'N2S':
        installments = [75, 75];
        break;
      case 'L2S':
        installments = [90, 75];
        break;

      case 'E1G':
      case 'N1G':
      case 'E1K':
      case 'N1K':
        installments = [150];
        break;
      case 'L1G':
      case 'L1K':
        installments = [165];
        break;
      case 'E2G':
      case 'N2G':
      case 'E2K':
      case 'N2K':
        installments = [80, 80];
        break;
      case 'L2G':
      case 'L2K':
        installments = [95, 80];
        break;
    }

    return installments;
  }
}
