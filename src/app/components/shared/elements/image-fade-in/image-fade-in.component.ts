import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IImage } from '../../../media/media.interfaces';

@Component({
  selector: 'whhc-image-fade-in',
  templateUrl: './image-fade-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageFadeInComponent {
  @Input() image: IImage;
  @Input() size?: string;
}
