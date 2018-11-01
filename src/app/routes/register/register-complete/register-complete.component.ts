import { Component, OnInit } from '@angular/core';
import { PageLoaderService } from '../../../components/shared/elements/page-loader/page-loader.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'whhc-register-complete',
  templateUrl: './register-complete.component.html',
})
export class RegisterCompleteComponent implements OnInit {

  public installments: number[];

  constructor(
    private pageLoader: PageLoaderService,
    private registerService: RegisterService,
  ) {}

  ngOnInit() {
    this.pageLoader.clear();

    this.installments = this.registerService.getInstallments(sessionStorage.getItem('code'));
  }
}
