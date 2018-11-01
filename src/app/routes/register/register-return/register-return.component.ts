import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'whhc-register-return',
  templateUrl: './register-return.component.html',
})
export class RegisterReturnComponent implements OnInit {

  constructor(
    private registerService: RegisterService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe( (params) => {
      const id = params['redirect_flow_id'];

      if (id) {
        this.registerService.completeRedirect(id).then(() => {
          this.router.navigateByUrl('/register/complete');
        });
      } else {
        this.router.navigateByUrl('/error/404');
      }
    });
  }

}
