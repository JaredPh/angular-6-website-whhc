import { Component, OnInit } from '@angular/core';
import { PageLoaderService } from '../../components/shared/elements/page-loader/page-loader.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ScrollToService } from 'ng2-scroll-to-el';
import * as moment from 'moment';
import { RegisterService } from './register.service';

@Component({
  selector: 'whhc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public options = {
    status: [
      { code: 'E', label: 'Existing' },
      { code: 'N', label: 'New / Returning' },
    ],
    type: [
      { code: 'A', label: 'Adult' },
      { code: 'S', label: 'Student' },
      { code: 'G', label: 'Graduate' },
      { code: 'K', label: 'Goalkeeper' },
    ],
    teams: {
      ladies: [
        {code: 'L1', label: 'L1s'},
        {code: 'L2', label: 'L2s'},
        {code: 'L3', label: 'L3s'},
        {code: 'L4', label: 'L4s'},
        {code: 'L5', label: 'L5s'},
        {code: 'LU', label: 'Unsure'},
      ],
      mens: [
        {code: 'M1', label: 'M1s'},
        {code: 'M2', label: 'M2s'},
        {code: 'M3', label: 'M3s'},
        {code: 'M4', label: 'M4s'},
        {code: 'M5', label: 'M5s'},
        {code: 'M6', label: 'M6s'},
        {code: 'M7', label: 'M7s'},
        {code: 'M8', label: 'M8s'},
        {code: 'MU', label: 'Unsure'},
      ],
      other: [
        {code: 'X', label: 'Social'},
        // {code: 'U', label: 'Umpire'},
      ],
    },
    installments: [
      { code: '1', label: '1 Installment' },
      { code: '2', label: '2 Installments' },
    ],
  };

  public flags = {
    about: false,
    membership: false,
    existing: false,
    installments: false,
  };

  public earlybird: boolean = moment().isBefore('2018-10-15');

  public installments;

  public form: FormGroup;

  public aboutFnameCtrl: FormControl;
  public aboutLnameCtrl: FormControl;
  public aboutEmailCtrl: FormControl;
  public aboutPhoneCtrl: FormControl;

  public membershipStatusCtrl: FormControl;
  public membershipTypeCtrl: FormControl;

  public existingTeamCtrl: FormControl;
  public installmentsCountCtrl: FormControl;

  constructor(
    private pageLoader: PageLoaderService,
    public formBuilder: FormBuilder,
    private scrollService: ScrollToService,
    private registerService: RegisterService,
  ) {}

  ngOnInit() {
    this.formInit();

    this.pageLoader.clear();
  }

  private formInit() {
    this.aboutFnameCtrl = new FormControl('', [ Validators.required ]);
    this.aboutLnameCtrl = new FormControl('', [ Validators.required ]);
    this.aboutEmailCtrl = new FormControl('', [ Validators.required ]); // Todo: better validation
    this.aboutPhoneCtrl = new FormControl('', [ Validators.required ]); // Todo: better validation

    this.membershipStatusCtrl = new FormControl('', [ Validators.required ]);
    this.membershipTypeCtrl = new FormControl('', [ Validators.required ]);

    this.existingTeamCtrl = new FormControl('', [ Validators.required ]);
    this.installmentsCountCtrl = new FormControl('', [ Validators.required ]);

    this.form = this.formBuilder.group({
      about: this.formBuilder.group({
        fname: this.aboutFnameCtrl,
        lname: this.aboutLnameCtrl,
        email: this.aboutEmailCtrl,
        phone: this.aboutPhoneCtrl,
      }),
      membership: this.formBuilder.group({
        status: this.membershipStatusCtrl,
        type: this.membershipTypeCtrl,
      }),
      existing: this.formBuilder.group({
        team: this.existingTeamCtrl,
      }),
      installments: this.formBuilder.group({
        installments: this.installmentsCountCtrl,
      }),
    });

    this.form.valueChanges.subscribe(f => {
      if (this.form.controls.installments.valid) {
        this.setInstallments(f);
      }
    });
  }

  public setOption(form: string, field: string, opt: string) {
    (this.form as any).controls[form].controls[field].setValue(opt);

    this.checkSectionIscomplete(form);
  }

  public checkSectionIscomplete(section: string) {
    if (!this.flags[`${section}`]  && (this.form as any).controls[section].valid) {
      this.flags[`${section}`] = true;

      let nextSection: string;

      switch (section) {
        case 'about':
          nextSection = 'membership';
          break;
        case 'membership':
          nextSection = 'existing';
          break;
        case 'existing': {
          nextSection = (this.existingTeamCtrl.value === 'X' || this.existingTeamCtrl.value === 'U')
            ? 'confirmation'
            : 'installments';
          break;
        }
        case 'installments': {
          nextSection = 'confirmation';
          break;
        }
      }

      this.scrollToSection(`#${nextSection}-form`);
    }
  }

  public scrollToSection(el: string) {
    setTimeout(() => {
      this.scrollService.scrollTo(el, undefined, 3 * -32);
    }, 0);
  }

  public getMembershipType(): string {
    let output: string;

    const status = this.options.status.find(f => f.code === this.membershipStatusCtrl.value);
    const existing = this.options.teams.other.find(f => f.code === this.existingTeamCtrl.value);

    if (!existing) {
      const type = this.options.type.find(f => f.code === this.membershipTypeCtrl.value);

      output = `${status.label} ${type.label}`;

      if (this.earlybird) {
        output = `${output} (earlybird)`;
      }
    } else {
      output = `${status.label} ${existing.label}`;
    }

    return output;
  }

  private setInstallments(form) {
    const installments = form.installments.installments;
    const team = form.existing.team.substr(0, 1);

    const type = (team === 'U' || team === 'X')
      ? team
      : form.membership.type;

    const status = form.membership.status;

    const prefix = (status === 'N')
      ? status
      : (this.earlybird)
        ? 'E'
        : 'L';

    const code = `${prefix}${installments}${type}`;

    this.installments = this.registerService.getInstallments(code);
  }

  public submitForm() {
    if (this.form.valid) {
      this.pageLoader.set('Uploading Your Details...');
      this.registerService.postForm(this.form.value);
    }
  }
}
