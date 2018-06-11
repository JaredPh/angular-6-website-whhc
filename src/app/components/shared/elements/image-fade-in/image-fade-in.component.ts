import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'whhc-image-fade-in',
  templateUrl: './image-fade-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageFadeInComponent {
  @Input() image: string;
}
