import { IImage } from '../media/media.interfaces';
import { IUser } from '../users/users.interfaces';

export interface IEvent {
  slug: string;
  heading: string;
  thumb: IImage;
  start: string;
  end: string;
  location: string;
  body: string;
  author: IUser;
  tags: string[];
  facebook?: string;
}
