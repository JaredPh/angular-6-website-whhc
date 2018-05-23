import { Component, Input } from '@angular/core';
import { IUser } from '../../users/users.interfaces';

@Component({
  selector: 'whhc-media-avatar',
  templateUrl: './media-avatar.component.html',
})
export class MediaAvatarComponent {
  @Input() user: IUser;
  @Input() type: string;
}
