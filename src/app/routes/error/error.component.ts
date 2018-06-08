import { Component, OnInit } from '@angular/core';
import { PageLoaderService } from '../../components/shared/elements/page-loader/page-loader.service';
import { IImage } from '../../components/media/media.interfaces';
import { ActivatedRoute } from '@angular/router';

interface IError {
  code: string;
  message: string;
  image: IImage;
}

const errors: IError[] = [
  {
    code: '401',
    message: 'Not authorised...',
    image: { url: '/assets/images/errors/401.jpg' },
  },
  {
    code: '404',
    message: 'Something went wrong...',
    image: { url: '/assets/images/errors/404.jpg' },
  },
  {
    code: '500',
    message: 'Internal error...',
    image: { url: '/assets/images/errors/500.jpg' },
  },
];

@Component({
  selector: 'whhc-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  public error: IError;

  constructor(
    private pageLoader: PageLoaderService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: { errorCode: string}) => {
        this.error = errors.find(err => err.code === data.errorCode);
        this.pageLoader.clear();
      });
  }

}
