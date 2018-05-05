import { Component, Input } from '@angular/core';
import { IUser } from '../../users/users.interfaces';

@Component({
  selector: 'whhc-media-avatar',
  templateUrl: './media-avatar.component.html',
  styleUrls: ['./media-avatar.component.scss']
})
export class MediaAvatarComponent {
  @Input() user: IUser;
  @Input() type: string;
}
